"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const questions = [
    {
      id: "unskilled-1",
      data: [
        {
          question: "What is Lorem Ipsum?",
          options: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
        },
        {
          question: "What is Lorem Ipsum2?",
          options: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
        },
      ],
    },
    {
      id: "unskilled-2",
      data: [
        {
          question: "What is Lorem Ipsum used for 1?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
        {
          question: "What is Lorem Ipsum used for 2?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
      ],
    },
    {
      id: "unskilled-3",
      data: [
        {
          question: "What is Lorem Ipsum used for 1?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
        {
          question: "What is Lorem Ipsum used for 2?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
      ],
    },
    {
      id: "unskilled-4",
      data: [
        {
          question: "What is Lorem Ipsum used for 1?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
        {
          question: "What is Lorem Ipsum used for 2?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
      ],
    },
    {
      id: "skilled-1",
      data: [
        {
          question: "What is Skill A?",
          options: ["Skill A 1", "Skill A 2", "Skill A 3"],
        },
        {
          question: "What is Skill B?",
          options: ["Skill B 1", "Skill B 2", "Skill B 3"],
        },
      ],
    },
    {
      id: "skilled-2",
      data: [
        {
          question: "What is Skill C?",
          options: ["Skill C 1", "Skill C 2", "Skill C 3"],
        },
        {
          question: "What is Skill D?",
          options: ["Skill D 1", "Skill D 2", "Skill D 3"],
        },
      ],
    },
    {
      id: "skilled-3",
      data: [
        {
          question: "What is Skill C?",
          options: ["Skill C 1", "Skill C 2", "Skill C 3"],
        },
        {
          question: "What is Skill D?",
          options: ["Skill D 1", "Skill D 2", "Skill D 3"],
        },
      ],
    },
    {
      id: "skilled-4",
      data: [
        {
          question: "What is Skill C?",
          options: ["Skill C 1", "Skill C 2", "Skill C 3"],
        },
        {
          question: "What is Skill D?",
          options: ["Skill D 1", "Skill D 2", "Skill D 3"],
        },
      ],
    },
    {
      id: "highly-skilled-1",
      data: [
        {
          question: "What is Highly Skilled A?",
          options: [
            "Highly Skilled A 1",
            "Highly Skilled A 2",
            "Highly Skilled A 3",
          ],
        },
        {
          question: "What is Highly Skilled B?",
          options: [
            "Highly Skilled B 1",
            "Highly Skilled B 2",
            "Highly Skilled B 3",
          ],
        },
      ],
    },
    {
      id: "highly-skilled-2",
      data: [
        {
          question: "What is Highly Skilled C?",
          options: [
            "Highly Skilled C 1",
            "Highly Skilled C 2",
            "Highly Skilled C 3",
          ],
        },
        {
          question: "What is Highly Skilled D?",
          options: [
            "Highly Skilled D 1",
            "Highly Skilled D 2",
            "Highly Skilled D 3",
          ],
        },
      ],
    },
    {
      id: "highly-skilled-3",
      data: [
        {
          question: "What is Highly Skilled C?",
          options: [
            "Highly Skilled C 1",
            "Highly Skilled C 2",
            "Highly Skilled C 3",
          ],
        },
        {
          question: "What is Highly Skilled D?",
          options: [
            "Highly Skilled D 1",
            "Highly Skilled D 2",
            "Highly Skilled D 3",
          ],
        },
      ],
    },
    {
      id: "highly-skilled-4",
      data: [
        {
          question: "What is Highly Skilled C?",
          options: [
            "Highly Skilled C 1",
            "Highly Skilled C 2",
            "Highly Skilled C 3",
          ],
        },
        {
          question: "What is Highly Skilled D?",
          options: [
            "Highly Skilled D 1",
            "Highly Skilled D 2",
            "Highly Skilled D 3",
          ],
        },
      ],
    },
    {
      id: "professional-1",
      data: [
        {
          question: "What is Professional Skill X?",
          options: [
            "Professional Skill X 1",
            "Professional Skill X 2",
            "Professional Skill X 3",
          ],
        },
        {
          question: "What is Professional Skill Y?",
          options: [
            "Professional Skill Y 1",
            "Professional Skill Y 2",
            "Professional Skill Y 3",
          ],
        },
      ],
    },
    {
      id: "professional-2",
      data: [
        {
          question: "What is Professional Skill Z?",
          options: [
            "Professional Skill Z 1",
            "Professional Skill Z 2",
            "Professional Skill Z 3",
          ],
        },
        {
          question: "What is Professional Skill W?",
          options: [
            "Professional Skill W 1",
            "Professional Skill W 2",
            "Professional Skill W 3",
          ],
        },
      ],
    },
    {
      id: "professional-3",
      data: [
        {
          question: "What is Professional Skill Z?",
          options: [
            "Professional Skill Z 1",
            "Professional Skill Z 2",
            "Professional Skill Z 3",
          ],
        },
        {
          question: "What is Professional Skill W?",
          options: [
            "Professional Skill W 1",
            "Professional Skill W 2",
            "Professional Skill W 3",
          ],
        },
      ],
    },
    {
      id: "professional-4",
      data: [
        {
          question: "What is Professional Skill Z?",
          options: [
            "Professional Skill Z 1",
            "Professional Skill Z 2",
            "Professional Skill Z 3",
          ],
        },
        {
          question: "What is Professional Skill W?",
          options: [
            "Professional Skill W 1",
            "Professional Skill W 2",
            "Professional Skill W 3",
          ],
        },
      ],
    },
  ];

  const questionareSection = document.querySelector(".questionare-section");

  let currentQuestionIndex = 0;

  function createQuestionContainer(questionObj, questionIndex) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    const questionHeading = document.createElement("h2");
    questionHeading.classList.add("heading-secondary");
    questionHeading.textContent = `Question ${questionIndex + 1}`;

    const questionText = document.createElement("span");
    questionText.classList.add("question");
    questionText.textContent = questionObj.question;

    const form = document.createElement("form");
    form.classList.add("mcqs-form");

    questionObj.options.forEach((option, index) => {
      const mcqsContainer = document.createElement("div");
      mcqsContainer.classList.add("mcqs-container");

      const input = document.createElement("input");
      input.classList.add("ans");
      input.type = "radio";
      input.id = `radio${questionIndex}-${index + 1}`;
      input.name = `mcq${questionIndex}`;
      input.value = `option${questionIndex}-${index + 1}`;

      const label = document.createElement("label");
      label.htmlFor = `radio${questionIndex}-${index + 1}`;

      const optionText = document.createElement("span");
      optionText.textContent = option;

      mcqsContainer.appendChild(input);
      mcqsContainer.appendChild(label);
      mcqsContainer.appendChild(optionText);

      form.appendChild(mcqsContainer);
    });

    const submitButton = document.createElement("input");
    submitButton.classList.add("submit-btn");
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(submitButton);

    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message");
    errorElement.style.color = "red";
    errorElement.textContent = "Please select an option";

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const selectedOption = form.querySelector(
        'input[name="mcq' + questionIndex + '"]:checked'
      );
      if (!selectedOption) {
        form.insertBefore(errorElement, submitButton);
      } else {
        if (errorElement.parentNode) {
          errorElement.parentNode.removeChild(errorElement);
        }
        displayNextQuestion();
      }
    });

    questionContainer.appendChild(questionHeading);
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(form);

    return questionContainer;
  }

  function displayNextQuestion() {
    const currentQuestionSet = questions.find((set) => set.id === id);
    if (!currentQuestionSet) {
      window.location.href = "https://fiverr.com";
      return;
    }

    const currentQuestionData = currentQuestionSet.data;

    if (currentQuestionIndex >= currentQuestionData.length) {
      if (
        confirm("You've completed all the questions! Do you want to redirect?")
      ) {
        window.location.href = "https://fiverr.com";
      }
      return;
    }

    const currentQuestionObj = currentQuestionData[currentQuestionIndex];
    const questionContainer = createQuestionContainer(
      currentQuestionObj,
      currentQuestionIndex
    );
    questionareSection.appendChild(questionContainer);

    currentQuestionIndex++;
  }

  displayNextQuestion();
});
