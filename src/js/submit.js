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
