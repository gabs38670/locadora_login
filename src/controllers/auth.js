const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class auth {
  static register (req , res) {
    res.render('register')
  }
  static async registerPost (req , res){
    const {name, email, password, confirmpassword} = req.body

    if (password != confirmpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente!')
      res.render('register')
      
      return
  }
  const checkUser = await User.findOne ({where: { email: email }})

  if(checkUser) {
    req.flash('message', 'e-mail existente!')
    res.render('register')

    return
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password , salt)

  const user = {
    name,
    email,
    password: hashedPassword,
  }
  
  User.create(user)
    .then((user) => {
      req.session.userid = user.id

      req.flash('message', 'Cadastro realizado!!')
      
      req.session.userid = user.id

      req.session.save(() => {
        res.redirect('/')
      })
    })
    .catch((err) => console.log(err))
}

static login (req,res){
  res.render('login')
}

static async loginPost(req , res){
  const { email, password } = req.body

  const user = await User.findOne({ where: {email: email} })

  if(!user) {
    res.render('login', {
      message: 'Usuário não encontrado!',
    })
    return
  }

  const passwordCheck = bcrypt.compareSync(password, user.password)

  if(!passwordCheck) {
    res.render('login', {
      message: 'Senha inválida!',
    })
    return
  }

  req.session.userid = user.id
  
  req.flash('message', 'Login efetuado com sucesso!')

  req.session.save(() => {
    res.redirect('home')
  })
}
static logout(req, res) {
  req.session.destroy()
  res.redirect('/')
}
}