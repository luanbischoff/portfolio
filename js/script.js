'use strict';
// modal
const contactModal = document.querySelector('.popup-contato-modal');
const contactModalContainer = document.querySelector('.popup-contato-container');
const contactModalClose = document.querySelector('.popup-contato-close');
const contactButtons = document.querySelectorAll('.btn-contato');
// form
const contactForm = document.querySelector('#contato-form');
const formNameInput = document.querySelector('#nome');
const formWhatsAppInput = document.querySelector('#whatsapp');
const contactFormSubmit = document.querySelector('#contato-form-submit');

function closeContactModal() {
  contactModal.classList.remove('active');
  contactModalContainer.classList.remove('active');
  formNameInput.value = '';
  formWhatsAppInput.value = '';
  contactFormSubmit.disabled = true;
}
function openContactModal() {
  contactModal.classList.add('active');
  contactModalContainer.classList.add('active');
}

for (let i = 0; i < contactButtons.length; i++) {
  contactButtons[i].addEventListener('click', function () {
    openContactModal();
  });
}
contactModal.addEventListener('click', function () {
  closeContactModal();
});
contactModalClose.addEventListener('click', function () {
  closeContactModal();
});
formNameInput.addEventListener('input', function () {
  if (formNameInput.value !== '' && formWhatsAppInput.value !== '') {
    contactFormSubmit.disabled = false;
  } else {
    contactFormSubmit.disabled = true;
  }
  if (formNameInput.value !== '') {
    formNameInput.style.borderStyle = 'solid';
  } else {
    formNameInput.style.borderStyle = 'dashed';
  }
});

formWhatsAppInput.addEventListener('input', function () {
  if (formNameInput.value !== '' && formWhatsAppInput.value !== '') {
    contactFormSubmit.disabled = false;
  } else {
    contactFormSubmit.disabled = true;
  }
  if (formWhatsAppInput.value !== '') {
    formWhatsAppInput.style.borderStyle = 'solid';
  } else {
    formWhatsAppInput.style.borderStyle = 'dashed';
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && contactModal.classList.contains('active')) {
    closeContactModal();
  }
});
