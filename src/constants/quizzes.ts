import { IQuiz } from "@/types";

export const quizJavaScriptBase: IQuiz = {
  id: 0,
  title: "JS Basics",
  description: "Base quiz for beginner",
  level: "Beginner",
  tags: ["JS", "Basic"],
  image: "/js.png",
  questions: [
    {
      question: "Что такое JavaScript?",
      answers: [
        "Язык программирования",
        "Браузер",
        "Графический редактор",
        "Веб-сервер",
      ],
      correctAnswer: 0,
    },
    {
      question: "Как объявить переменную в JavaScript?",
      answers: ["variable x;", "var x;", "let x;", "const x;"],
      correctAnswer: 2,
    },
    {
      question: "Какой оператор используется для сравнения по значению и типу?",
      answers: ["==", "===", "=", "!=="],
      correctAnswer: 1,
    },
    {
      question: "Что такое массив в JavaScript?",
      answers: ["Строка", "Коллекция данных", "Функция", "Число"],
      correctAnswer: 1,
    },
    {
      question:
        "Какой метод используется для добавления элемента в конец массива?",
      answers: ["push()", "add()", "append()", "insert()"],
      correctAnswer: 0,
    },
    {
      question:
        "Какой цикл используется для выполнения кода определенное количество раз?",
      answers: ["for...in", "while", "do...while", "for"],
      correctAnswer: 3,
    },
    {
      question: "Что такое DOM в контексте JavaScript?",
      answers: [
        "Домашняя страница",
        "Домен",
        "Document Object Model",
        "Модель данных",
      ],
      correctAnswer: 2,
    },
    {
      question: "Как объявить функцию в JavaScript?",
      answers: [
        "function myFunction(){}",
        "myFunction = function(){}",
        "def myFunction(){}",
        "function = myFunction(){}",
      ],
      correctAnswer: 0,
    },
    {
      question: "Как создать объект в JavaScript?",
      answers: [
        "object x = {}",
        "const x = object()",
        "const x = []",
        "const x = {}",
      ],
      correctAnswer: 3,
    },
    {
      question: "Что делает оператор `typeof` в JavaScript?",
      answers: [
        "Возвращает тип переменной",
        "Удаляет переменную",
        "Проверяет равенство значений",
        "Определяет тип оператора",
      ],
      correctAnswer: 0,
    },
  ],
};

