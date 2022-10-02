const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('focus');
  });
});
