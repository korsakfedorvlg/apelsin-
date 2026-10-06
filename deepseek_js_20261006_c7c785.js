(function (g) {
  const KEY = 'apelsin_content_v1';

  const DEFAULTS = {
    meta: {
      title: 'АПЕЛЬСИН — фитнес-студия, куда хочется возвращаться',
      description: 'АПЕЛЬСИН — современная фитнес-студия с функциональными, силовыми, stretching, Pilates, Mobility и TRX-тренировками.'
    },
    hero: {
      kicker: 'premium fitness • wellness • community',
      titleHtml: 'Фитнес, который <em>хочется продолжать</em>',
      sub: 'Тренировки, энергия и люди, которые помогают становиться сильнее каждый день — без давления и без гонки за идеалом.',
      primaryLabel: 'Записаться на первое занятие',
      secondaryLabel: 'Посмотреть направления',
      micro: 'Первое занятие — знакомство со студией и тренером.',
      noteLabel: 'Открытый урок', noteValue: '10.10 · 13:00',
      imageMain: 'assets/c1.jpg', imageMainAlt: 'Тренировка в студии',
      imageTop: 'assets/c3.jpg', imageTopAlt: 'Растяжка',
      imageBottom: 'assets/c4.jpg', imageBottomAlt: 'Тренировка на гибкость'
    },
    benefits: {
      kicker: 'почему апельсин', title: 'Здесь хочется быть собой',
      sub: 'Современная студия без перегиба в «спорт ради спорта». Выбирайте свой ритм, а мы поможем его поддерживать.',
      items: [
        { num: '01', title: 'Небольшие группы', text: 'Больше внимания тренера каждому клиенту и спокойный темп прогресса.' },
        { num: '02', title: 'Сильные тренеры', text: 'Профессиональная команда, которая мотивирует без давления.' },
        { num: '03', title: 'Удобное расписание', text: 'Утренние, дневные и вечерние тренировки для разных графиков.' },
        { num: '04', title: 'Атмосфера', text: 'Без соревнования и токсичной мотивации. Только удовольствие от процесса.' }
      ]
    },
    directions: {
      kicker: 'форматы тренировок', title: 'Выбери свою тренировку',
      sub: 'От мягкой мобильности до силовой работы. Начните с того, что подходит вам сегодня.',
      filters: [
        { key: 'all', label: 'Все' },
        { key: 'strength', label: 'Сила' },
        { key: 'mobility', label: 'Баланс & mobility' },
        { key: 'mind', label: 'Mind-body' }
      ],
      items: [
        { cat: 'strength', title: 'Functional', desc: 'Динамичная тренировка на силу и координацию.', duration: '55 мин', level: 'средний', img: 'assets/c1.jpg', pos: '50% 50%' },
        { cat: 'mobility', title: 'Stretching', desc: 'Мягко возвращаем телу длину и лёгкость.', duration: '55 мин', level: 'мягкий', img: 'assets/c3.jpg', pos: '50% 50%' },
        { cat: 'mind', title: 'Pilates', desc: 'Контроль, дыхание и сильный центр.', duration: '50 мин', level: 'начальный', img: 'assets/c4.jpg', pos: '50% 50%' },
        { cat: 'strength', title: 'Strength', desc: 'Осмысленная силовая работа.', duration: '60 мин', level: 'средний+', img: 'assets/c1.jpg', pos: '62% 50%' },
        { cat: 'mind', title: 'Yoga', desc: 'Баланс силы и восстановления.', duration: '60 мин', level: 'мягкий', img: 'assets/c3.jpg', pos: '34% 50%' },
        { cat: 'mobility', title: 'Mobility', desc: 'Подвижность суставов и качество движения.', duration: '45 мин', level: 'любой', img: 'assets/c4.jpg', pos: '58% 50%' },
        { cat: 'strength', title: 'TRX', desc: 'Функциональная работа с петлями.', duration: '50 мин', level: 'средний', img: 'assets/c1.jpg', pos: '43% 50%' }
      ]
    },
    schedule: {
      kicker: 'план на неделю', title: 'Расписание без хаоса',
      sub: 'Выберите день, найдите привычный ритм и забронируйте место за несколько секунд.',
      days: [
        [{ time: '07:30', name: 'Mobility', trainer: 'Мария', duration: '45 мин', level: 'мягкий', spots: 7 }, { time: '10:00', name: 'Pilates', trainer: 'Елена', duration: '50 мин', level: 'начальный', spots: 5 }, { time: '18:00', name: 'Functional', trainer: 'Александра', duration: '55 мин', level: 'средний', spots: 4 }, { time: '20:00', name: 'Stretching', trainer: 'Мария', duration: '55 мин', level: 'мягкий', spots: 6 }],
        [{ time: '08:00', name: 'Yoga', trainer: 'Елена', duration: '60 мин', level: 'мягкий', spots: 8 }, { time: '13:00', name: 'TRX', trainer: 'Дмитрий', duration: '50 мин', level: 'средний', spots: 3 }, { time: '18:30', name: 'Strength', trainer: 'Александра', duration: '60 мин', level: 'средний+', spots: 2 }, { time: '20:00', name: 'Stretching', trainer: 'Мария', duration: '55 мин', level: 'мягкий', spots: 5 }],
        [{ time: '07:30', name: 'Functional', trainer: 'Дмитрий', duration: '55 мин', level: 'средний', spots: 6 }, { time: '11:00', name: 'Mobility', trainer: 'Мария', duration: '45 мин', level: 'любой', spots: 5 }, { time: '18:00', name: 'Pilates', trainer: 'Елена', duration: '50 мин', level: 'начальный', spots: 2 }, { time: '20:00', name: 'Strength', trainer: 'Александра', duration: '60 мин', level: 'средний+', spots: 4 }],
        [{ time: '08:00', name: 'Stretching', trainer: 'Мария', duration: '55 мин', level: 'мягкий', spots: 7 }, { time: '10:30', name: 'Pilates', trainer: 'Елена', duration: '50 мин', level: 'начальный', spots: 4 }, { time: '18:00', name: 'TRX', trainer: 'Дмитрий', duration: '50 мин', level: 'средний', spots: 1 }, { time: '19:30', name: 'Functional', trainer: 'Александра', duration: '55 мин', level: 'средний', spots: 3 }],
        [{ time: '07:30', name: 'Strength', trainer: 'Александра', duration: '60 мин', level: 'средний+', spots: 5 }, { time: '13:00', name: 'БодиБаланс', trainer: 'Елена', duration: '55 мин', level: 'мягкий', spots: 6 }, { time: '18:30', name: 'Functional', trainer: 'Дмитрий', duration: '55 мин', level: 'средний', spots: 2 }, { time: '20:00', name: 'Mobility', trainer: 'Мария', duration: '45 мин', level: 'любой', spots: 8 }],
        [{ time: '10:00', name: 'Yoga', trainer: 'Елена', duration: '60 мин', level: 'мягкий', spots: 6 }, { time: '13:00', name: 'Открытый урок', trainer: 'Команда', duration: '60 мин', level: 'любой', spots: 9 }],
        [{ time: '10:00', name: 'Stretching', trainer: 'Мария', duration: '55 мин', level: 'мягкий', spots: 8 }, { time: '12:00', name: 'Pilates', trainer: 'Елена', duration: '50 мин', level: 'начальный', spots: 6 }]
      ]
    },
    offer: {
      kicker: 'открытый урок', title: 'Попробуй Апельсин',
      text: '10 октября в 13:00 — бесплатный комбо-класс «БодиБаланс + стретчинг». Приходи познакомиться со студией без обязательств.',
      primaryLabel: 'Записаться', secondaryLabel: 'Задать вопрос',
      date: '2026-10-10T13:00:00'
    },
    trainers: {
      kicker: 'команда', title: 'Тренеры, которым хочется доверять',
      sub: 'Покажите реальную команду студии — фото и специализации можно менять в админке.',
      items: [
        { name: 'Александра', spec: 'Functional / Strength', meta: '8 лет опыта • силовая подготовка', quote: '«Моя задача — сделать тренировки частью вашей жизни.»', img: 'assets/c1.jpg', pos: '49% 13%' },
        { name: 'Мария', spec: 'Stretching / Mobility', meta: '6 лет опыта • мобильность', quote: '«Гибкость начинается с внимания к телу.»', img: 'assets/c3.jpg', pos: '51% 46%' },
        { name: 'Елена', spec: 'Pilates / Balance', meta: '7 лет опыта • осознанное движение', quote: '«Люблю момент, когда человек доверяется тренировке.»', img: 'assets/c4.jpg', pos: '50% 34%' },
        { name: 'Дмитрий', spec: 'TRX / Functional', meta: '9 лет опыта • функциональный тренинг', quote: '«Прогресс — это когда сегодня чуть легче, чем месяц назад.»', img: 'assets/c1.jpg', pos: '36% 15%' }
      ]
    },
    about: {
      kicker: 'о студии', title: 'Апельсин — место, куда приходят за энергией',
      text1: 'Здесь не нужно выглядеть как человек с обложки, чтобы начать.',
      text2: 'Мы собрали разные форматы движения: от stretching до функциональных тренировок.',
      stats: [
        { value: 500, label: 'клиентов' },
        { value: 8, label: 'направлений' },
        { value: 15, label: 'тренеров' },
        { value: 1200, label: 'тренировок / мес.' }
      ],
      images: [
        { src: 'assets/c1.jpg', alt: 'Интерьер студии', pos: '55% 50%' },
        { src: 'assets/c3.jpg', alt: 'Растяжка', pos: '45% 56%' },
        { src: 'assets/c4.jpg', alt: 'Гибкость', pos: '58% 55%' }
      ]
    },
    reviews: {
      kicker: 'живые впечатления', title: 'Они уже нашли свой ритм',
      items: [
        { name: 'Анна К.', sub: 'Stretching • 3 месяца', initials: 'АК', text: '«Приходишь уставшая — выходишь собраннее.»' },
        { name: 'Мария С.', sub: 'Functional • 8 месяцев', initials: 'МС', text: '«Тренер действительно замечает тебя.»' },
        { name: 'Ирина Р.', sub: 'Pilates • 5 месяцев', initials: 'ИР', text: '«Тренировки стали любимым ритуалом недели.»' },
        { name: 'Дарья М.', sub: 'Mobility • 4 месяца', initials: 'ДМ', text: '«Наконец-то двигаюсь с удовольствием.»' }
      ]
    },
    pricing: {
      kicker: 'абонементы', title: 'Выберите свой ритм', sub: 'Цены можно менять в админке.',
      items: [
        { title: 'Разовое', price: '700 ₽', popular: false, features: ['1 тренировка', 'Срок — в день посещения', 'Любое направление'] },
        { title: 'START', price: '2 900 ₽', popular: false, features: ['4 тренировки', '30 дней', 'Перенос при записи заранее'] },
        { title: 'MOVE', price: '5 200 ₽', popular: true, features: ['8 тренировок', '45 дней', 'Заморозка 7 дней', 'Гостевое посещение'] },
        { title: 'ORANGE', price: '6 900 ₽', popular: false, features: ['12 тренировок', '60 дней', 'Заморозка 10 дней'] },
        { title: 'UNLIMITED', price: '9 900 ₽', popular: false, features: ['Безлимит 30 дней', 'Все направления', 'Заморозка 14 дней', 'Приоритетная запись'] }
      ]
    },
    faq: {
      kicker: 'всё просто', title: 'Частые вопросы', sub: 'Собрали короткие ответы для первого визита.',
      items: [
        { q: 'Подойдет ли новичкам?', a: 'Да. Тренер адаптирует упражнения под ваш опыт.' },
        { q: 'Что взять с собой?', a: 'Удобную форму, носки или кроссовки и воду.' },
        { q: 'Можно ли отменить запись?', a: 'Да, при отмене заранее занятие возвращается в баланс.' },
        { q: 'Как выбрать направление?', a: 'Для силы — Functional, Strength, TRX; для мягкости — Stretching, Mobility.' },
        { q: 'Есть ли пробное занятие?', a: 'Да — открытый урок или заявка на знакомство.' }
      ]
    },
    contacts: {
      kicker: 'мы рядом', title: 'Ждем тебя в Апельсине',
      sub: 'Адрес и карта подтягиваются из админ-панели.',
      phone: '8 902 312-66-45', email: 'hello@apelsin.fit',
      hours: 'Пн–Пт 07:00–22:00\nСб–Вс 09:00–20:00',
      socials: [ { label: 'TG', href: '#' }, { label: 'WA', href: '#' }, { label: 'VK', href: '#' }, { label: 'IG', href: '#' } ],
      routeLabel: 'Построить маршрут',
      yandexOrgId: '', address: ''
    },
    finalCta: {
      kicker: 'твой первый шаг', title: 'Начни с одной тренировки',
      text: 'Тебе не нужно быть в форме, чтобы прийти. Приходи — форму создадим вместе.',
      btnLabel: 'Записаться на тренировку'
    },
    footer: {
      note: 'Фитнес-студия современной городской жизни: движение, энергия, баланс.',
      copyright: '© Апельсин. Все права защищены.'
    }
  };

  function deepMerge(base, patch) {
    if (Array.isArray(base)) return Array.isArray(patch) ? patch : base;
    if (base && typeof base === 'object') {
      const out = { ...base };
      if (patch && typeof patch === 'object') {
        for (const k of Object.keys(patch)) out[k] = k in base ? deepMerge(base[k], patch[k]) : patch[k];
      }
      return out;
    }
    return patch !== undefined ? patch : base;
  }

  function get() {
    try {
      const raw = localStorage.getItem(KEY);
      const base = JSON.parse(JSON.stringify(DEFAULTS));
      if (!raw) return base;
      return deepMerge(base, JSON.parse(raw));
    } catch (e) {
      console.warn('content-store get error', e);
      return JSON.parse(JSON.stringify(DEFAULTS));
    }
  }

  function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }
  function reset() { localStorage.removeItem(KEY); }
  function clone() { return JSON.parse(JSON.stringify(DEFAULTS)); }

  g.ContentStore = { KEY, DEFAULTS, get, save, reset, clone, deepMerge };
})(window);