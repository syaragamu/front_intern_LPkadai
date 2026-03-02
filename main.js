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