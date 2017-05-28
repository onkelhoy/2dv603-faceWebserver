(function(){
  "use-strict"

  let exp = require('express'),
      route = exp.Router();

  app.use(exp.static(path.join(__dirname, 'semantic')));
  app.use(exp.static(path.join(__dirname, 'public')));

  route.get('/admin', function(req, res){
    if(req.session.credentials && req.session.credentials.admin) {
      res.status(200).render('index', {
        type: 'admin',
        title: 'Face - admin'
      });
    }
    else res.redirect('login');
  });

  module.exports route;
}());
