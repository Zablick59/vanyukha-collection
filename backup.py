"""Run on the server; backups include private settings and must remain private."""
import os
os.environ['DISABLE_SCHEDULER']='1'
import app
from psn_sync import backup
backup()
print('Резервная копия сохранена в DATA_DIR/backups (вне публичной части сайта).')