export const quizJavaScriptAdvanced: IQuiz = {
  id: 1,
  title: "JS Advanced",
  description: "Advanced JavaScript quiz",
  level: "Beginner",
  tags: ["JS", "Advanced"],
  image: "/js.png",
  questions: [
    {
      question: "Что такое замыкание в JavaScript?",
      answers: [
        "Функция, объявленная внутри другой функции, имеющая доступ к переменным внешней функции",
        "Особый тип данных для хранения заметок",
        "Способ анимации в браузере",
        "Метод для создания копии объекта",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что такое прототип в JavaScript?",
      answers: [
        "Объект, от которого наследуется другой объект",
        "Специальный вид функции",
        "Атрибут элемента в HTML",
        "Метод для создания анимации",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что такое асинхронность в JavaScript?",
      answers: [
        "Способ определения типов данных",
        "Подход к написанию кода, позволяющий избежать callback hell",
        "Встроенный объект для работы с асинхронными операциями",
        "Синтаксический сахар для цикла",
      ],
      correctAnswer: 1,
    },
    {
      question: "Как создать Promise в JavaScript?",
      answers: [
        "promise.create()",
        "new Promise()",
        "createPromise()",
        "Promise()",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое RESTful API?",
      answers: [
        "Тип базы данных",
        "Модуль для работы с изображениями",
        "Архитектурный стиль для построения веб-сервисов",
        "Библиотека для парсинга JSON",
      ],
      correctAnswer: 2,
    },
    {
      question: "Какие методы жизненного цикла есть у React компонента?",
      answers: [
        "componentDidMount, componentWillUpdate, componentWillUnmount",
        "create, update, destroy",
        "start, pause, stop",
        "onLoad, onUpdate, onDelete",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что такое webpack?",
      answers: [
        "Графический редактор",
        "Менеджер пакетов",
        "Сборщик модулей JavaScript",
        "Система контроля версий",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое JSX в React?",
      answers: [
        "JavaScript XML - синтаксис для описания структуры UI в React",
        "Название библиотеки для тестирования React компонентов",
        "Способ описания стилей в React компонентах",
        "Формат данных для хранения состояния компонентов",
      ],
      correctAnswer: 0,
    },
    {
      question: "Какие типы данных поддерживает TypeScript?",
      answers: [
        "Только числа и строки",
        "Все те же, что и JavaScript, плюс дополнительные",
        "Только массивы и объекты",
        "Только булев тип",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое контекст (this) в JavaScript?",
      answers: [
        "Тип данных для хранения времени",
        "Система виртуальной реальности",
        "Объект, который ссылается на текущий объект",
        "Модуль для работы с геолокацией",
      ],
      correctAnswer: 2,
    },
  ],
};

export const quizHTMLBase: IQuiz = {
  id: 2,
  title: "HTML Basics",
  description: "Base HTML quiz for beginner",
  level: "Beginner",
  tags: ["HTML", "Basic"],
  image: "/html.png",
  questions: [
    {
      question: "Что означает аббревиатура HTML?",
      answers: [
        "HyperText Markup Language",
        "Highly Typed Modeling Language",
        "Home Tool Management Language",
        "Human Tolerance and Multicultural Learning",
      ],
      correctAnswer: 0,
    },
    {
      question: "Какой тег используется для создания ссылки в HTML?",
      answers: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
    },
    {
      question: "Какой тег используется для создания таблицы в HTML?",
      answers: ["<table>", "<tab>", "<tr>", "<th>"],
      correctAnswer: 0,
    },
    {
      question: "Как вставить изображение в HTML?",
      answers: [
        '<img src="image.jpg" alt="My Image">',
        '<image src="image.jpg" alt="My Image">',
        '<picture href="image.jpg" alt="My Image">',
        '<img alt="My Image">image.jpg</img>',
      ],
      correctAnswer: 0,
    },
    {
      question: "Как сделать текст жирным (bold) в HTML?",
      answers: ["<bold>", "<strong>", "<b>", "<heavy>"],
      correctAnswer: 2,
    },
    {
      question: "Какой тег используется для создания формы в HTML?",
      answers: ["<form>", "<input>", "<label>", "<submit>"],
      correctAnswer: 0,
    },
    {
      question: "Как вставить горизонтальную линию в HTML?",
      answers: ["<line>", "<hr>", "<hl>", "<divider>"],
      correctAnswer: 1,
    },
    {
      question: "Как создать номеранный (упорядоченный) список в HTML?",
      answers: ["<ul>", "<li>", "<ol>", "<list>"],
      correctAnswer: 2,
    },
    {
      question: "Как добавить комментарий в HTML?",
      answers: [
        "<!-- Это комментарий -->",
        "// Это комментарий",
        "<comment>Это комментарий</comment>",
        "<msg>Это комментарий</msg>",
      ],
      correctAnswer: 0,
    },
    {
      question: "Какой тег используется для определения заголовка в HTML?",
      answers: ["<header>", "<h1>", "<heading>", "<title>"],
      correctAnswer: 1,
    },
  ],
};

export const quizCSSBase: IQuiz = {
  id: 3,
  title: "CSS Basics",
  description: "Base CSS quiz for beginner",
  level: "Beginner",
  tags: ["CSS", "Basic"],
  image: "/css.png",
  questions: [
    {
      question: "Что означает аббревиатура CSS?",
      answers: [
        "Counter Style Sheet",
        "Cascading Style Sheet",
        "Computer Style Sheet",
        "Creative Style Sheet",
      ],
      correctAnswer: 1,
    },
    {
      question: "Как выбрать все элементы в HTML с определенным классом в CSS?",
      answers: [".class", "#class", "element.class", "element#class"],
      correctAnswer: 0,
    },
    {
      question: "Как установить цвет фона для элемента в CSS?",
      answers: ["background-color", "color", "background", "bgcolor"],
      correctAnswer: 0,
    },
    {
      question:
        "Как добавить внешний отступ (margin) вокруг всех сторон элемента в CSS?",
      answers: ["margin", "margin-all", "margin: auto;", "margin: 0 auto;"],
      correctAnswer: 3,
    },
    {
      question: "Как скрыть элемент в CSS?",
      answers: [
        "display: hidden;",
        "visibility: hidden;",
        "hidden: true;",
        "display: none;",
      ],
      correctAnswer: 3,
    },
    {
      question: "Как выровнять текст по центру горизонтали в CSS?",
      answers: [
        "text-align: center;",
        "horizontal-align: center;",
        "center-text: horizontal;",
        "align-text: center;",
      ],
      correctAnswer: 0,
    },
    {
      question: "Как установить шрифт для текста в CSS?",
      answers: ["font-style", "text-font", "font-family", "text-family"],
      correctAnswer: 2,
    },
    {
      question: "Как создать анимацию в CSS?",
      answers: ["@keyframes", "animation", "animate", "motion"],
      correctAnswer: 1,
    },
    {
      question: "Как изменить размер текста в CSS?",
      answers: ["text-size", "font-size", "size", "text-scale"],
      correctAnswer: 1,
    },
    {
      question: "Как создать границу вокруг элемента в CSS?",
      answers: ["border", "outline", "border-style", "element-border"],
      correctAnswer: 0,
    },
  ],
};

export const quizAllList: IQuiz[] = [
  quizJavaScriptBase,
  quizJavaScriptAdvanced,
  quizHTMLBase,
  quizCSSBase,
];

export const htmlQuizzes: IQuiz[] = [quizHTMLBase];
export const cssQuizesss: IQuiz[] = [quizCSSBase];
export const jsQuizzes: IQuiz[] = [quizJavaScriptBase, quizJavaScriptAdvanced];
