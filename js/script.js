const modalController = ({ modal, openButton, closeButton }) => {
  const buttonElem = document.querySelectorAll(openButton);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
  `;

  const closeModal = (event) => {
    const target = event.target;
    if (target === modalElem || target.closest(closeButton)) {
      modalElem.style.opacity = 0;
      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, 300);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
  };

  buttonElem.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  modalElem.addEventListener("click", closeModal);
};

modalController({
  modal: ".modal1",
  openButton: ".welcome_block__button1",
  closeButton: ".close-button",
});

modalController({
  modal: ".modal2",
  openButton: ".welcome_block__button2",
  closeButton: ".close-button",
});

modalController({
  modal: ".modal3",
  openButton: ".welcome_block__button3",
  closeButton: ".close-button",
});

modalController({
  modal: ".modal4",
  openButton: ".welcome_block__button4",
  closeButton: ".close-button",
});
