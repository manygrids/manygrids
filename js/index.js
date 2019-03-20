;window.onload = function() {

  document.querySelector('#SendMsg').addEventListener('click', function () {
    var msg = document.querySelector('#LeaveMsg').value;
    if (msg.length > 0) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//api.kvugt.com/gcai/leave', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send('message=' + encodeURIComponent(msg));
      document.querySelector('#LeaveMsg').value = '';
    }
  }, true);


  var xhr = new XMLHttpRequest();
  xhr.open('GET', '//api.kvugt.com/gcai/msg', true);

  xhr.onreadystatechange = function() {
    if (4 == xhr.readyState && 200 == xhr.status) {
      document.querySelector('#PrevMsg').innerHTML = decodeURIComponent(xhr.responseText);
    }
  };

  xhr.send();

};