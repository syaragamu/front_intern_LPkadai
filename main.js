const swiper = new Swiper('.swiper', {
  loop: true,
  autoHeight: false,
  alignItems: 'stretch',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // ユーザーが手動でスライドを触っても、自動再生を止めない設定
  },
});

const btn = document.getElementById('Btn');

btn.addEventListener('click', function() {
  alert(Date());
});

const modalArea = document.getElementById('modalArea');
const submitBeforeBtn = document.getElementById('submit_before');
const cancelBtn = document.getElementById('cancel');
const submitBtn = document.getElementById('submit');
const body = document.body;

const Name = document.getElementById('name');
const modalName = document.getElementById('modalName');
const email = document.getElementById('email');
const modalEmail = document.getElementById('modalEmail');
const title = document.getElementById('title');
const modalTitle = document.getElementById('modalTitle');
const content = document.getElementById('content');
const modalContent = document.getElementById('modalContent');

submitBeforeBtn.addEventListener('click', function() {
    modalName.textContent = Name.value;
    modalEmail.textContent = email.value;
    modalTitle.textContent = title.options[title.selectedIndex].text;
    modalContent.textContent = content.value;
    modalArea.style.display = "block";
    body.classList.add('is-modal-open');
});
cancelBtn.addEventListener('click', function() {
    modalArea.style.display = "none";
    body.classList.remove('is-modal-open');
});
submitBtn.addEventListener('click', function() {
    modalArea.style.display = "none";
    body.classList.remove('is-modal-open');
});
