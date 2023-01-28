
const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector(".btn-close");
const btnOpenMobileNav = document.querySelector(".btn-mobile");
const btnCloseMobileNav = document.querySelector(".btn-close-mobile");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const mobileNav = document.querySelector(".header-wrapper");
const modalForm = document.querySelector('.modal-form')
const name = modalForm.querySelector('input[name="name"]')
const email = modalForm.querySelector('input[name="email"]')
const message = modalForm.querySelector('textarea[name="message"]')

const openModal = () => {
  if (overlay) {
    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.classList.add("modal-show");
    }, 300);
  }
};
const closeModal = () => {
  overlay.classList.remove("modal-show");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
};

const openMobileNav = () => {
  mobileNav.classList.add("block");
  setTimeout(() => {
    mobileNav.classList.add("show-menu");
  }, 300);
};

const closeMobileNav = () => {
  mobileNav.classList.remove("show-menu");
  setTimeout(() => {
    mobileNav.classList.remove("block");
  }, 1000);
};

const closeModalAll = (e) => {
  if (
    !e.target.closest(".modal") &&
    !e.target.closest(".btn") &&
    !e.target.closest(".btn-close")
  ) {
    if (overlay) {
      overlay.classList.remove("modal-show");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }
  }
};
const closeNavAll = (e) => {
  if (
    !e.target.closest(".header-wrapper") &&
    !e.target.closest(".btn-mobile")
  ) {
    mobileNav.classList.remove("show-menu");
    setTimeout(() => {
      mobileNav.classList.remove("block");
    }, 1000);
  }
};

if (btnOpenMobileNav) {
  btnOpenMobileNav.addEventListener("click", openMobileNav);
}
if (btnCloseMobileNav) {
  btnCloseMobileNav.addEventListener("click", closeMobileNav);
}

if (btnOpen) {
  btnOpen.addEventListener("click", openModal);
}

if (btnClose) {
  btnClose.addEventListener("click", closeModal);
}

document.addEventListener("click", closeModalAll);
document.addEventListener("click", closeNavAll);

const swiper = new Swiper(".reviews-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});


if (modalForm) {
  modalForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
  
    var formData = {
      name: name.value,
      email: email.value,
       message: message.value,
    };
  
    var request = new XMLHttpRequest();
  
    request.addEventListener('load', function() {
      // В этой части кода можно обрабатывать ответ от сервера
      console.log(request.response);
      alert('Ваша заявка успешно отправлена!');
      overlay.style.display="none";
      name.value = ''
      email.value = ''
      message.value = ''
    });
  
    request.open('POST', '/send.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email) + '&message=' + encodeURIComponent(formData.message));
  });
}

