"""SQLite storage. The public API never exposes settings or PSN baselines."""
import json
import os
import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA_DIR = Path(os.environ.get('DATA_DIR', ROOT / '.local')).resolve()
DB_PATH = DATA_DIR / 'collection.sqlite3'


class ClosingConnection(sqlite3.Connection):
    def __exit__(self, *args):
        try:
            return super().__exit__(*args)
        finally:
            self.close()


def connect():
    DATA_DIR.mkdir(parents=True, exist_ok=True, mode=0o700)
    db = sqlite3.connect(DB_PATH, timeout=30, factory=ClosingConnection)
    db.row_factory = sqlite3.Row
    db.execute('PRAGMA journal_mode=WAL')
    return db


def initialize():
    with connect() as db:
        db.executescript('''
        CREATE TABLE IF NOT EXISTS items (id TEXT PRIMARY KEY, payload TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS psn_baseline (title TEXT PRIMARY KEY, hours REAL NOT NULL);
        CREATE TABLE IF NOT EXISTS login_attempts (ip TEXT, attempted REAL);
        ''')
        if not db.execute("SELECT 1 FROM settings WHERE key='initialized'").fetchone():
            rows = json.loads((ROOT / 'seed/collection.json').read_text())
            db.executemany('INSERT INTO items VALUES (?,?)', [(x['id'], json.dumps(x, ensure_ascii=False)) for x in rows])
            cache = DATA_DIR / 'legacy_psn_cache.json'
            if cache.exists():
                db.executemany('INSERT INTO psn_baseline VALUES (?,?)', json.loads(cache.read_text()).items())
            db.execute("INSERT INTO settings VALUES ('initialized','1')")
    DB_PATH.chmod(0o600)


def setting(key, default=''):
    with connect() as db:
        row = db.execute('SELECT value FROM settings WHERE key=?', (key,)).fetchone()
        return row['value'] if row else default


def put_setting(key, value):
    with connect() as db:
        db.execute('INSERT OR REPLACE INTO settings VALUES (?,?)', (key, str(value)))


def collection():
    with connect() as db:
        return [json.loads(r['payload']) for r in db.execute('SELECT payload FROM items ORDER BY rowid')]
