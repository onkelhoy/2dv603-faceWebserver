var request = require('request');


// request({
//     method: 'GET',
//     uri: 'https://lnu-face.herokuapp.com/admin?page=0&size=8',
//     auth: {
//       'user': 'admin',
//       'pass': 'password'
//     }
//
//   function (error, response, body) {
//     if (error) {
//       return console.error('upload failed:', error);
//     }
//     console.log('Upload successful!  Server responded with:', body);
//   })

var data = request.get('https://lnu-face.herokuapp.com/admin?page=0&size=8').auth('admin', 'password', false);

console.log(data);
