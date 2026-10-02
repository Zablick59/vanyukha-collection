#!/bin/zsh
set -euo pipefail
cd "$(dirname "$0")"
if [ ! -d .venv ]; then
  python3 -m venv .venv
  .venv/bin/python -m pip install -r requirements.txt
fi
if ! .venv/bin/python -c "from pathlib import Path; assert 'ADMIN_PASSWORD_HASH=' in Path('.env').read_text()" 2>/dev/null; then
  .venv/bin/python setup_owner.py --generate
fi
open http://127.0.0.1:8000
exec .venv/bin/python app.py
