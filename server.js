require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT =  process.env.PORT || 3000;
const db = require('./models/db');
//set up database
db.once('connected',()=>{
  console.log('connected to mongo')
})
//view engine
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
//middleware and controllers
app.use((req,res,next)=>{
  res.locals.data = {}
  next()
});
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.get('/', (req,res)=>{
  res.redirect('/products')
})
app.use('/products',require('./controllers/routeController'));

app.listen(PORT, ()=>{
  console.log('listening on port ', PORT);
})
