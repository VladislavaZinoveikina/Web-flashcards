module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      text: 'Не комнаты, а...',
      rightAnswer: 'палаты',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '1',
      status: false,
    },
    {
      text: 'Не дурка, а...',
      rightAnswer: 'Эльбрус',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '1',
      status: false,
    },
    {
      text: 'Самый скоростной речитатив. Назовите исполнителя.\nПодсказка: это не Эминем.',
      rightAnswer: 'Денис',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '1',
      status: false,
    },
    {
      text: 'На кого похож Денис на своей аве в Телеграм? Назовите',
      rightAnswer: 'Райан Гослинг',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '1',
      status: false,
    },
    {
      text: 'Кто напал на Дениса во время квеста в Москве?',
      rightAnswer: 'Жуткие монашки',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '1',
      status: false,
    },
    {
      text: 'Младший лейтенант...',
      rightAnswer: 'мальчик молодой',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '2',
      status: false,
    },
    {
      text: 'А Я ПРОСТИЛА Я ПРОСТИЛА',
      rightAnswer: 'ЕГО ОПЯТЬ ОПЯТЬ ОПЯТЬ',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '2',
      status: false,
    },
    {
      text: 'Я календарь переверну...',
      rightAnswer: 'И снова третье сентября',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '2',
      status: false,
    },
    {
      text: 'ЯСНЫЙ МОЙ СВЕТ',
      rightAnswer: 'ТЫ НАПИШИ МНЕ',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '2',
      status: false,
    },
    {
      text: 'Такие девушки, как звёзды...',
      rightAnswer: 'Такие звёзды, как она',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '2',
      status: false,
    },
    {
      text: 'В России — язык русский,\nВо Франции — французский,\nВ Германии — германский,\nА в Греции — ...',
      rightAnswer: 'грецкий',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '3',
      status: false,
    },
    {
      text: 'Чего в озере больше, чем в море?',
      rightAnswer: 'Букв',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '3',
      status: false,
    },
    {
      text: 'Полосатая река в Юго-Западной Азии',
      rightAnswer: 'Тигр',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '3',
      status: false,
    },
    {
      text: 'Владимирский централ, ветер северный\nЭтапом из...',
      rightAnswer: 'Твери',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '3',
      status: false,
    },
    {
      text: 'Запрещённая страна на Твиче',
      rightAnswer: 'Нигер',
      createdAt: new Date(),
      updatedAt: new Date(),
      topicId: '3',
      status: false,
    },
    ]);
  },

  async down(queryInterface, Sequelize) {

  },
};