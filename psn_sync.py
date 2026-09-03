import re
import json
import ssl
import urllib.parse
import urllib.request
from psnawp_api import PSNAWP

# Твой токен вшит сюда:
NPSSO_TOKEN = "MGN4t7guddAQhQjE0VM5E6vDGTi2ZurRl6n778eYbe9ZqtHqUPilR22IBP4iI4fh"

# ЧЕРНЫЙ СПИСОК (мусор, который нам не нужен на сайте)
IGNORE_APPS = ["apple tv", "youtube", "spotify", "netflix", "twitch", "media player", "hbo", "disney", "share factory"]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {'User-Agent': 'VanyukhaCollectionsGames/1.0'}

def clean_game_title(title):
    # Убираем все маркетинговые приписки для точного сравнения названий
    t = title.lower()
    junk = [" legacy", " enhanced", " - test server", " ru", " complete edition", 
            " definitive edition", " special edition", " director's cut", 
            " ps4 & ps5", " ps4", " ps5", "™", "®", " edition"]
    for j in junk:
        t = t.replace(j, "")
    return t.strip()

def get_wiki_poster(title):
    clean_title = clean_game_title(title)
    wiki_url = (
        f'https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&'
        f'generator=search&gsrsearch={urllib.parse.quote(clean_title + " video game")}&'
        f'gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=600&pilicense=any'
    )
    try:
        req = urllib.request.Request(wiki_url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=4) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', [])
            if pages and 'thumbnail' in pages[0]:
                return pages[0]['thumbnail']['source']
    except Exception:
        pass
    return ""

def main():
    print("🎮 Подключаемся к серверам PlayStation...")
    try:
        psnawp = PSNAWP(NPSSO_TOKEN)
        me = psnawp.me()
        print(f"✅ Успешный вход! Профиль: {me.online_id}")
    except Exception:
        print("❌ Ошибка авторизации. Проверь токен.")
        return

    print("Скачиваем свежую статистику часов и фильтруем мусор...")
    stats = me.title_stats()
    
    psn_data = {}
    for game in stats:
        hours = game.play_duration.total_seconds() / 3600
        clean_name = game.name.lower()
        
        # ФИЛЬТР: Часов больше 1.0 И название не в черном списке
        if hours >= 1.0 and not any(app in clean_name for app in IGNORE_APPS):
            psn_data[game.name] = {
                "hours": round(hours, 1),
                "image": game.image_url if game.image_url else ""
            }

    file_path = "games_data.js"
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print("❌ Файл games_data.js не найден!")
        return

    # Достаем старые игры и сразу очищаем их от мусора для умного сравнения
    raw_existing = re.findall(r'title:\s*"([^"]+)"', content)
    existing_titles_clean = [clean_game_title(t) for t in raw_existing]

    lines = content.split('\n')
    updated_count = 0
    new_games_count = 0

    # 1. ОБНОВЛЕНИЕ ЧАСОВ
    for i, line in enumerate(lines):
        if 'title: "' in line and 'hours: "' in line:
            raw_title = line.split('title: "')[1].split('"')[0]
            title_clean = clean_game_title(raw_title)
            platform = line.split('platform: "')[1].split('"')[0]
            
            for psn_title, game_info in psn_data.items():
                psn_title_clean = clean_game_title(psn_title)
                # Сравниваем очищенные названия
                if title_clean in psn_title_clean or psn_title_clean in title_clean:
                    if platform == "PS5 Pro":
                        old_hours_match = re.search(r'hours:\s*"([^"]*)"', line)
                        if old_hours_match:
                            old_hours = old_hours_match.group(1)
                            new_line = line.replace(f'hours: "{old_hours}"', f'hours: "{game_info["hours"]} ч."')
                            if new_line != line:
                                lines[i] = new_line
                                print(f"🔄 Обновлены часы: {raw_title} -> {game_info['hours']} ч.")
                                updated_count += 1
                    break

    # 2. ДОБАВЛЕНИЕ НОВЫХ ИГР
    new_lines = []
    for psn_title, game_info in psn_data.items():
        psn_title_clean = clean_game_title(psn_title)
        
        # Если очищенного названия нет в нашем очищенном списке — это реально новая игра
        if not any(psn_title_clean in et or et in psn_title_clean for et in existing_titles_clean):
            print(f"✨ Найдена НОВАЯ игра: {psn_title}")
            poster_url = game_info["image"]
            
            if not poster_url:
                print("   ⚠️ PSN не отдал картинку, ищу на Википедии...")
                poster_url = get_wiki_poster(psn_title)
            else:
                print("   ✅ Получен официальный постер PSN!")
                
            safe_title = psn_title.replace('"', "'")
            new_line = f'    {{ title: "{safe_title}", rating: "", year: "", platform: "PS5 Pro", hours: "{game_info["hours"]} ч.", date: "", image: "{poster_url}" }},'
            new_lines.append(new_line)
            new_games_count += 1

    new_content = '\n'.join(lines)
    
    if new_lines:
        insert_block = '\n'.join(new_lines) + '\n'
        last_bracket_idx = new_content.rfind('];')
        if last_bracket_idx != -1:
            new_content = new_content[:last_bracket_idx] + insert_block + new_content[last_bracket_idx:]
        else:
            new_content += '\n' + insert_block + '];\n'

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print(f"\n🎉 Готово! Обновлено часов: {updated_count}. Добавлено новых игр: {new_games_count}")

if __name__ == "__main__":
    main()