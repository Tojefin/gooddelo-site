function popupShow(id) {

  const container = document.querySelector('.popup-container')
  if (!container) {return console.log("Контейнер не найден")}
  container.addEventListener('click', function(event){
    if (event.target == container) {popupShow();}
  })

  const templates = document.querySelector('#popups')
  if (!templates) {return console.log("Шаблоны не найдены")}

  if (id) {
    container.innerHTML = templates.content.querySelector('#'+id).outerHTML;
    window.location.hash = 'popup';
    if (container.classList.contains('popup-container--active')) {return}
  }

  if (container.classList.contains('popup-container--active')) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }

  return container.classList.toggle('popup-container--active');

}

window.onhashchange = function(event) {
  if (event.oldURL.split('#').reverse()[0] == 'popup') {
    return popupShow();
  }
}

window.onload = function() {
  if (window.location.href.split('#').reverse()[0] == 'popup') {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}
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
function menuOpen() {
  let menu = document.querySelector('.header__menu')
  let links = menu.querySelectorAll('a')
  if (menu.style.top == '0px') {
    menu.style.top = '-100vh'
    links.forEach((i) => {
      i.removeEventListener('click', () => {menu.style.top = '-100vh';})
    });
  } else {
    menu.style.top = '0px';
    links.forEach((i) => {
      i.addEventListener('click', () => {menu.style.top = '-100vh';})
    });
  }
}
function submit() {
  var url = "https://webhook.site/94189d36-1322-4bde-866c-3a4aabb2fd67";
  var method = "POST";
  var postData = {"name": "Test", "phone": "+7927...", "email": "tojefin@gmail.com", "comment": "Comment"};

  var shouldBeAsync = true;

  var request = new XMLHttpRequest();

  request.onload = function () {

     var status = request.status;
     var data = request.responseText;
  }

  request.open(method, url, shouldBeAsync);

  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(postData);
}