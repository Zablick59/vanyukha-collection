#!/bin/bash
cd "$(dirname "$0")"

echo "🚀 Начинаем обновление..."
python3 psn_sync.py

echo "🌐 Отправляем свежие данные на GitHub..."
git add .
git commit -m "Авто-обновление сайта"
git push

echo "✅ Всё готово! Сайт обновится через минуту."