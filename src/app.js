const express = require ('express')
const exphbs = require ('express-handlebars')
const session = require ('express-session')
const flash = require("express-flash");
const FileStore = require("session-file-store")(session);

const app = express()

const conn = require ('./db/conn')

const controle = require('../src/controllers/controle')

const rota = require ('./router/rota')

app.engine('handlebars' , exphbs.engine())
app.set('view engine' , 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true,
}),
)

app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  }),
)

app.use(flash());

app.use(express.json())

app.use(express.static('public'))

app.use(session({secret:"chave"}))

app.use (rota)


conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))