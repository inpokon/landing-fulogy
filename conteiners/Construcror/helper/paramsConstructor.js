export const sizes = [0.5, 7];

export const typesLayout = [
    {
        code: 'line',
        name: 'Прямая'
    },
    {
        code: 'g-figure',
        name: 'Г-образная'
    },
    {
        code: 'p-figure',
        name: 'П-образная'
    },
];

export const lampClasses = [
    {
        code: 'pro',
        name: 'Pro',
        list: [
            'Полностью готовый к установке светильник',
            'Профиль FULOGY',
            'Лента PRO 140LED/m, 18 W/m, CRI>90, яркость 2000Lm/m.',
            'Наличие техподдержки',
            'Возможен монтаж «под ключ»',
            'Гарантия 3 года'
        ]
    },
    {
        code: 'pro+',
        name: 'Pro +',
        list: [
            'Полностью готовый к установке светильник',
            'Профиль FULOGY',
            {span: 'серый, черный, белый, золотой'},
            'Лента PRO 168LED/m, 24 W/m, CRI>90, яркость 2000Lm/m.',
            'Наличие техподдержки',
            'Возможен монтаж «под ключ»',
            'Гарантия 5 года'
        ]
    }
];

export const colors = [
    {
        code: 'silver',
        name: 'Серый'
    },
    {
        code: 'dark',
        name: 'Черный'
    },
    {
        code: 'light',
        name: 'Белый'
    },
    {
        code: 'gold',
        name: 'Золотой'
    },
];

export const blocks = [
  'size', 'typeLayout', 'lampClass', 'bodyColor'
];
