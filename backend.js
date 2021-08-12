const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use (express.static('build'));

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

app.use(function(req, res, next) {
  console.log("Je fais un console.log à chaque requête", new Date().toDateString());
  next(); // call the next function to execute the following routes
  // if removed, the next route never fires
});

//JSONWEBTOKEN//
const jwt = require('jsonwebtoken')
const secretKey = 'ç45FTmopà-36*?JS*9593'

//ROUTE//
app.get('/api/achievements', function(req, res) {
  res.render('achievements');
});

app.post('/api/achievements', function(req, res) {
  res.render('achievements');
});

app.post('/api/login', async (req,res) => {
  const {username,password} = req.body
  const user= await user.findOne({username, password}).exec()
  if (user) {
    const token = jwt.sign(user.toJSON(), secretKey)
    res.json({ token })

  } else {
    res.json({message:"invalid username or password"})
  }
});
app.get("/api/login", (req, res) => {
  res.render('login')
})