//Confirm Modal
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

const payment = document.querySelector('#dmodal');
const pmessage = document.querySelector('#payment');
const openPayment = document.querySelector('.open-payment');
const openpMessage = document.querySelector('.close-payment');
const closePayment = document.querySelector('.payment-close');

openPayment.addEventListener('click', () => {
  payment.showModal();
})

openpMessage.addEventListener('click', () => {
  pmessage.showModal();
})

closePayment.addEventListener('click', () => {
  pmessage.close();
  payment.close();
})

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

//Website Navigation
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
});