"""Verify the Git index, not just ignore patterns. Does not print secret values."""
import re
import subprocess
from pathlib import Path
paths=subprocess.check_output(['git','ls-files','-z']).decode().split('\0')
bad=[]
for name in filter(None,paths):
    p=Path(name)
    if name.startswith(('.local/','.wrangler/','.venv/','node_modules/','.git/')) or p.name in ('.env','.dev.vars','psn_cache.json') or p.suffix in ('.pem','.key','.sqlite3','.db','.csv'):
        bad.append(name)
    if p.is_file() and p.suffix not in ('.png','.jpg','.jpeg','.webp','.ico'):
        content=p.read_text(errors='replace')
        if re.search(r'(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,})',content):bad.append(name)
if bad:raise SystemExit('Private files or token patterns detected in index: '+', '.join(sorted(set(bad))))
print('Git index contains no private runtime files or GitHub token patterns.')
