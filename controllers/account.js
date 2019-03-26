const Account = require('../models/account');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.accountCreate = function (req, res, next) {
  const characterLength = [8, 10, 15, 18, 20];
  const lengthUsername = req.body.username.length;
  const indexOfUsername = characterLength.indexOf(lengthUsername);
  if (indexOfUsername === -1) {
    return res.status(400).json({
      success: false,
      message: 'Incorrect data format',
    })
  }

  let account = new Account({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  account.save(function (err) {
    if (err) {
      console.log(err)
      res.status(422).json({
        success: false,
        message: err.message || "error"
      })
    } else {
      res.send({
        success: true,
        message: "succes"
      })
    }

  })
}




exports.accountLogin = function (req, res) {
const characterLength = [8, 10, 15, 18, 20];
const lengthUsername = req.body.username.length;
const indexOfUsername = characterLength.indexOf(lengthUsername);
if (indexOfUsername === -1){
  return res.json({
    success: false,
    message: err.message || "Incorrect data format"
  })
}

switch (req.body.username.length) {
      case 18: //NIP (Teacher ID) is 18 character
        Account.findOne({ username: req.body.username }, (err, userNote) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: 'error'
            })

          } else {
            if (!userNote) {
              return res.status(400).json({
                message: 'User not found'
              })
            }

            bcrypt.compare(req.body.password, userNote.password)
              .then((valid) => {
                if (!valid) {
                  return res.status(400).json({
                    success: false,
                    message: 'Wrong Password'
                  })
                }

                const token = jwt.sign({ id: userNote._id }, 'jwtsecret', { expiresIn: '30d' })
                return res.status(200).json({
                  success: true,
                  token: token,
                  role: "teacher"
                })
              })
              .catch(err => {
                return res.status(400).json({
                  success: false,
                  message: 'Password required to login'
                })
              })
          }
        })
        break;

      case 8: //NPSN (School ID is 8 character)
        Account.findOne({ username: req.body.username }, (err, userNote) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: 'error'
            })

          } else {
            if (!userNote) {
              return res.status(400).json({
                message: 'User not found'
              })
            }

            bcrypt.compare(req.body.password, userNote.password)
              .then((valid) => {
                if (!valid) {
                  return res.status(400).json({
                    success: false,
                    message: 'Wrong Password'
                  })
                }

                const token = jwt.sign({ id: userNote._id }, 'jwtsecret', { expiresIn: '30d' })
                return res.status(200).json({
                  success: true,
                  token: token,
                  role: "schoolAdmin"
                })
              })
              .catch(err => {
                return res.status(400).json({
                  success: false,
                  message: 'Password required to login'
                })
              })
          }
        })
        break;

      case 10: //NISN (Student ID) is 10 character
        Account.findOne({ username: req.body.username }, (err, userNote) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: 'error'
            })

          } else {
            if (!userNote) {
              return res.status(400).json({
                message: 'User not found'
              })
            }

            bcrypt.compare(req.body.password, userNote.password)
              .then((valid) => {
                if (!valid) {
                  return res.status(400).json({
                    success: false,
                    message: 'Wrong Password'
                  })
                }

                const token = jwt.sign({ id: userNote._id }, 'jwtsecret', { expiresIn: '30d' })
                return res.status(200).json({
                  success: true,
                  token: token,
                  role: "parents"
                })
              })
              .catch(err => {
                return res.status(400).json({
                  success: false,
                  message: 'Password required to login'
                })
              })
          }
        })
        break;

      case 15: //appsAdmin username is 15 digit unique character
        Account.findOne({ username: req.body.username }, (err, userNote) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: 'error'
            })

          } else {
            if (!userNote) {
              return res.status(400).json({
                message: 'User not found'
              })
            }

            bcrypt.compare(req.body.password, userNote.password)
              .then((valid) => {
                if (!valid) {
                  return res.status(400).json({
                    success: false,
                    message: 'Wrong Password'
                  })
                }

                const token = jwt.sign({ id: userNote._id }, 'jwtsecret', { expiresIn: '30d' })
                return res.status(200).json({
                  success: true,
                  token: token,
                  role: "appsAdmin"
                })
              })
              .catch(err => {
                return res.status(400).json({
                  success: false,
                  message: 'Password required to login'
                })
              })
          }
        })
        break;

      case 20: //doe ID (Departments of Education ID) is 20 digit unique username 
        Account.findOne({ username: req.body.username }, (err, userNote) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: 'error'
            })

          } else {
            if (!userNote) {
              return res.status(400).json({
                message: 'User not found'
              })
            }

            bcrypt.compare(req.body.password, userNote.password)
              .then((valid) => {
                if (!valid) {
                  return res.status(400).json({
                    success: false,
                    message: 'Wrong Password'
                  })
                }

                const token = jwt.sign({ id: userNote._id }, 'jwtsecret', { expiresIn: '30d' })
                return res.status(200).json({
                  success: true,
                  token: token,
                  role: "doe"
                })
              })
              .catch(err => {
                return res.status(400).json({
                  success: false,
                  message: 'Password required to login'
                })
              })
          }
        })
        break;
      default:
        res.json({
          success: false,
          message: "Username is not found"
        })
    }
 


}
