const buttons = document.querySelectorAll('.btn-plataforma ul li a');

buttons.forEach((button) => {
  if (button.href === '#' || button.href === '') {
    button.parentNode.parentNode.remove();
  }
});