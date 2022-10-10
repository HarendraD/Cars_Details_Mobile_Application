const express = require('express')
const app = express()
const router = express.Router()
const User = require('../model/user.model')


app.use(express.json())

router.get('/', async (req, res) => {
   try {
      const user = await User.find()
      res.json(user)
   } catch (err) {
      res.send('Err: ' + err)
   }
})
router.get('/login', async (req, resp) => {
   try {
      let res = await User.find();
      let response = undefined;
      res.forEach(async (e) => {

         if ((e.email === req.query.email) & (e.password === req.query.password)) {
            console.log(e.email + "/////" + e.password)
            console.log("////" + req.query.email + "////////" + req.query.password)
            response = true;
         }
      });
      resp.json(response);
   } catch (err) {
      resp.json({ message: err });
   }
});


router.post('/register', async (req, res) => {
   const user = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
   })

   try {
      const response = await user.save()
      res.json(response)
   } catch (err) {
      res.send('Err: ' + err)
   }
})
router.delete('/', async (req, resp) => {
   try {
      const user = await User.findById(req.params.name);
      const response = await user.remove()
      resp.json(response);
   } catch (err) {
      resp.json(err);
   }
})


module.exports = router