const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passwordValidator = require('password-validator');



exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
          }
          res.status(200).json({
            token: jwt.sign(
               { userId: user._id, role: user.role},
                'TOKENTOKENTOKEN',
                { expiresIn: '24h' }
              )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      let filtreMail = /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})$/

      var schema = new passwordValidator();
      schema
      .is().min(8)
      .is().max(30)
      .has().uppercase()
      .has().lowercase() 
      .has().digits(2)
      .has().not().spaces()
      
      if (filtreMail.test(req.body.email) === true && schema.validate(req.body.password)) {
        const user = new User({
            ...req.body,
            password: hash,
            role: "ROLE_USER"
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
      }
    })
    .catch(error => res.status(500).json({ error }));
}

exports.EditUser = (req, res, next) => {
  const userToEdit = req.file ?
  { 
      ...JSON.parse(req.body.user),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };
User.updateOne({ _id: req.params.id }, { ...userToEdit, _id: req.params.id })
  .then(user => {
      res.status(200).json({ message: 'User modified' })
      }
  )
  .catch(error => res.status(400).json({ error }))
}