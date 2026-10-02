"""Create/change the single owner's password without putting it in code or Git."""
import argparse
import getpass
import secrets
from pathlib import Path
from werkzeug.security import generate_password_hash

root=Path(__file__).resolve().parent
parser=argparse.ArgumentParser()
parser.add_argument('--generate',action='store_true',help='Write a generated password to the ignored local file.')
args=parser.parse_args()
password=secrets.token_urlsafe(20) if args.generate else getpass.getpass('Новый пароль владельца (от 14 символов): ')
if len(password)<14 or len(password)>256: raise SystemExit('Пароль должен содержать 14–256 символов.')
if not args.generate and getpass.getpass('Повтори пароль: ')!=password: raise SystemExit('Пароли не совпадают.')
env=root/'.env'
lines=env.read_text().splitlines() if env.exists() else ['LOCAL_DEV=1','SECRET_KEY='+secrets.token_hex(48)]
lines=[l for l in lines if not l.startswith('ADMIN_PASSWORD_HASH=')]
lines.append('ADMIN_PASSWORD_HASH='+generate_password_hash(password))
env.write_text('\n'.join(lines)+'\n');env.chmod(0o600)
folder=root/'.local';folder.mkdir(exist_ok=True,mode=0o700)
access=folder/'owner-access.txt'
if args.generate:
    access.write_text('Вход владельца: http://127.0.0.1:8000/admin\nПароль: '+password+'\n\nНа публичном сервере используй тот же хэш из .env или задай другой пароль.\nНе публикуй этот файл. Он исключён из Git и Docker.\n')
    access.chmod(0o600)
    print('Пароль сохранён в .local/owner-access.txt. Сам пароль в терминал не выведен.')
elif access.exists():
    access.unlink()
print('Пароль обновлён. Перезапусти сервер; прежние сессии перестанут действовать.')
