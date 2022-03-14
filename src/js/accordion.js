function accordion(target) {
  let accordion = target.parentNode.querySelector('*[name="accordion"]');
  let allAccordions = target.parentNode.parentNode.querySelectorAll('*[name="accordion"]');

  allAccordions.forEach((elem) => {
    if (accordion !== elem) {
      elem.style.maxHeight = '0';
      elem.value = null;
      elem.parentNode.classList.remove(elem.parentNode.classList[0]+'--active')
    }
  });

  if (!accordion.value) {
    accordion.style.maxHeight = accordion.scrollHeight + "px";
    accordion.value = 'show';
    target.parentNode.classList.add(target.parentNode.classList[0]+'--active')
  } else {
    accordion.style.maxHeight = '0';
    accordion.value = null;
    target.parentNode.classList.remove(target.parentNode.classList[0]+'--active')
  }
}
