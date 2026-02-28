const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function tellTime(){
  const date = new Date();
  alert(date);
}

const modal = document.querySelector('.modal-blackBG');
const body = document.querySelector('.body');
const Name = document.getElementById("modal-name");
const Email = document.getElementById("modal-email");
const About = document.getElementById("modal-about");
const Content = document.getElementById("modal-content");
function openModal() {
  modal.classList.add("modal-open");
  body.classList.add("modal-open");

  const formName = document.getElementById("contact-name").value;
  const formEmail = document.getElementById("contact-email").value;
  const formAbout = document.getElementById("contact-about").value;
  const formContent = document.getElementById("contact-content").value;
  Name.textContent = formName
  Email.textContent = formEmail
  About.textContent = formAbout
  Content.textContent = formContent
}
function closeModal() {
  modal.classList.remove("modal-open");
  body.classList.remove("modal-open");
}