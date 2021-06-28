var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const db = require('./database/models');

var principalRouter = require('./routes/principal');
var usuarioRouter = require('./routes/miPerfil');
var iniciarSesionRouter = require('./routes/inicioSesion');
var detalleRouter = require('./routes/detalleProducto');
var agregarRouter = require('./routes/agregarProducto');
var resultadosRouter = require('./routes/resultadosBusqueda');
var registrarseRouter = require('./routes/registrarse');
var perfilesRouter = require('./routes/otrosPerfil');
var editarPerfilRouter = require('./routes/editarPerfil');
var editarProductoRouter = require('./routes/editarProducto');
var otrosRouter = require('./routes/otrosPerfil');
var todosProductosRouter = require('./routes/todosProductos')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(
  { secret:'gamepause',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    console.log(res.locals.user);
    return next();
  } 
  return next();  
})

app.use(function(req, res, next){
 
  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;
    
    db.User.findByPk(idDeLaCookie)
    .then( user => {
      console.log('en cookie middleware trasladando');
      req.session.user = user; 
      console.log('en cookie middleware');
      console.log(req.session.user);
      res.locals.user = user; 
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    return next();
  }

})



app.use('/', principalRouter);
app.use('/miPerfil', usuarioRouter);
app.use('/iniciarSesion', iniciarSesionRouter);
app.use('/detalleProducto', detalleRouter);
app.use('/agregarProducto', agregarRouter);
app.use('/resultados', resultadosRouter);
app.use('/registrarse', registrarseRouter);
app.use('/perfiles', perfilesRouter);
app.use('/editarPerfil', editarPerfilRouter);
app.use('/editarProducto', editarProductoRouter);
app.use('/otrosPerfil', otrosRouter);
app.use('/todosProductos', todosProductosRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
