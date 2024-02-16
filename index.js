"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      title: "Unskilled",
      categories: [
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
      ],
    },
    {
      title: "Skilled",
      categories: [
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
      ],
    },
    {
      title: "Highly Skilled",
      categories: [
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
      ],
    },
    {
      title: "Professional",
      categories: [
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
        "Lorem Ipsum Lorem",
      ],
    },
  ];

  const cardsContainer = document.querySelector(".cards-container");

  function createCard(title, categories) {
    const card = document.createElement("div");
    card.classList.add("card");

    const heading = document.createElement("h2");
    heading.classList.add("heading-secondary");
    heading.textContent = title;

    const list = document.createElement("ul");
    list.classList.add("list");

    categories.forEach((category, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-item");

      const link = document.createElement("a");
      link.classList.add("cat-lnk");
      link.href = `./HTML/questionare.html?id=${title
        .toLowerCase()
        .replace(/\s/g, "-")}-${index + 1}`; // Constructing the href dynamically

      const linkText = document.createTextNode(category);
      link.appendChild(linkText);

      listItem.appendChild(link);
      list.appendChild(listItem);
    });

    card.appendChild(heading);
    card.appendChild(list);

    return card;
  }

  // Create card components based on data
  data.forEach((item) => {
    const card = createCard(item.title, item.categories);
    cardsContainer.appendChild(card);
  });
});
