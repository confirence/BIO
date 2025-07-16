// Новый текст для тега <title>
const newTitle = `Digitalization and Programming Approaches:
Transforming Economic Mechanisms in the
Digital Era`;

const titleElement = document.getElementById("mainTitle");
titleElement.textContent = newTitle;
document.title = newTitle;

function replaceTextInDocument(oldText, newText) {
  // Обходим все текстовые узлы
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    // Заменяем текст
    if (node.nodeValue.includes(oldText)) {
      node.nodeValue = node.nodeValue.replaceAll(oldText, newText);
    }
  }
}

// Вызываем функцию для замены текста

replaceTextInDocument(
  "https://doi.org/10.1051/bioconf/20241400300545",
  "https://doi.org/10.1051/bioconf/2022430304187"
);
replaceTextInDocument("0300545", "0304187");

//  Авторы ----------------------------------

function updateAuthors(authors, mainAuthorIndex) {
  // Находим элемент с ID "boldAvtors"
  const boldAvtors = document.getElementById("boldAvtors");

  // Проверяем, существует ли элемент
  if (!boldAvtors) {
    console.error("Элемент с ID 'boldAvtors' не найден!");
    return;
  }

  // Генерируем новый HTML
  let html = "";
  authors.forEach((author, index) => {
    const id = `bioconf_geneticresources2024_0300545-author-${index + 1}`;
    const dataUrl = `/component/author/?dkey=10.1051/bioconf/20241500300545&n=${
      index + 1
    }`;
    const isMainAuthor = index === mainAuthorIndex;
    const mainAuthorSup = isMainAuthor ? "<sup>,*</sup>" : "";
    html += `
            <span id="${id}" data-url="${dataUrl}" class="author">${author}</span><sup>${
      index + 1
    }</sup>${mainAuthorSup}${index < authors.length - 1 ? "," : ""}
        `;
  });

  // Обновляем содержимое элемента
  boldAvtors.innerHTML = html;
}

// Массив авторов
const authors = ["Lyudmila Pototskaya", "Nadezhda Ukolova", "Bulat Elezhbiev"];

// Обновляем содержимое, указывая главного автора (например, 0 — первый автор)
updateAuthors(authors, 0);

//  университеты ----------------------------------

function updateUniversitiesHTML(universities) {
  // Находим элемент с ID "universities"
  const universitiesElement = document.getElementById("universities");

  // Проверяем, существует ли элемент
  if (!universitiesElement) {
    console.error("Элемент с ID 'universities' не найден!");
    return;
  }

  // Создаем новый HTML
  let html = "";
  universities.forEach((university) => {
    // Разделяем строку на номера и текст
    const match = university.match(/^(\d+(?:,\d+)*)\s(.+)$/);
    if (match) {
      const numbers = match[1]; // Номера в формате "1,2"
      const text = match[2]; // Текст университета
      // Формируем HTML для каждого университета
      html += `<sup>${numbers}</sup> ${text}<br />`;
    } else {
      console.error("Неверный формат строки:", university);
    }
  });

  // Обновляем содержимое элемента
  universitiesElement.innerHTML = html;
}

const universities = [
  "1,2 Saratov State Agrarian University named after N.I. Vavilova, Saratov, Russian Federation",
  "3 Kadyrov Chechen State University, Grozny, Russian Federation",
];

// Обновляем содержимое элемента с ID "universities"
updateUniversitiesHTML(universities);

function updateEmail(newEmail) {
  // Находим ссылку по ID
  const emailLink = document.getElementById("mailOfMain");

  // Проверяем, существует ли элемент
  if (!emailLink) {
    console.error("Элемент с ID 'mailOfMain' не найден!");
    return;
  }

  // Обновляем текст и href
  emailLink.textContent = newEmail;
  emailLink.href = `mailto:${newEmail}`;
}

// Пример вызова функции **************
updateEmail("lpototskaya@bk.ru");

//   -----========================

function updateParagraphText(newText) {
  // Находим абзац по ID
  const paragraph = document.getElementById("mainAbstract");

  // Проверяем, существует ли элемент
  if (!paragraph) {
    console.error("Элемент с ID 'mainAbstract' не найден!");
    return;
  }

  // Заменяем содержимое абзаца на новый текст
  paragraph.textContent = newText;
}

// Пример вызова функции ************
updateParagraphText(
  `The basis for development of an optimal organizational and
economic mechanism for land tenure and land use adapted to the
conditions of the digital economy is based on the principles and patterns of
its regulation through the identification and application of effective areas
of administrative influence at the federal level through use of innovative
tools. The analysis of the distribution of the land fund of the Russian
Federation by land categories for 2016-2020 is carried out and the need to
solve some of the fundamental problems of formation of the mechanism
under consideration through use of the identified development patterns
formed by the regulatory, economic and digital environment for its
regulation, considering the dynamics of changes in the category of
agricultural land within the study period is confirmed. It has been
established that interaction of subjects of land relations depends on the
degree of practical and scientific substantiation of the organizational and
economic mechanism of land tenure and land use, the functional state of
the digital and institutional environment.
`
);

//   ссылка на статью ---------------------------------

function updateArticleLink(newFilename) {
  // Находим ссылку по ID
  const linkElement = document.getElementById("linkOfArticle");

  // Проверяем, существует ли элемент
  if (!linkElement) {
    console.error("Элемент с ID 'linkOfArticle' не найден!");
    return;
  }

  // Разбиваем текущий href на базовую часть и имя файла
  const currentHref = linkElement.href;
  const baseUrl = currentHref.substring(0, currentHref.lastIndexOf("/") + 1);

  // Обновляем href
  linkElement.href = baseUrl + newFilename;

  // Генерируем случайное число для размера файла
  const randomSize = (Math.random() * (1.988 - 0.899) + 0.899).toFixed(3);

  // Обновляем текст ссылки, заменяя только число
  linkElement.textContent = linkElement.textContent.replace(
    /\d+\.\d{3}/,
    randomSize
  );
}

// Пример вызова функции ************
updateArticleLink("bioconf_rgeln2024_0304187.pdf");
