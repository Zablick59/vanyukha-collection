const myMovies = [
    {
        title: "Человек-паук: Новый день",
        rating: "8/10",
        year: "2026",
        date: "23.08.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/4/45/Spider-Man_Brand_New_Day_Poster.jpg/960px-Spider-Man_Brand_New_Day_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Одиссея",
        rating: "8/10",
        year: "2026",
        date: "07.08.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/1a/%D0%9E%D0%B4%D0%B8%D1%81%D1%81%D0%B5%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%84%D0%B5%D1%80%D0%B0_%D0%9D%D0%BE%D0%BB%D0%B0%D0%BD%D0%B0%29.jpg/960px-%D0%9E%D0%B4%D0%B8%D1%81%D1%81%D0%B5%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%84%D0%B5%D1%80%D0%B0_%D0%9D%D0%BE%D0%BB%D0%B0%D0%BD%D0%B0%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Очень страшное кино",
        rating: "5/10",
        year: "2026",
        date: "01.09.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/b/bf/%D0%9E%D1%87%D0%B5%D0%BD%D1%8C_%D1%81%D1%82%D1%80%D0%B0%D1%88%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2026%29.jpg/960px-%D0%9E%D1%87%D0%B5%D0%BD%D1%8C_%D1%81%D1%82%D1%80%D0%B0%D1%88%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2026%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Камуфляж и шпионаж",
        rating: "7/10",
        year: "2019",
        date: "15.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8d/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9A%D0%B0%D0%BC%D1%83%D1%84%D0%BB%D1%8F%D0%B6_%D0%B8_%D1%88%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D0%B6%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Отступники",
        rating: "7/10",
        year: "2006",
        date: "11.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Заводной апельсин",
        rating: "8/10",
        year: "1971",
        date: "10.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/db/Clockwork_orange_ver2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Книга Бобы Фетта",
        rating: "7/10",
        year: "2021",
        date: "04.08.2026",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/6085668b-0374-4da3-9abc-b40ddcc17279/600x900"
    },
    {
        title: "Мандалорец",
        rating: "7/10",
        year: "2019",
        date: "04.08.2026",
        image: "https://media.kg-portal.ru/tv/m/mandalorian/posters/mandalorian_39.jpg"
    },
    {
        title: "Звёздные войны: Скайуокер. Восход",
        rating: "6/10",
        year: "2019",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/eb/Star_Wars_%E2%80%94_The_Rise_of_Skywalker_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Последние джедаи",
        rating: "7/10",
        year: "2017",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/23/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5%D0%94%D0%B6%D0%B5%D0%B4%D0%B0%D0%B8.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Пробуждение силы",
        rating: "7/10",
        year: "2015",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a8/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_%D0%9F%D1%80%D0%BE%D0%B1%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%B8%D0%BB%D1%8B.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 6 – Возвращение Джедая",
        rating: "8/10",
        year: "1983",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b2/ReturnOfTheJediPoster1983.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 5 – Империя наносит ответный удар",
        rating: "8/10",
        year: "1980",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e0/Empire20strikes20back_old.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 3 – Месть ситхов",
        rating: "8/10",
        year: "2005",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B._%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4_III_%D0%9C%D0%B5%D1%81%D1%82%D1%8C_%D1%81%D0%B8%D1%82%D1%85%D0%BE%D0%B2%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 2 – Атака клонов",
        rating: "8/10",
        year: "2002",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/ad/Star_Wars_Attack_of_the_Clones_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 1 – Скрытая угроза",
        rating: "7/10",
        year: "1999",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/40/Star_Wars_Phantom_Menace_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дюнкерк",
        rating: "7/10",
        year: "2017",
        date: "04.08.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c0/Dunkirk_%28film%2C_2017%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звёздные войны: Эпизод 4 – Новая надежда",
        rating: "7/10",
        year: "1977",
        date: "31.07.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/87/StarWarsMoviePoster1977.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Райя и последний дракон",
        rating: "7/10",
        year: "2021",
        date: "30.07.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/18/Raya_and_the_Last_Dragon.jpeg/960px-Raya_and_the_Last_Dragon.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Не время умирать",
        rating: "6/10",
        year: "2020",
        date: "30.07.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/f/fe/No_Time_to_Die_poster.jpg/960px-No_Time_to_Die_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Цельнометаллическая оболочка",
        rating: "8/10",
        year: "1987",
        date: "30.07.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ef/Full_Metal_Jacket_1987.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Закулисье реальности",
        rating: "7/10",
        year: "2026",
        date: "21.07.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/16/%D0%97%D0%B0%D0%BA%D1%83%D0%BB%D0%B8%D1%81%D1%8C%D0%B5_%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Майкл",
        rating: "7/10",
        year: "2026",
        date: "09.07.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/a/aa/Michael_%282026_film%29_poster.jpg/960px-Michael_%282026_film%29_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Пацаны",
        rating: "8/10",
        year: "2019",
        date: "25.05.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/14/The_Boys_Season_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        title: "Питт",
        rating: "8/10",
        year: "2025",
        date: "19.04.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cc/The_Pitt_TV_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проект Конец света",
        rating: "8/10",
        year: "2026",
        date: "11.04.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b6/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%C2%AB%D0%9A%D0%BE%D0%BD%D0%B5%D1%86_%D1%81%D0%B2%D0%B5%D1%82%D0%B0%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Доказательство смерти",
        rating: "8/10",
        year: "2007",
        date: "28.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Death_Proof_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Матч поинт",
        rating: "7/10",
        year: "2005",
        date: "25.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9C%D0%B0%D1%82%D1%87-%D0%BF%D0%BE%D0%B9%D0%BD%D1%82.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Марсианин",
        rating: "8/10",
        year: "2015",
        date: "21.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/67/The_Martian.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Простая случайность",
        rating: "8/10",
        year: "2025",
        date: "20.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/48/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%B0%D1%8F_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%8C.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Загадочная кожа",
        rating: "8/10",
        year: "2004",
        date: "18.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/eb/Mysterious_Skin_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Каскадёры",
        rating: "7/10",
        year: "2024",
        date: "18.03.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/1f/The_Fall_Guy_%282024%29_poster.jpg/960px-The_Fall_Guy_%282024%29_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Пляж",
        rating: "7/10",
        year: "2000",
        date: "13.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f7/The_beach_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Назови меня своим именем",
        rating: "7/10",
        year: "2017",
        date: "13.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Call_Me_by_Your_Name.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Прибытие",
        rating: "8/10",
        year: "2016",
        date: "06.03.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/5c/Arrival_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хамнет: История, вдохновившая Гамлета",
        rating: "8/10",
        year: "2025",
        date: "27.02.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b5/%D0%A5%D0%B0%D0%BC%D0%BD%D0%B5%D1%82_-_%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F%2C_%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B8%D0%B2%D1%88%D0%B0%D1%8F_%C2%AB%D0%93%D0%B0%D0%BC%D0%BB%D0%B5%D1%82%D0%B0%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Грешники",
        rating: "7/10",
        year: "2025",
        date: "23.02.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/51/%D0%93%D1%80%D0%B5%D1%88%D0%BD%D0%B8%D0%BA%D0%B8_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2025%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "С широко закрытыми глазами",
        rating: "7/10",
        year: "1999",
        date: "21.02.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/aa/EyesWideShutPoster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Бугония",
        rating: "7/10",
        year: "2025",
        date: "19.02.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e2/%D0%91%D1%83%D0%B3%D0%BE%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Одинокие волки",
        rating: "7/10",
        year: "2024",
        date: "13.02.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/8/8e/%D0%9E%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D0%BB%D0%BA%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.webp/960px-%D0%9E%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D0%BB%D0%BA%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.webp.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Возвращение в Сайлент Хилл",
        rating: "6/10",
        year: "2025",
        date: "27.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c6/%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_%D0%A1%D0%B0%D0%B9%D0%BB%D0%B5%D0%BD%D1%82_%D0%A5%D0%B8%D0%BB%D0%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Горничная",
        rating: "7/10",
        year: "2025",
        date: "27.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f0/%D0%93%D0%BE%D1%80%D0%BD%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2025%29_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Марти Великолепный",
        rating: "8/10",
        year: "2025",
        date: "26.01.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/16/%D0%9C%D0%B0%D1%80%D1%82%D0%B8_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BB%D0%B5%D0%BF%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_2025.jpg/960px-%D0%9C%D0%B0%D1%80%D1%82%D0%B8_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BB%D0%B5%D0%BF%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_2025.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Битва за битвой",
        rating: "8/10",
        year: "2025",
        date: "26.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/48/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%B7%D0%B0_%D0%B1%D0%B8%D1%82%D0%B2%D0%BE%D0%B9.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Аватар",
        rating: "8/10",
        year: "2009",
        date: "21.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Аватар: Пламя и пепел",
        rating: "8/10",
        year: "2025",
        date: "21.01.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/b/bf/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%E2%80%94_%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%B8_%D0%BF%D0%B5%D0%BF%D0%B5%D0%BB.jpg/960px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%E2%80%94_%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_%D0%B8_%D0%BF%D0%B5%D0%BF%D0%B5%D0%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Грейхаунд",
        rating: "7/10",
        year: "2020",
        date: "19.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f3/Greyhound_poster.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Убийцы цветочной луны",
        rating: "7/10",
        year: "2023",
        date: "14.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e7/%D0%A3%D0%B1%D0%B8%D0%B9%D1%86%D1%8B_%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%BB%D1%83%D0%BD%D1%8B_2023.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Неуязвимый",
        rating: "7/10",
        year: "2000",
        date: "13.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7d/Unbreakable_cover.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Авиатор",
        rating: "8/10",
        year: "2004",
        date: "13.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9e/TheAviatorPoster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Финч",
        rating: "7/10",
        year: "2021",
        date: "09.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/ba/Finch_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Индиана Джонс и последний крестовый поход",
        rating: "8/10",
        year: "1989",
        date: "08.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cd/Indiana-jones-last-crusade-poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Друзья и соседи",
        rating: "7/10",
        year: "2025",
        date: "06.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/83/Your_Friends_%26_Neighbors_%28Apple_TV_poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Индиана Джонс и Храм судьбы",
        rating: "7/10",
        year: "1984",
        date: "06.01.2026",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/1a/%D0%98%D0%BD%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_%D0%94%D0%B6%D0%BE%D0%BD%D1%81_%D0%B8_%D0%A7%D0%B0%D1%81%D1%8B_%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D1%8B.jpg/960px-%D0%98%D0%BD%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_%D0%94%D0%B6%D0%BE%D0%BD%D1%81_%D0%B8_%D0%A7%D0%B0%D1%81%D1%8B_%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D1%8B.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Индиана Джонс: В поисках утраченного ковчега",
        rating: "8/10",
        year: "1981",
        date: "05.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/79/Indiana-jones-raiders-of-lost-ark-poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Жаркое соперничество",
        rating: "8/10",
        year: "2025",
        date: "03.01.2026",
        image: "https://ru-images.kinorium.com/movie/1080/12381503.jpg?1765036230"
    },
    {
        title: "Очень странные дела",
        rating: "8/10",
        year: "2016",
        date: "03.01.2026",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b1/Stranger_Things_season_1.jpg/960px-Stranger_Things_season_1.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
    },
    {
        title: "Зверополис 2",
        rating: "8/10",
        year: "2025",
        date: "12.12.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/6/6c/%D0%97%D0%B2%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%81_2.jpg/960px-%D0%97%D0%B2%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%81_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Механик",
        rating: "7/10",
        year: "2010",
        date: "09.11.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e0/%D0%9C%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2011%29_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Миссия: невыполнима 2",
        rating: "6/10",
        year: "2000",
        date: "09.11.2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpxxBdpQh2zcoKZTdW-M9AKFqxjDVdIqIfnS4kY3wIQ&s=10"
    },
    {
        title: "Миссия: невыполнима",
        rating: "8/10",
        year: "1996",
        date: "04.11.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e1/MissionImpossiblePoster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сонная Лощина",
        rating: "7/10",
        year: "1999",
        date: "02.11.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e0/Sleepy-Hollow.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Никогда не сдавайся",
        rating: "6/10",
        year: "2008",
        date: "31.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/52/Never_back_down_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голодные игры: Баллада о змеях и певчих птицах",
        rating: "7/10",
        year: "2023",
        date: "28.10.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/c/c5/%D0%93%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B8%D0%B3%D1%80%D1%8B_-_%D0%91%D0%B0%D0%BB%D0%BB%D0%B0%D0%B4%D0%B0_%D0%BE_%D0%B7%D0%BC%D0%B5%D1%8F%D1%85_%D0%B8_%D0%BF%D0%B5%D0%B2%D1%87%D0%B8%D1%85_%D0%BF%D1%82%D0%B8%D1%86%D0%B0%D1%85_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg/960px-%D0%93%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B8%D0%B3%D1%80%D1%8B_-_%D0%91%D0%B0%D0%BB%D0%BB%D0%B0%D0%B4%D0%B0_%D0%BE_%D0%B7%D0%BC%D0%B5%D1%8F%D1%85_%D0%B8_%D0%BF%D0%B5%D0%B2%D1%87%D0%B8%D1%85_%D0%BF%D1%82%D0%B8%D1%86%D0%B0%D1%85_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Ранго",
        rating: "7/10",
        year: "2011",
        date: "27.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2e/Rango.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Терминатор 3: Восстание машин",
        rating: "7/10",
        year: "2003",
        date: "27.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/73/Terminator_3_Rise_of_the_Machines.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сплит",
        rating: "7/10",
        year: "2017",
        date: "22.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7c/Split_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Терминатор 2: Судный день",
        rating: "8/10",
        year: "1991",
        date: "18.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f2/%D0%A2%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80_2_-_%D0%A1%D1%83%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Терминатор",
        rating: "7/10",
        year: "1984",
        date: "18.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/ca/Terminator_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Собиратель душ",
        rating: "6/10",
        year: "2023",
        date: "13.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2a/%D0%A1%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_%D0%B4%D1%83%D1%88_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2024%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Машина времени в джакузи",
        rating: "6/10",
        year: "2010",
        date: "12.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7b/Hot-Tub-Time-Machine.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Аватар: Путь воды",
        rating: "8/10",
        year: "2022",
        date: "08.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Послезавтра",
        rating: "7/10",
        year: "2004",
        date: "05.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4c/The_Day_After_Tomorrow_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Коралина в Стране Кошмаров",
        rating: "8/10",
        year: "2008",
        date: "05.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/61/Coraline.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "2012",
        rating: "7/10",
        year: "2009",
        date: "03.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/dd/2012_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Девять",
        rating: "7/10",
        year: "2009",
        date: "02.10.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%94%D0%B5%D0%B2%D1%8F%D1%82%D1%8C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Рик и Морти",
        rating: "8/10",
        year: "2013",
        date: "24.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/70/Rick_and_Morty_Season_1.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        title: "Назад в будущее 3",
        rating: "8/10",
        year: "1990",
        date: "24.09.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/57049ca3-eb4e-4b9b-bfac-5fc732722b83/600x900"
    },
    {
        title: "Долгая прогулка",
        rating: "6/10",
        year: "2025",
        date: "23.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ec/%D0%94%D0%BE%D0%BB%D0%B3%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B3%D1%83%D0%BB%D0%BA%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Назад в будущее 2",
        rating: "8/10",
        year: "1989",
        date: "22.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/07/Back-to-Future-Part-II-529542.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        title: "Тогда. Сейчас. Потом",
        rating: "8/10",
        year: "2024",
        date: "18.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fd/%D0%A2%D0%BE%D0%B3%D0%B4%D0%B0_%D0%A1%D0%B5%D0%B9%D1%87%D0%B0%D1%81_%D0%9F%D0%BE%D1%82%D0%BE%D0%BC.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Спасатели Малибу",
        rating: "6/10",
        year: "2017",
        date: "16.09.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/db621f85-b0af-4326-bcf7-11818dde1c0c/600x900"
    },
    {
        title: "Назад в будущее",
        rating: "8/10",
        year: "1985",
        date: "16.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/90/BTTF_DVD_rus.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Храбрая сердцем",
        rating: "7/10",
        year: "2012",
        date: "16.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7f/Brave.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голый пистолет 33 1/3: Последний выпад",
        rating: "7/10",
        year: "1994",
        date: "14.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/14/Naked_Gun_3_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мулан",
        rating: "7/10",
        year: "1998",
        date: "13.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/de/Mulan.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        title: "Эквилибриум",
        rating: "7/10",
        year: "2002",
        date: "11.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/37/Equilibrium_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Начало",
        rating: "8/10",
        year: "2010",
        date: "11.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голый пистолет 2 1/2: Запах страха",
        rating: "7/10",
        year: "1991",
        date: "08.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d1/Naked_Gun_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голый пистолет",
        rating: "7/10",
        year: "1988",
        date: "06.09.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Naked_Gun_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Балерина",
        rating: "7/10",
        year: "2025",
        date: "28.08.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/2/22/%D0%91%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%2C_2025%29.jpg/960px-%D0%91%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%2C_2025%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Социальная сеть",
        rating: "7/10",
        year: "2010",
        date: "24.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/95/%D0%A1%D0%BE%D1%86%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Акира",
        rating: "8/10",
        year: "1987",
        date: "22.08.2025",
        image: "https://kinotv.ru/upload/iblock/b46/fq5pa5ij9e9t2sxwxmk268pijvditsr0.webp"
    },
    {
        title: "Материалистка",
        rating: "6/10",
        year: "2025",
        date: "19.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1e/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BA%D0%B0.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Букашки 2",
        rating: "7/10",
        year: "2018",
        date: "18.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/6a/%D0%91%D1%83%D0%BA%D0%B0%D1%88%D0%BA%D0%B8_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Букашки. Приключение в Долине муравьев",
        rating: "7/10",
        year: "2013",
        date: "17.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d6/%D0%91%D1%83%D0%BA%D0%B0%D1%88%D0%BA%D0%B8._%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_%D0%94%D0%BE%D0%BB%D0%B8%D0%BD%D0%B5_%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D1%8C%D1%91%D0%B2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Адаптация",
        rating: "7/10",
        year: "2002",
        date: "10.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/20/Adaptation_cover.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ральф",
        rating: "8/10",
        year: "2012",
        date: "07.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/27/Wreck-it_Ralph_2012.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ральф против интернета",
        rating: "6/10",
        year: "2018",
        date: "07.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/18/Ralph2poster.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Меч короля Артура",
        rating: "7/10",
        year: "2017",
        date: "05.08.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c6/King_Arthur_Legend_of_the_Sword.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шёпот сердца",
        rating: "8/10",
        year: "1995",
        date: "31.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b4/%D0%A8%D1%91%D0%BF%D0%BE%D1%82_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Бессонница",
        rating: "8/10",
        year: "2002",
        date: "30.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2e/%D0%91%D0%B5%D1%81%D1%81%D0%BE%D0%BD%D0%BD%D0%B8%D1%86%D0%B0_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "На гребне волны",
        rating: "7/10",
        year: "1991",
        date: "28.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e0/Point_Break.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Крестный отец",
        rating: "8/10",
        year: "1972",
        date: "27.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c4/Godfather_vhs.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Лицо со шрамом",
        rating: "8/10",
        year: "1983",
        date: "26.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c0/%D0%9B%D0%B8%D1%86%D0%BE_%D1%81%D0%BE_%D1%88%D1%80%D0%B0%D0%BC%D0%BE%D0%BC_%28%D0%90%D0%BB%D1%8C_%D0%9F%D0%B0%D1%87%D0%B8%D0%BD%D0%BE%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Константин: Повелитель тьмы",
        rating: "7/10",
        year: "2005",
        date: "24.07.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/8/89/Constantine_Poster.jpg/960px-Constantine_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Босс-молокосос 2",
        rating: "6/10",
        year: "2021",
        date: "23.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/67/The_Boss_Baby_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "F1",
        rating: "8/10",
        year: "2025",
        date: "21.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f9/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0-1_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Иди и смотри",
        rating: "8/10",
        year: "1985",
        date: "21.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/47/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%98%D0%B4%D0%B8_%D0%B8_%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проклятие Аннабель: Зарождение зла",
        rating: "6/10",
        year: "2017",
        date: "20.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/19/Annabelle_2_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проклятие Аннабель",
        rating: "6/10",
        year: "2014",
        date: "20.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d0/Annabelle_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Босс-молокосос",
        rating: "6/10",
        year: "2017",
        date: "19.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0e/The_Boss_Baby_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Финикийская схема",
        rating: "7/10",
        year: "2025",
        date: "09.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%A4%D0%B8%D0%BD%D0%B8%D0%BA%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%85%D0%B5%D0%BC%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Тихоокеанский рубеж",
        rating: "6/10",
        year: "2013",
        date: "09.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e6/Pacific_Rim.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мегамозг",
        rating: "8/10",
        year: "2010",
        date: "08.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Megamind_2010.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проклятие монахини 2",
        rating: "6/10",
        year: "2023",
        date: "07.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/63/The_Nun_II.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Зверопой 2",
        rating: "7/10",
        year: "2021",
        date: "06.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/87/Sing_2_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Зверопой",
        rating: "7/10",
        year: "2016",
        date: "06.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4a/Sing_2016_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проклятие монахини",
        rating: "6/10",
        year: "2018",
        date: "06.07.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D0%B8%D0%B5_%D0%9C%D0%BE%D0%BD%D0%B0%D1%85%D0%B8%D0%BD%D0%B8%C2%BB.jpg/960px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D0%B8%D0%B5_%D0%9C%D0%BE%D0%BD%D0%B0%D1%85%D0%B8%D0%BD%D0%B8%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Шерлок Холмс: Игра теней",
        rating: "8/10",
        year: "2011",
        date: "04.07.2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuiG9lRdFOu1zMzAyI0sazxOfLzY0rHOaHAU1KornY9ti3USDzy1BwhY&s=10"
    },
    {
        title: "Семья по-быстрому",
        rating: "7/10",
        year: "2018",
        date: "04.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/76/Instant_Family_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шерлок Холмс",
        rating: "8/10",
        year: "2009",
        date: "01.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e4/Sherlock_Holmes2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Суперсемейка 2",
        rating: "8/10",
        year: "2018",
        date: "01.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/27/The_Incredibles_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Суперсемейка",
        rating: "8/10",
        year: "2004",
        date: "01.07.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/86/%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_Pixar.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Супергеройское кино",
        rating: "6/10",
        year: "2008",
        date: "24.05.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/8/8c/Superhero_movie.jpg/960px-Superhero_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Большой Стэн",
        rating: "7/10",
        year: "2007",
        date: "18.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f9/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%A1%D1%82%D1%8D%D0%BD.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Быстрее пули",
        rating: "8/10",
        year: "2022",
        date: "17.05.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/90/Bullet_Train_%28poster%29.jpg/960px-Bullet_Train_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Ты водишь!",
        rating: "6/10",
        year: "2018",
        date: "16.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/80/%D0%A2%D1%8B_%D0%B2%D0%BE%D0%B4%D0%B8%D1%88%D1%8C%21.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хеллбой II: Золотая армия",
        rating: "7/10",
        year: "2008",
        date: "11.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d8/Hellboy_II._The_Golden_Army_%282008%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хеллбой: Герой из пекла",
        rating: "7/10",
        year: "2004",
        date: "09.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Hellboy_%282004%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мадагаскар 3",
        rating: "6/10",
        year: "2012",
        date: "07.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a1/Madagascar_3.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мадагаскар",
        rating: "7/10",
        year: "2005",
        date: "07.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/28/Madagascar_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мадагаскар 2",
        rating: "7/10",
        year: "2008",
        date: "07.05.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/5a832bd5-387f-4ff0-ae1e-34bd09d0446d/600x900"
    },
    {
        title: "Время",
        rating: "8/10",
        year: "2011",
        date: "05.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e0/Intimefairuse.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Город героев",
        rating: "8/10",
        year: "2014",
        date: "03.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/68/Big_Hero_6_russian_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пипец 2",
        rating: "7/10",
        year: "2013",
        date: "02.05.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/57/Kick-Ass_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пипец",
        rating: "8/10",
        year: "2010",
        date: "30.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f8/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9F%D0%B8%D0%BF%D0%B5%D1%86.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Скотт Пилигрим против всех",
        rating: "7/10",
        year: "2010",
        date: "28.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8b/Scott-Pilgrim-vs-the-World-poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Проект X: Дорвались",
        rating: "7/10",
        year: "2012",
        date: "26.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9b/Project_X_2012.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пиксели",
        rating: "6/10",
        year: "2015",
        date: "19.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%9F%D0%B8%D0%BA%D1%81%D0%B5%D0%BB%D0%B8.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Убежище",
        rating: "7/10",
        year: "2007",
        date: "15.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/56/Shelter_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дикий робот",
        rating: "8/10",
        year: "2024",
        date: "14.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/70/The_Wild_Robot_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Перевозчик",
        rating: "7/10",
        year: "2002",
        date: "13.04.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4e6a8d3f-fc61-4716-862d-3241842d99fa/600x900"
    },
    {
        title: "Обитель зла 4: Жизнь после смерти 3D",
        rating: "6/10",
        year: "2010",
        date: "10.04.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/b577c287-01eb-49fa-994c-dc0a52e8a8a0/600x900"
    },
    {
        title: "Обитель зла 3",
        rating: "7/10",
        year: "2007",
        date: "10.04.2025",
        image: "https://s1.afisha.ru/mediastorage/d1/56/5fe527420f7343c59368ebc656d1.jpg"
    },
    {
        title: "Обитель зла 2: Апокалипсис",
        rating: "7/10",
        year: "2004",
        date: "10.04.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/cfc0071b-3a14-4226-9f2e-8aa8af8f72e6/600x900"
    },
    {
        title: "2001 год: Космическая одиссея",
        rating: "8/10",
        year: "1968",
        date: "05.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/38/2001_A_Space_Odyssey.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Семейка Крудс: Новоселье",
        rating: "7/10",
        year: "2020",
        date: "04.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/23/The_Croods_A_New_Age.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Семейка Крудс",
        rating: "7/10",
        year: "2013",
        date: "04.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d3/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_%D0%9A%D1%80%D1%83%D0%B4%D1%81%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сияние",
        rating: "7/10",
        year: "1980",
        date: "03.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ef/The_Shining.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Рио",
        rating: "7/10",
        year: "2011",
        date: "03.04.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bb/Rio2011Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Рио 2",
        rating: "6/10",
        year: "2014",
        date: "03.04.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/5/59/Rio2_RU_poster.jpg/960px-Rio2_RU_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Муви 43",
        rating: "7/10",
        year: "2013",
        date: "29.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f9/Movie_43.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Обитель зла",
        rating: "7/10",
        year: "2002",
        date: "28.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9a/Resident_Evil_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Смертельное влечение",
        rating: "7/10",
        year: "1988",
        date: "27.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cd/Heathers_89poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Энканто",
        rating: "7/10",
        year: "2021",
        date: "27.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Фатерлянд",
        rating: "7/10",
        year: "1994",
        date: "23.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/08/Fatherland.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Большой Лебовски",
        rating: "7/10",
        year: "1998",
        date: "12.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/54/The_Big_Lebowski_Cover.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Воровка книг",
        rating: "8/10",
        year: "2013",
        date: "05.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/72/The-Book-Thief_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Настоящая боль",
        rating: "8/10",
        year: "2024",
        date: "03.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7e/A_Real_Pain_%282024_film%29_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Интервью с вампиром",
        rating: "7/10",
        year: "1994",
        date: "02.03.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3f/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D1%8C%D1%8E_%D1%81_%D0%B2%D0%B0%D0%BC%D0%BF%D0%B8%D1%80%D0%BE%D0%BC.JPG?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Я краснею",
        rating: "8/10",
        year: "2022",
        date: "28.02.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/d2a2ef34-ac56-4d99-8bdd-91e7aa3a4910/600x900"
    },
    {
        title: "Душа",
        rating: "8/10",
        year: "2020",
        date: "27.02.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ce2e470c-861c-4995-b6b1-54e1dd4932d4/600x900"
    },
    {
        title: "Зверополис",
        rating: "8/10",
        year: "2016",
        date: "27.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/91/Zootopia_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гитлер капут!",
        rating: "3/10",
        year: "2008",
        date: "27.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%D0%93%D0%B8%D1%82%D0%BB%D0%B5%D1%80_%D0%BA%D0%B0%D0%BF%D1%83%D1%82%21_%282008%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кролик Джоджо",
        rating: "7/10",
        year: "2019",
        date: "26.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a3/Jojo_Rabbit.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Милый дом",
        rating: "6/10",
        year: "2020",
        date: "26.02.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/44bc437f-aa1c-4681-9c6a-93ad3b0a3681/600x900"
    },
    {
        title: "Мальчик в полосатой пижаме",
        rating: "8/10",
        year: "2008",
        date: "25.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8e/The_Boy_in_the_Striped_Pyjamas_%28russian%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дэдпул и Росомаха",
        rating: "7/10",
        year: "2024",
        date: "25.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4c/Deadpool_%26_Wolverine_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дэдпул 2",
        rating: "6/10",
        year: "2018",
        date: "24.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cf/Deadpool_2_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дэдпул",
        rating: "7/10",
        year: "2016",
        date: "23.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b2/Deadpool_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кот в сапогах: Три Чертенка",
        rating: "7/10",
        year: "2011",
        date: "23.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Puss_in_Boots_The_Three_Diablos.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кот в сапогах",
        rating: "7/10",
        year: "2011",
        date: "23.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ef/Puss-in-Boots.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кот в сапогах 2: Последнее желание",
        rating: "6/10",
        year: "2022",
        date: "23.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шрэк",
        rating: "7/10",
        year: "2001",
        date: "21.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%93%D0%B5%D1%80%D0%BE%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A8%D1%80%D0%B5%D0%BA%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Лучше звоните Солу",
        rating: "8/10",
        year: "2015",
        date: "16.02.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/87298984-6286-425f-ab61-9afbf2c78afb/600x900"
    },
    {
        title: "Наследники",
        rating: "8/10",
        year: "2018",
        date: "16.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b2/Succession_title.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Географ глобус пропил",
        rating: "7/10",
        year: "2013",
        date: "05.02.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/9f/Geograf_poster_700x1000.jpg/960px-Geograf_poster_700x1000.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Граф Монте-Кристо",
        rating: "8/10",
        year: "2024",
        date: "03.02.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D1%80%D0%B0%D1%84_%D0%9C%D0%BE%D0%BD%D1%82%D0%B5-%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2024%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кин-дза-дза!",
        rating: "8/10",
        year: "1986",
        date: "28.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0e/%D0%9A%D0%B8%D0%BD-%D0%B4%D0%B7%D0%B0-%D0%B4%D0%B7%D0%B0%21.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хитмен. Последнее дело",
        rating: "7/10",
        year: "2023",
        date: "21.01.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/f/fb/Knox_goes_away_%28ru%29.jpg/960px-Knox_goes_away_%28ru%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Анора",
        rating: "6/10",
        year: "2024",
        date: "21.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/31/%D0%90%D0%BD%D0%BE%D1%80%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Джунгли",
        rating: "7/10",
        year: "2017",
        date: "21.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/17/Jungle_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "99 франков",
        rating: "7/10",
        year: "2007",
        date: "18.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3a/99_francs_rus_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Образцовый самец",
        rating: "6/10",
        year: "2001",
        date: "17.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2d/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%C2%AB%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D1%86%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%B0%D0%BC%D0%B5%D1%86%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Свин, Коза, Банан и Сверчок",
        rating: "4/10",
        year: "2015",
        date: "16.01.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/114144dd-ab16-4651-8821-764de9598970/600x900"
    },
    {
        title: "Фанбой и Чам Чам",
        rating: "4/10",
        year: "2009",
        date: "16.01.2025",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/788b9956-c50c-45e6-bc80-4329a71118b8/600x900"
    },
    {
        title: "Борат",
        rating: "8/10",
        year: "2006",
        date: "14.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e8/BORAT%21.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Учитель на замену",
        rating: "8/10",
        year: "2011",
        date: "14.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/47/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%C2%AB%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BD%D0%B0_%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D1%83%C2%BB_%282011%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ёлки 11",
        rating: "5/10",
        year: "2024",
        date: "13.01.2025",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/0/04/%D0%81%D0%BB%D0%BA%D0%B8_11_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/960px-%D0%81%D0%BB%D0%BA%D0%B8_11_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Свидание с монстром",
        rating: "7/10",
        year: "2023",
        date: "13.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/en/7/71/Woman_of_the_Hour_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дюна: Часть вторая",
        rating: "8/10",
        year: "2024",
        date: "09.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дневник Бриджит Джонс",
        rating: "7/10",
        year: "2001",
        date: "02.01.2025",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/84/Bridget-Jones-Diary-Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Приключения Паддингтона 3",
        rating: "7/10",
        year: "2024",
        date: "30.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fa/%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9F%D0%B0%D0%B4%D0%B4%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD%D0%B0_3.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Игра престолов",
        rating: "9/10",
        year: "2011",
        date: "26.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/49/Game_of_Thrones.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Клаус",
        rating: "7/10",
        year: "2019",
        date: "25.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Klaus_cartoon.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Великая",
        rating: "7/10",
        year: "2023",
        date: "23.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/01/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мария",
        rating: "7/10",
        year: "2024",
        date: "22.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b6/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%C2%AB%D0%9A%D0%BE%D0%BD%D0%B5%D1%86_%D1%81%D0%B2%D0%B5%D1%82%D0%B0%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Знамение",
        rating: "8/10",
        year: "2009",
        date: "19.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/19/Knowing.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Впритык",
        rating: "7/10",
        year: "2010",
        date: "13.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ea/Due_Date.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Убойные каникулы",
        rating: "7/10",
        year: "2010",
        date: "13.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/43/Tucker_and_Dale_vs_Evil_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сумерки",
        rating: "6/10",
        year: "2008",
        date: "07.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/63/%D0%A1%D1%83%D0%BC%D0%B5%D1%80%D0%BA%D0%B8_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2008%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Еретик",
        rating: "7/10",
        year: "2024",
        date: "06.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d1/%D0%95%D1%80%D0%B5%D1%82%D0%B8%D0%BA_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Виселица",
        rating: "4/10",
        year: "2017",
        date: "06.12.2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0DCzag4-Hnx56xBXg0kXP22H0CbUETZnmAFCp0kvCQ&s=10"
    },
    {
        title: "Холоп",
        rating: "5/10",
        year: "2019",
        date: "06.12.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d7/%D0%A5%D0%BE%D0%BB%D0%BE%D0%BF_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Субстанция",
        rating: "7/10",
        year: "2024",
        date: "30.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%A1%D1%83%D0%B1%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хищник",
        rating: "7/10",
        year: "1987",
        date: "25.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A5%D0%B8%D1%89%D0%BD%D0%B8%D0%BA%C2%BB_%28%D0%A1%D0%A8%D0%90%2C_1987%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Донни Дарко",
        rating: "7/10",
        year: "2001",
        date: "23.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/89/Donnie_Darko_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чужой 4: Воскрешение",
        rating: "6/10",
        year: "1997",
        date: "22.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/70/Alien_Resurrection_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чужой 3",
        rating: "6/10",
        year: "1992",
        date: "18.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Alien3_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чужие",
        rating: "8/10",
        year: "1986",
        date: "18.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fb/Aliens_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Очень страшное кино 5",
        rating: "4/10",
        year: "2013",
        date: "15.11.2024",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/8000e8f4-7457-455c-934f-ce05a44e69b5/600x900"
    },
    {
        title: "Очень страшное кино 4",
        rating: "6/10",
        year: "2006",
        date: "15.11.2024",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ebd95b64-d657-46ae-a364-734b92fcdccb/600x900"
    },
    {
        title: "Очень страшное кино 3",
        rating: "6/10",
        year: "2003",
        date: "15.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e7/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D1%87%D0%B5%D0%BD%D1%8C_%D1%81%D1%82%D1%80%D0%B0%D1%88%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE_3%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Очень страшное кино 2",
        rating: "5/10",
        year: "2001",
        date: "15.11.2024",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c2072b3e-df6c-4050-98a7-5befd1e3ce0c/600x900"
    },
    {
        title: "Крик 2",
        rating: "6/10",
        year: "1997",
        date: "15.11.2024",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f6dec774-9d2c-4fbe-86de-2699181e69fe/600x900"
    },
    {
        title: "Крик",
        rating: "7/10",
        year: "1996",
        date: "14.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/dd/Scream_%281996%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чужой",
        rating: "8/10",
        year: "1979",
        date: "10.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Alien_movie_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Я – легенда",
        rating: "8/10",
        year: "2007",
        date: "10.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d6/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%AF-%D0%BB%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Очень страшное кино",
        rating: "8/10",
        year: "2000",
        date: "10.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c3/%D0%9E%D1%87%D0%B5%D0%BD%D1%8C_%D1%81%D1%82%D1%80%D0%B0%D1%89%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Не грози Южному Централу, попивая сок у себя в квартале",
        rating: "6/10",
        year: "1995",
        date: "10.11.2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz2BBnWnV2azxqq_dqk5NSN2v-apQbfUhY12iIDfRYg&s=10"
    },
    {
        title: "Пираньи 3D",
        rating: "6/10",
        year: "2010",
        date: "08.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/43/Piranha-3D.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "По наклонной",
        rating: "7/10",
        year: "2020",
        date: "06.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/90/%D0%A7%D0%B5%D1%80%D1%80%D0%B8_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "В джазе только девушки",
        rating: "8/10",
        year: "1959",
        date: "06.11.2024",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Some_Like_It_Hot_%281959_poster%29.png/960px-Some_Like_It_Hot_%281959_poster%29.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Интерстелла 5555: История секретной звездной системы",
        rating: "8/10",
        year: "2003",
        date: "03.11.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/5/5d/Interstella5555_%28DVD%29.jpg/960px-Interstella5555_%28DVD%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Изгой",
        rating: "8/10",
        year: "2000",
        date: "02.11.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0e/Cast_Away_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Борат 2",
        rating: "7/10",
        year: "2020",
        date: "27.10.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e8/BORAT%21.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Джокер: Безумие на двоих",
        rating: "6/10",
        year: "2024",
        date: "25.10.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/3/39/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%E2%80%94_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%B4%D0%B2%D0%BE%D0%B8%D1%85.jpg/960px-%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%E2%80%94_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%B4%D0%B2%D0%BE%D0%B8%D1%85.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Джокер",
        rating: "7/10",
        year: "2019",
        date: "25.10.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/6f/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ужасающий 3",
        rating: "5/10",
        year: "2024",
        date: "25.10.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/15/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A3%D0%B6%D0%B0%D1%81%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_3%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Святые из Бундока",
        rating: "7/10",
        year: "1999",
        date: "30.09.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1b/The_Boondock_Saints_poster.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Выстрел в пустоту",
        rating: "7/10",
        year: "2015",
        date: "23.09.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a8/Shot_Caller_%28film%2C_2017%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дом Дракона",
        rating: "8/10",
        year: "2022",
        date: "29.08.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/6/67/%D0%94%D0%BE%D0%BC%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/960px-%D0%94%D0%BE%D0%BC%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Объединённая зона безопасности",
        rating: "8/10",
        year: "2000",
        date: "26.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7f/Jsa.movist.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Невозможное",
        rating: "7/10",
        year: "2012",
        date: "22.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1b/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9D%D0%B5%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D0%B5%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Настоящий детектив",
        rating: "8/10",
        year: "2014",
        date: "21.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f2/%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        title: "Типа крутые легавые",
        rating: "7/10",
        year: "2007",
        date: "21.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/6f/Hot_Fuzz.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Выжившие. Бетонная утопия",
        rating: "7/10",
        year: "2023",
        date: "16.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/32/%D0%92%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D0%B5._%D0%91%D0%B5%D1%82%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%83%D1%82%D0%BE%D0%BF%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Искупление",
        rating: "7/10",
        year: "2007",
        date: "11.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/64/Atonement_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Матрица: Воскрешение",
        rating: "6/10",
        year: "2021",
        date: "11.07.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/7/7d/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.jpg/960px-%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Облачный атлас",
        rating: "8/10",
        year: "2012",
        date: "11.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/31/Cloud_Atlas_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хаяо Миядзаки: Экстра",
        rating: "8/10",
        year: "2018",
        date: "10.07.2024",
        image: "https://resizer.mail.ru/p/2d681f81-987d-55e3-aaeb-ce5070996d08/AQACr2AdKqXUDhAwVLRAtc1lFzBkdrn74jQKxDNL9-StOgHCMzzdvk7TuBh7WavYFMYMEG8R0Z08BJOstgumyEc0Je0.jpg"
    },
    {
        title: "Вечерний Ургант",
        rating: "8/10",
        year: "2012",
        date: "04.07.2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09xnfk_JzU__SC_AAP9JLXbt_9acQ6Fnf9kid0P34vl38MaPymXy7Mnpk&s=10"
    },
    {
        title: "Мальчик и птица",
        rating: "7/10",
        year: "2023",
        date: "04.07.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/93/%D0%9C%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA_%D0%B8_%D0%BF%D1%82%D0%B8%D1%86%D0%B0_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg/960px-%D0%9C%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA_%D0%B8_%D0%BF%D1%82%D0%B8%D1%86%D0%B0_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Белая птица: Новое чудо",
        rating: "7/10",
        year: "2023",
        date: "03.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/39/White_Bird-_A_Wonder_Story.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Повелитель бури",
        rating: "7/10",
        year: "2008",
        date: "02.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4d/The_Hurt_Locker_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "16 кварталов",
        rating: "7/10",
        year: "2006",
        date: "02.07.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fe/16_Blocks.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ветреная река",
        rating: "7/10",
        year: "2016",
        date: "30.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/07/Wind_River_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Васаби",
        rating: "7/10",
        year: "2001",
        date: "30.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d8/%D0%92%D0%B0%D1%81%D0%B0%D0%B1%D0%B8.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Леон",
        rating: "7/10",
        year: "1994",
        date: "28.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e1/L%C3%A9on_poster.JPG?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пиджак",
        rating: "7/10",
        year: "2004",
        date: "27.06.2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcCxkIdWdXSWE9-twA33rKYm7F6fU6_JVYY053FRe9Km7aa7kHXOqnick&s=10"
    },
    {
        title: "Падение империи",
        rating: "7/10",
        year: "2023",
        date: "26.06.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/2/29/Civil_War_%28film%2C_2024%29.jpg/960px-Civil_War_%28film%2C_2024%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Материнский инстинкт",
        rating: "7/10",
        year: "2024",
        date: "26.06.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/9b/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D0%BD%D0%BA%D1%82_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg/960px-%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D0%BD%D0%BA%D1%82_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Счастливое число Слевина",
        rating: "7/10",
        year: "2005",
        date: "26.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d5/Lucky_Number_Slevin_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сноуден",
        rating: "6/10",
        year: "2016",
        date: "24.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1a/Snowden_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Золото",
        rating: "7/10",
        year: "2016",
        date: "23.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/28/Gold_poster_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дело храбрых",
        rating: "8/10",
        year: "2017",
        date: "22.06.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/9d/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%94%D0%B5%D0%BB%D0%BE_%D1%85%D1%80%D0%B0%D0%B1%D1%80%D1%8B%D1%85.jpg/960px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%94%D0%B5%D0%BB%D0%BE_%D1%85%D1%80%D0%B0%D0%B1%D1%80%D1%8B%D1%85.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Планета Ка-Пэкс",
        rating: "7/10",
        year: "2001",
        date: "22.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2e/KPAX.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Артур, ты король",
        rating: "7/10",
        year: "2024",
        date: "22.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%90%D1%80%D1%82%D1%83%D1%80%2C_%D1%82%D1%8B_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%8C.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голгофа",
        rating: "7/10",
        year: "2013",
        date: "21.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/48/McDonagh%27_Calvary.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Игра в имитацию",
        rating: "7/10",
        year: "2014",
        date: "20.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9d/IThe_Imitation_Game.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Адамовы яблоки",
        rating: "7/10",
        year: "2005",
        date: "20.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/12/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%D0%90%D0%B4%D0%B0%D0%BC%D0%BE%D0%B2%D1%8B_%D0%AF%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Резня",
        rating: "7/10",
        year: "2011",
        date: "19.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f1/Carnage_2011.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Меч короля",
        rating: "7/10",
        year: "2023",
        date: "19.06.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/94/Bastarden_%28film%2C_2024%29.webp/960px-Bastarden_%28film%2C_2024%29.webp.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Одна жизнь",
        rating: "8/10",
        year: "2023",
        date: "17.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e8/%D0%9E%D0%B4%D0%BD%D0%B0_%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Марс Экспресс",
        rating: "7/10",
        year: "2023",
        date: "16.06.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cd/Mars_Express_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Министерство неджентльменских дел",
        rating: "7/10",
        year: "2024",
        date: "25.05.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/1/15/%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BB.jpeg/960px-%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BB.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Прошлые жизни",
        rating: "7/10",
        year: "2023",
        date: "12.05.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3d/%D0%9F%D1%80%D0%BE%D1%88%D0%BB%D1%8B%D0%B5_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Fallout",
        rating: "8/10",
        year: "2024",
        date: "14.04.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f0/Fallout_Amazon_poster.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Зеленая книга",
        rating: "7/10",
        year: "2018",
        date: "31.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f0/Green_Book.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Опасный элемент",
        rating: "6/10",
        year: "2019",
        date: "31.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9E%D0%BF%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Она",
        rating: "8/10",
        year: "2013",
        date: "30.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/6a/Her_%28Film_2013%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мистер Робот",
        rating: "8/10",
        year: "2015",
        date: "28.03.2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9eSqu2RaNrEuEzilhuXIw3NmMSrj3za9UkzecKaOOg&s"
    },
    {
        title: "Исчезнувшая",
        rating: "8/10",
        year: "2014",
        date: "26.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1e/Gone_Girl_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Солтберн",
        rating: "7/10",
        year: "2023",
        date: "20.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cb/%D0%A1%D0%BE%D0%BB%D1%82%D0%B1%D0%B5%D1%80%D0%BD_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "1917",
        rating: "7/10",
        year: "2019",
        date: "19.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ef/1917_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Братья",
        rating: "6/10",
        year: "2009",
        date: "19.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Brothersposter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Возвращение кота",
        rating: "7/10",
        year: "2002",
        date: "18.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e3/The_Cat_Returns_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мистер Блейк к вашим услугам",
        rating: "7/10",
        year: "2023",
        date: "17.03.2024",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/John_Malkovich%2C_Berlinale_2023.jpg/960px-John_Malkovich%2C_Berlinale_2023.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Чудо",
        rating: "7/10",
        year: "2017",
        date: "15.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/90/Wonder_%28film%2C_2017%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мавританец",
        rating: "7/10",
        year: "2020",
        date: "14.03.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/9/96/The_Mauritanian_%28film%2C_2021%29.jpg/960px-The_Mauritanian_%28film%2C_2021%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Стальная хватка",
        rating: "7/10",
        year: "2023",
        date: "14.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3a/Iron_claw_film_posterjpg.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Босиком по мостовой",
        rating: "7/10",
        year: "2005",
        date: "13.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f9/Barfuss_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Славные парни",
        rating: "6/10",
        year: "2016",
        date: "12.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/02/The_Nice_Guys.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Идеальные дни",
        rating: "7/10",
        year: "2023",
        date: "11.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/75/%D0%98%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B4%D0%BD%D0%B8_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Драйв",
        rating: "7/10",
        year: "2011",
        date: "08.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/13/Drive2011Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Весна, лето, осень, зима... и снова весна",
        rating: "7/10",
        year: "2003",
        date: "06.03.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b6/Seasons_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Горбатая гора",
        rating: "7/10",
        year: "2005",
        date: "25.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2e/Brokeback_mountain_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Kingsman: Секретная служба",
        rating: "6/10",
        year: "2015",
        date: "25.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/da/Kingsman_The_Secret_Service.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Легенды осени",
        rating: "8/10",
        year: "1994",
        date: "25.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/19/Legendsofthefall.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Иллюзия полета",
        rating: "7/10",
        year: "2005",
        date: "23.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2d/Flightplan.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "12 лет рабства",
        rating: "7/10",
        year: "2013",
        date: "13.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b7/12_Years_a_Slave_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Слово пацана. Кровь на асфальте",
        rating: "6/10",
        year: "2023",
        date: "13.02.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/c/c3/%D0%A1%D0%BB%D0%BE%D0%B2%D0%BE_%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%B0_poster.jpg/960px-%D0%A1%D0%BB%D0%BE%D0%B2%D0%BE_%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%B0_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Грязь",
        rating: "7/10",
        year: "2013",
        date: "12.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fc/Filth_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Билли Эллиот",
        rating: "7/10",
        year: "2000",
        date: "10.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/74/BillyElliotPoster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мой парень – псих",
        rating: "7/10",
        year: "2012",
        date: "08.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d7/Silver_Linings_Playbook.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чего хотят женщины",
        rating: "7/10",
        year: "2000",
        date: "07.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/66/Whatwomanwant.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Апокалипсис",
        rating: "7/10",
        year: "2006",
        date: "06.02.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b6/Apocalypto_ver1.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мотылёк",
        rating: "7/10",
        year: "2017",
        date: "29.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f2/%D0%9C%D0%BE%D1%82%D1%8B%D0%BB%D1%91%D0%BA_2017.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Звук свободы",
        rating: "7/10",
        year: "2023",
        date: "28.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7a/%D0%97%D0%B2%D1%83%D0%BA_%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B_%282023%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шеф Адам Джонс",
        rating: "7/10",
        year: "2015",
        date: "26.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/42/Burnt_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Девчата",
        rating: "7/10",
        year: "1961",
        date: "17.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/93/%D0%94%D0%B5%D0%B2%D1%87%D0%B0%D1%82%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Области тьмы",
        rating: "7/10",
        year: "2011",
        date: "17.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e3/Limitless.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Легенда",
        rating: "7/10",
        year: "2015",
        date: "17.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/04/Legend_2015.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кто Вы, мистер Брукс?",
        rating: "7/10",
        year: "2007",
        date: "17.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f3/Brooks_poster2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Достать ножи",
        rating: "7/10",
        year: "2019",
        date: "15.01.2024",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/8/83/Knives_Out_%28film%29.jpg/960px-Knives_Out_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Тайное окно",
        rating: "6/10",
        year: "2004",
        date: "15.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/70/Secret_Window_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Лучшее предложение",
        rating: "8/10",
        year: "2012",
        date: "12.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f9/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9B%D1%83%D1%87%D1%88%D0%B5%D0%B5_%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Законопослушный гражданин",
        rating: "6/10",
        year: "2009",
        date: "11.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f5/LawAbidingCitizen.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "1+1",
        rating: "7/10",
        year: "2011",
        date: "11.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ганнибал",
        rating: "8/10",
        year: "2013",
        date: "11.01.2024",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hannibal_Barca_bust_from_Capua_photo.jpg/960px-Hannibal_Barca_bust_from_Capua_photo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Семьянин",
        rating: "7/10",
        year: "2000",
        date: "19.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/92/%D0%A1%D0%B5%D0%BC%D1%8C%D1%8F%D0%BD%D0%B8%D0%BD.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мастер и Маргарита",
        rating: "7/10",
        year: "2005",
        date: "18.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/aa/%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80_%D0%B8_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Достучаться до небес",
        rating: "7/10",
        year: "1997",
        date: "13.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b9/Knockin%27_On_Heaven%27s_Door.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Потрошители",
        rating: "4/10",
        year: "2009",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3e/Repo_Men.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "ВАЛЛ·И",
        rating: "9/10",
        year: "2008",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c4/WALL-E_poster.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Олдбой",
        rating: "7/10",
        year: "2003",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9%C2%BB_%282003%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голодные игры: Сойка-пересмешница. Часть II",
        rating: "7/10",
        year: "2015",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/60/The_Hunger_Games_Mockingjay_Part_2.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голодные игры: Сойка-пересмешница. Часть I",
        rating: "6/10",
        year: "2014",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9c/The_Hunger_Games_Mockingjay_Part_1.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голодные игры: И вспыхнет пламя",
        rating: "7/10",
        year: "2013",
        date: "10.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d5/The_Hunger_Games_Catching_Fire.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Голодные игры",
        rating: "7/10",
        year: "2012",
        date: "09.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/dc/The_Hunger_Games.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Майор Гром: Чумной Доктор",
        rating: "5/10",
        year: "2021",
        date: "05.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4a/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%A7%D1%83%D0%BC%D0%BD%D0%BE%D0%B9_%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Последний человек на Земле",
        rating: "6/10",
        year: "2015",
        date: "05.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/df/The_last_man_on_earth.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Список Шиндлера",
        rating: "9/10",
        year: "1993",
        date: "05.12.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/38/Schindler%27s_List_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Старикам тут не место",
        rating: "8/10",
        year: "2007",
        date: "27.11.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/01/No_country_rus.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Секс в большом городе",
        rating: "8/10",
        year: "1998",
        date: "12.11.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/22/SexandtheCity.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Любовь. Смерть. Роботы",
        rating: "9/10",
        year: "2019",
        date: "11.11.2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQGL6Xuu0xKwPNTY4ckRtdLHYLsISPSqdVoBcSR5jNSwYQ3Tdl6Bl3hk&s=10"
    },
    {
        title: "Чужие среди нас",
        rating: "6/10",
        year: "1988",
        date: "04.11.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/ab/1988They_Live_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Кошмар на улице Вязов",
        rating: "7/10",
        year: "1984",
        date: "04.11.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7b/A_Nightmare_on_Elm_Street_poster_01.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Оппенгеймер",
        rating: "8/10",
        year: "2023",
        date: "31.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Зомби по имени Шон",
        rating: "6/10",
        year: "2004",
        date: "31.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1e/Shaun-of-the-Dead.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "28 дней спустя",
        rating: "8/10",
        year: "2002",
        date: "31.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/87/28_%D0%B4%D0%BD%D0%B5%D0%B9_%D1%81%D0%BF%D1%83%D1%81%D1%82%D1%8F_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Молчание ягнят",
        rating: "7/10",
        year: "1990",
        date: "31.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/95/The_Silence_Of_The_Lambs.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Путешествие Гектора в поисках счастья",
        rating: "7/10",
        year: "2014",
        date: "21.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fb/%D0%9F%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D0%93%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0_%D0%B2_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85_%D1%81%D1%87%D0%B0%D1%81%D1%82%D1%8C%D1%8F.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чрезвычайная ситуация",
        rating: "5/10",
        year: "2021",
        date: "18.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/ab/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%A7%D1%80%D0%B5%D0%B7%D0%B2%D1%8B%D1%87%D0%B0%D0%B9%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8F.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Доброе утро",
        rating: "7/10",
        year: "2010",
        date: "18.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b5/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B5_%D1%83%D1%82%D1%80%D0%BE%C2%BB_%28%D0%A1%D0%A8%D0%90%2C_2010%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Операция «Валькирия»",
        rating: "7/10",
        year: "2008",
        date: "18.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b8/Valkyrie_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Афера под прикрытием",
        rating: "6/10",
        year: "2016",
        date: "18.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/80/%D0%90%D1%84%D0%B5%D1%80%D0%B0_%D0%BF%D0%BE%D0%B4_%D0%BF%D1%80%D0%B8%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5%D0%BC.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "В центре внимания",
        rating: "7/10",
        year: "2015",
        date: "18.10.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cb/%D0%92_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5_%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ветер крепчает",
        rating: "8/10",
        year: "2013",
        date: "31.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/01/%D0%92%D0%B5%D1%82%D0%B5%D1%80_%D0%BA%D1%80%D0%B5%D0%BF%D1%87%D0%B0%D0%B5%D1%82.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Порко Россо",
        rating: "7/10",
        year: "1992",
        date: "31.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Небесный замок Лапута",
        rating: "8/10",
        year: "1986",
        date: "31.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9c/%D0%9D%D0%B5%D0%B1%D0%B5%D1%81%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA_%D0%9B%D0%B0%D0%BF%D1%83%D1%82%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Рыбка Поньо на утесе",
        rating: "7/10",
        year: "2008",
        date: "31.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/28/%D0%A0%D1%8B%D0%B1%D0%BA%D0%B0_%D0%9F%D0%BE%D0%BD%D1%8C%D0%BE_%D0%BD%D0%B0_%D1%83%D1%82%D1%91%D1%81%D0%B5.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Навсикая из долины ветров",
        rating: "9/10",
        year: "1984",
        date: "31.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/09/Kaze_no_tani_no_Naushika.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Принцесса Мононоке",
        rating: "8/10",
        year: "1997",
        date: "29.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/75/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0_%D0%9C%D0%BE%D0%BD%D0%BE%D0%BD%D0%BE%D0%BA%D0%B5_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "100 вещей и ничего лишнего",
        rating: "7/10",
        year: "2018",
        date: "15.08.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/78/100_Dinge.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сладкий ноябрь",
        rating: "6/10",
        year: "2001",
        date: "12.07.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1b/SweetNovember2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Власть",
        rating: "7/10",
        year: "2018",
        date: "07.07.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8a/VICE_poster_2018_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Переводчик",
        rating: "6/10",
        year: "2022",
        date: "05.07.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/d/d9/The_Covenant_%28film%2C_2023%29.jpg/960px-The_Covenant_%28film%2C_2023%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Со склонов Кокурико",
        rating: "7/10",
        year: "2011",
        date: "13.06.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3b/Kokuriko-Zaka_Kara.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мой сосед Тоторо",
        rating: "8/10",
        year: "1988",
        date: "01.06.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/ab/%D0%9C%D0%BE%D0%B9_%D1%81%D0%BE%D1%81%D0%B5%D0%B4_%D0%A2%D0%BE%D1%82%D0%BE%D1%80%D0%BE.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Унесённые призраками",
        rating: "8/10",
        year: "2001",
        date: "27.05.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/61/Spirited_away.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Ходячий замок",
        rating: "8/10",
        year: "2004",
        date: "27.05.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f3/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B3%D0%B8_%C2%AB%D0%A5%D0%BE%D0%B4%D1%8F%D1%87%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Жизнь прекрасна",
        rating: "7/10",
        year: "2011",
        date: "28.04.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3a/50-50_Movie_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мира",
        rating: "7/10",
        year: "2022",
        date: "20.04.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/5/5a/%D0%9C%D0%B8%D1%80%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg/960px-%D0%9C%D0%B8%D1%80%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Человек, который изменил всё",
        rating: "7/10",
        year: "2011",
        date: "11.04.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2e/Moneyball_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Сделано в Америке",
        rating: "7/10",
        year: "2017",
        date: "10.04.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/3/3b/Made_in_America_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/960px-Made_in_America_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Джон Уик 4",
        rating: "7/10",
        year: "2023",
        date: "09.04.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3c/John_Wick_4.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Джон Уик 3",
        rating: "7/10",
        year: "2019",
        date: "07.04.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1d/John_Wick_3.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Джон Уик 2",
        rating: "7/10",
        year: "2017",
        date: "07.04.2023",
        image: "https://upload.wikimedia.org/wikipedia/en/3/31/John_Wick_Chapter_Two.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Джон Уик",
        rating: "6/10",
        year: "2014",
        date: "05.04.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/3/33/John_Wick.jpg/960px-John_Wick.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Крушение",
        rating: "6/10",
        year: "2022",
        date: "30.03.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/8/89/%D0%A1%D0%B0%D0%BC%D0%BE%D0%BB%D1%91%D1%82_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.png/960px-%D0%A1%D0%B0%D0%BC%D0%BE%D0%BB%D1%91%D1%82_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Король говорит!",
        rating: "8/10",
        year: "2010",
        date: "30.03.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bb/The_King%27s_Speech_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Операция Фортуна: Искусство побеждать",
        rating: "6/10",
        year: "2022",
        date: "29.03.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/2/21/Operation_Fortune.jpg/960px-Operation_Fortune.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Одни из нас",
        rating: "9/10",
        year: "2023",
        date: "01.03.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/70/The_Last_of_Us_HBO_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Хоть раз в жизни",
        rating: "6/10",
        year: "2013",
        date: "01.03.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a9/%D0%A5%D0%BE%D1%82%D1%8C_%D1%80%D0%B0%D0%B7_%D0%B2_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "По соображениям совести",
        rating: "7/10",
        year: "2016",
        date: "26.02.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2c/Hacksaw_Ridge.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Форрест Гамп",
        rating: "8/10",
        year: "1994",
        date: "19.02.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Землетрясение",
        rating: "8/10",
        year: "2010",
        date: "18.02.2023",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Destroyed_building_after_Spitak_Earthquake.pdf/page1-500px-Destroyed_building_after_Spitak_Earthquake.pdf.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Отпуск по обмену",
        rating: "7/10",
        year: "2006",
        date: "15.02.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bf/The-Holiday-poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пираты Карибского моря: Мертвецы не рассказывают сказки",
        rating: "7/10",
        year: "2017",
        date: "04.02.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f2/PIRATES5_PAYOFF_68x100_preview.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Чебурашка",
        rating: "6/10",
        year: "2022",
        date: "01.02.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/54/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A7%D0%B5%D0%B1%D1%83%D1%80%D0%B0%D1%88%D0%BA%D0%B0%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пираты Карибского моря: Проклятие Черной жемчужины",
        rating: "7/10",
        year: "2003",
        date: "28.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/79/Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Пианист",
        rating: "8/10",
        year: "2002",
        date: "24.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a6/The_Pianist_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Без лица",
        rating: "7/10",
        year: "1997",
        date: "23.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%22%D0%91%D0%B5%D0%B7_%D0%BB%D0%B8%D1%86%D0%B0%22.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Отец",
        rating: "7/10",
        year: "2020",
        date: "14.01.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/6/66/%D0%9E%D1%82%D0%B5%D1%86_%282020%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/960px-%D0%9E%D1%82%D0%B5%D1%86_%282020%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Зеленая миля",
        rating: "8/10",
        year: "1999",
        date: "14.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b0/Green_mile_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Большой куш",
        rating: "7/10",
        year: "2000",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b1/Snatch_Movie_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Остров проклятых",
        rating: "7/10",
        year: "2009",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/22/Kinopoisk.ru-Shutter-Island-1094940.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Криминальное чтиво",
        rating: "8/10",
        year: "1994",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/93/Pulp_Fiction.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Интерстеллар",
        rating: "8/10",
        year: "2014",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Тайна Коко",
        rating: "7/10",
        year: "2017",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d7/Coco_%282017_film%29_logo.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Знакомьтесь, Джо Блэк",
        rating: "7/10",
        year: "1998",
        date: "13.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1c/%D0%97%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%8C%D1%82%D0%B5%D1%81%D1%8C%2C_%D0%94%D0%B6%D0%BE_%D0%91%D0%BB%D1%8D%D0%BA.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Таксист",
        rating: "8/10",
        year: "2017",
        date: "12.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ea/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A2%D0%B0%D0%BA%D1%81%D0%B8%D1%81%D1%82_%282017%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Я – начало",
        rating: "7/10",
        year: "2014",
        date: "12.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "День сурка",
        rating: "8/10",
        year: "1993",
        date: "11.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/41/Groundhog_Day.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Человек дождя",
        rating: "7/10",
        year: "1988",
        date: "11.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/54/Rain_man.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Мейр из Исттауна",
        rating: "8/10",
        year: "2021",
        date: "10.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8b/%D0%9C%D0%B5%D0%B9%D1%80_%D0%B8%D0%B7_%D0%98%D1%81%D1%82%D1%82%D0%B0%D1%83%D0%BD%D0%B0.webp?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дурак",
        rating: "8/10",
        year: "2014",
        date: "10.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/23/%D0%94%D1%83%D1%80%D0%B0%D0%BA_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Бойцовский клуб",
        rating: "7/10",
        year: "1999",
        date: "08.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Рататуй",
        rating: "8/10",
        year: "2007",
        date: "08.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d1/Ratatui.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Паразиты",
        rating: "9/10",
        year: "2019",
        date: "07.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/77/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC_%D0%9F%D0%B0%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D1%8B_%28Gisaengchung%29.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Треугольник печали",
        rating: "8/10",
        year: "2022",
        date: "07.01.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/a/a4/%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_%D0%BF%D0%B5%D1%87%D0%B0%D0%BB%D0%B8.jpeg/960px-%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_%D0%BF%D0%B5%D1%87%D0%B0%D0%BB%D0%B8.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Дом Gucci",
        rating: "7/10",
        year: "2021",
        date: "05.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/2c/%D0%94%D0%BE%D0%BC_Gucci.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Три тысячи лет желаний",
        rating: "7/10",
        year: "2022",
        date: "05.01.2023",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/0/00/Three_Thousand_Years_of_Longing_%28film%29.jpg/960px-Three_Thousand_Years_of_Longing_%28film%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Еще по одной",
        rating: "7/10",
        year: "2020",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%95%D1%89%D1%91_%D0%BF%D0%BE_%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Работа без авторства",
        rating: "8/10",
        year: "2018",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Never_Look_Away_%28film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и Дары Смерти: Часть II",
        rating: "8/10",
        year: "2011",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f4/Harry_Potter_and_the_Deathly_Hallows._Part_2_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и философский камень",
        rating: "8/10",
        year: "2001",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гром: Трудное детство",
        rating: "7/10",
        year: "2023",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/45/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и Дары Смерти: Часть I",
        rating: "7/10",
        year: "2010",
        date: "02.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/98/Harry_Potter_and_the_Deathly_Hallows._Part_1_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и Принц-полукровка",
        rating: "8/10",
        year: "2009",
        date: "01.01.2023",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/82/Harry_Potter_and_the_Half-Blood_Prince_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и Орден Феникса",
        rating: "7/10",
        year: "2007",
        date: "31.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/60/Harry_Potter_and_the_Order_of_the_Phoenix_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и Кубок огня",
        rating: "7/10",
        year: "2005",
        date: "31.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/45/Harry_Potter_and_the_Goblet_of_Fire_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гарри Поттер и узник Азкабана",
        rating: "8/10",
        year: "2004",
        date: "30.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/b/b2/Harry_Potter_and_the_Prisoner_of_Azkaban_%E2%80%94_movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Амели",
        rating: "7/10",
        year: "2001",
        date: "27.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/9b/Amelie_DVD_box.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Реальная любовь",
        rating: "6/10",
        year: "2003",
        date: "27.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Love-actually-movie.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шоу Трумана",
        rating: "8/10",
        year: "1998",
        date: "24.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cd/Trumanshow.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Шестое чувство",
        rating: "8/10",
        year: "1999",
        date: "24.12.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/6/66/The_sixth_sense.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Вечное сияние чистого разума",
        rating: "8/10",
        year: "2004",
        date: "04.08.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Гаттака",
        rating: "8/10",
        year: "1997",
        date: "31.07.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/a/a3/Gattaca_Movie_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Контакт",
        rating: "7/10",
        year: "1997",
        date: "28.06.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/3e/Contact_%28%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Всё везде и сразу",
        rating: "8/10",
        year: "2021",
        date: "23.06.2022",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/f/fb/%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg/960px-%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Дьявол носит Prada",
        rating: "8/10",
        year: "2006",
        date: "19.06.2022",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/7/7f/%D0%94%D1%8C%D1%8F%D0%B2%D0%BE%D0%BB_%D0%BD%D0%BE%D1%81%D0%B8%D1%82_Prada_2.jpg/960px-%D0%94%D1%8C%D1%8F%D0%B2%D0%BE%D0%BB_%D0%BD%D0%BE%D1%81%D0%B8%D1%82_Prada_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Матильда",
        rating: "7/10",
        year: "1996",
        date: "18.06.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D1%82%D0%B8%D0%BB%D1%8C%D0%B4%D0%B0.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Линкольн для адвоката",
        rating: "7/10",
        year: "2011",
        date: "24.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/e/e6/The_Lincoln_Lawyer.jpeg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Путь к сердцу",
        rating: "7/10",
        year: "2016",
        date: "23.04.2022",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1993cde5-370d-4089-869b-05c7e5ed0e53/600x900"
    },
    {
        title: "Убить Билла 2",
        rating: "8/10",
        year: "2004",
        date: "22.04.2022",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/2f8295c3-cc9f-43cf-8dfe-13616c3eaa5e/600x900"
    },
    {
        title: "Убить Билла",
        rating: "9/10",
        year: "2003",
        date: "21.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/cf/Kill_bill_vol_one_ver.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Семь жизней",
        rating: "8/10",
        year: "2008",
        date: "17.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/85/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A1%D0%B5%D0%BC%D1%8C_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%B9.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Новый Папа",
        rating: "7/10",
        year: "2020",
        date: "16.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/79/The_New_Pope.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Стрингер",
        rating: "7/10",
        year: "2013",
        date: "16.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d4/%D0%A1%D1%82%D1%80%D0%B8%D0%BD%D0%B3%D0%B5%D1%80_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%2C_2014%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "В поисках Немо",
        rating: "9/10",
        year: "2003",
        date: "09.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/2/29/Finding_Nemo.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Приключения Паддингтона 2",
        rating: "7/10",
        year: "2017",
        date: "09.04.2022",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXC5FEl2i5PFR15MtqfYHhTT4ry_mfdqT1L1rAe74a8_uqc0VOcaj-U-0&s=10"
    },
    {
        title: "Как приручить дракона",
        rating: "6/10",
        year: "2010",
        date: "09.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/57/How_to_Train_Your_Dragon_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Жизнь других",
        rating: "7/10",
        year: "2006",
        date: "09.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/5d/The_Lives_of_Others_%28poster%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Бесстыжие",
        rating: "8/10",
        year: "2011",
        date: "09.04.2022",
        image: "https://resizer.mail.ru/p/3cfb369c-5f5f-5108-b2f3-c857c987342b/AQAC5KzbEMtDMofKHU_gURyPHwwWzr6ONKV6V22RqN8S3JF8B8ibT3HMCAbfYRGtAJXk3sThrTnhopxuVhFI_IvQ2O4.png"
    },
    {
        title: "Опустевший город",
        rating: "8/10",
        year: "2007",
        date: "05.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/97/Reign_over_me.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Разрушение",
        rating: "7/10",
        year: "2015",
        date: "05.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/8/80/%D0%A0%D0%B0%D0%B7%D1%80%D1%83%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Богемская рапсодия",
        rating: "8/10",
        year: "2018",
        date: "04.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/46/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Основатель",
        rating: "6/10",
        year: "2016",
        date: "04.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/71/The_Founder_film.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Атака титанов: Потерянные девушки",
        rating: "8/10",
        year: "2017",
        date: "04.04.2022",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/040c1d3e-d04f-4053-82ed-44dfa3d8f244/600x900"
    },
    {
        title: "Атака титанов",
        rating: "9/10",
        year: "2013",
        date: "04.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d2/Shingeki_no_Kyojin.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Выживший",
        rating: "8/10",
        year: "2015",
        date: "03.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/75/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%92%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D0%B9%C2%BB_%282015%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Молодой Папа",
        rating: "7/10",
        year: "2016",
        date: "03.04.2022",
        image: "https://i.amediateka.tech/resize/%7BSIZE%7D/_stor_/cms/content-contentasset/c/04/db7b8153be158cdbf4c841a672338c04-50642-16c12374999246ab933b9dbc3806ac22.jpg"
    },
    {
        title: "Далласский клуб покупателей",
        rating: "7/10",
        year: "2013",
        date: "01.04.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/d/d9/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%94%D0%B0%D0%BB%D0%BB%D0%B0%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BB%D1%83%D0%B1_%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Поймай меня, если сможешь",
        rating: "8/10",
        year: "2002",
        date: "30.03.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7c/Catch_Me_if_You_Can_%282002%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Черный ящик",
        rating: "6/10",
        year: "2020",
        date: "26.02.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4a/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D1%8F%D1%89%D0%B8%D0%BA_2020_%D0%B3%D0%BE%D0%B4%D0%B0.png?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Дюна",
        rating: "8/10",
        year: "2021",
        date: "02.01.2022",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f1/%D0%94%D1%8E%D0%BD%D0%B0_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Человек-паук: Нет пути домой",
        rating: "8/10",
        year: "2021",
        date: "26.12.2021",
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/6/6e/Spider-Man_%E2%80%94_No_Way_Home_poster.jpg/960px-Spider-Man_%E2%80%94_No_Way_Home_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        title: "Человек-паук 3: Враг в отражении",
        rating: "7/10",
        year: "2007",
        date: "22.12.2021",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/7a/Spider-Man_3%2C_International_Poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Вечность",
        rating: "7/10",
        year: "2014",
        date: "30.04.2021",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2849cc6f-c0ce-4203-9a14-6b84930345c1/600x900"
    },  
    {
        title: "Земля кочевников",
        rating: "7/10",
        year: "2020",
        date: "27.04.2021",
        image: "https://upload.wikimedia.org/wikipedia/ru/c/c1/Nomadland_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        title: "Манифест",
        rating: "6/10",
        year: "2018",
        date: "24.04.2021",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1a/Manifest_poster.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    }
];
