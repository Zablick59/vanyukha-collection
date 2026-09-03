import re
from psnawp_api import PSNAWP

# ВСТАВЬ СЮДА СВОЙ ТОКЕН ИЗ БРАУЗЕРА:
NPSSO_TOKEN = "MGN4t7guddAQhQjE0VM5E6vDGTi2ZurRl6n778eYbe9ZqtHqUPilR22IBP4iI4fh"

def main():
    print("🎮 Подключаемся к серверам PlayStation...")
    try:
        psnawp = PSNAWP(NPSSO_TOKEN)
        me = psnawp.me()
        print(f"✅ Успешный вход! Профиль: {me.online_id}")
    except Exception:
        print("❌ Ошибка авторизации. Возможно, токен скопирован не полностью или истек.")
        return

    print("Скачиваем свежую статистику часов...")
    stats = me.title_stats()
    
    # Собираем словарь с играми и часами
    psn_data = {}
    for game in stats:
        hours = game.play_duration.total_seconds() / 3600
        if hours > 0:
            # Приводим к нижнему регистру для удобного поиска
            psn_data[game.name.lower()] = round(hours, 1)

    file_path = "games_data.js"
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except FileNotFoundError:
        print("❌ Файл games_data.js не найден!")
        return

    updated_count = 0
    for i, line in enumerate(lines):
        if 'title: "' in line and 'hours: "' in line:
            title = line.split('title: "')[1].split('"')[0].lower()
            platform = line.split('platform: "')[1].split('"')[0]
            
            # Проверяем, есть ли наша игра в свежей выгрузке от Sony
            for psn_title, psn_hours in psn_data.items():
                if title in psn_title or psn_title in title:
                    # Если игра чисто для PS5 Pro - смело обновляем часы
                    if platform == "PS5 Pro":
                        old_hours_match = re.search(r'hours:\s*"([^"]*)"', line)
                        if old_hours_match:
                            old_hours = old_hours_match.group(1)
                            new_line = line.replace(f'hours: "{old_hours}"', f'hours: "{psn_hours} ч."')
                            if new_line != line:
                                lines[i] = new_line
                                print(f"🔄 Обновлено: {title.title()} -> {psn_hours} ч.")
                                updated_count += 1
                    break

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(lines)
        
    print(f"\n🎉 Статистика синхронизирована! Обновлено игр: {updated_count}")

if __name__ == "__main__":
    main()