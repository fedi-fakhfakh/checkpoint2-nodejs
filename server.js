const express = require('express');
const app = express();
const ejs = require('ejs');
 
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

const checkWorkingHours = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hourOfDay = date.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay <= 17) {
      next();
    } else {
      res.send('Sorry, the website is only available during working hours (Monday to Friday, from 9am to 5pm).');
    }
  };
  
  app.use(checkWorkingHours);

  app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
  });
  
  app.get('/services', (req, res) => {
    res.render('services', { pageTitle: 'Our Services' });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact Us' });
  });
app.listen(3000)  