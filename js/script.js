'use strict';

var catalog = document.querySelector('.navigation__item--open');
var user = document.querySelector('.navigation__second-item');
var userLink = document.querySelector('.navigation__second-list-account');
var popupUser = document.querySelector('.navigation__pop-up');
var link = document.querySelector('.btn__write-us');
var popup = document.querySelector('.overlay');
var close = document.querySelector('.form-answer__close');
var userName = popup.querySelector('#form-name');
var userMail = popup.querySelector('#form-mail');
var userMessage = popup.querySelector('#form-feedback');
var btnjs = popup.querySelector('.btn__js');
var btnMini = document.querySelector('.btn__popup-mini');
// catalog

// user-block in second-menu  //
user.addEventListener('mouseover', function (event) {
  event.preventDefault();
  userLink.classList.add('sprite-entry2');
});

user.addEventListener('mouseout', function (event) {
  event.preventDefault();
  userLink.classList.remove('sprite-entry2');
  userLink.classList.add('sprite-entry');
  if (userLink.classList.contains('popupUser')) {
    popupUser.addEventListener('mouseout', function(event) {
      popupUser.style.display = none;
    })
  }
});

//  open & close popup  //
link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('overlay');
  popup.classList.add('overlay--open-js');
  userName.focus();
  if (storageName) {
    userName.value = storageName;
    userMail.focus();
  }
  if (userMail) {
    userMail.value = storageMail;
  }
  if (storageName && storageMail) {
    userMessage.focus();
  }
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('overlay--open-js');
  popup.classList.add('overlay');
});

btnjs.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('overlay--open-js');
  popup.classList.add('overlay');
});
