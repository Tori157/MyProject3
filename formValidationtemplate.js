function formValidation() {
  const addEventHandler = () => {
    const saveButton = document.getElementById("save");
    const resetButton = document.getElementById("reset");

    saveButton.addEventListener("click", saveHandler);
    resetButton.addEventListener("click", resetHandler);
  };

  const saveHandler = () => {
    const fullNameElement = document.getElementById("fullname");
    const feedbackElement = document.getElementById("feedback");

    const pNameMsg = document.getElementById("nameValidateMsg");
    const pFeedbackMsg = document.getElementById("feedbackValidateMsg");

    if (fullNameElement.value.trim().length === 0) {
      pNameMsg.textContent = "please enter your name";
    } else pNameMsg.textContent = "";
    if (feedbackElement.value.trim().length === 0) {
      pFeedbackMsg.textContent = "please enter your feedback";
    } else pFeedbackMsg.textContent = "";
  };

  const resetHandler = () => {
    const fullnameElement = document.getElementById("fullname");
    const feedbackElement = document.getElementById("feedback");
    fullnameElement.value = "";
    feedbackElement.value = "";
  };

  return {
    addEventHandler,
  };
}

const { addEventHandler } = formValidation();
addEventHandler();
