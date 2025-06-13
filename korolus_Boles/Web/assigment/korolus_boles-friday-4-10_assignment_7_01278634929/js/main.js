var typedItems = document.getElementById('typed').getAttribute('data-typed-items').split(',').map(item => item.trim());
var typed = new Typed("#typed", {
  strings: typedItems,
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});