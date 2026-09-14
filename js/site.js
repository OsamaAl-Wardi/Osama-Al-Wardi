/* Progressive enhancement: section links and research disclosures work without JS. */
(function () {
  'use strict';
  var button = document.querySelector('.menu-toggle');
  var navigation = document.getElementById('site-nav');
  if (!button || !navigation) return;
  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }
  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link) return;
    setOpen(false);
    // Move focus with the navigation so it does not remain in the closed menu.
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', function () { target.removeAttribute('tabindex'); }, { once: true });
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  var mobile = window.matchMedia('(max-width: 640px)');
  function resetMenu() { setOpen(false); }
  if (mobile.addEventListener) mobile.addEventListener('change', resetMenu);
  else mobile.addListener(resetMenu);
  button.hidden = false;
  document.documentElement.classList.add('js-enabled');
}());
