
const express = require("express");
const app = express();
const request = require('request');

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET,DELETE');
        return res.status(200).json({});
    }
    next();
});

app.get('/technology', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=technology&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/sports', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=sports&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/science', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=science&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/health', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=health&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/general', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=general&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/entertainment', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=entertainment&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});

app.get('/business', (req, res) => {
  
    request('http://newsapi.org/v2/top-headlines?country=de&category=business&language=en&apiKey=8985de3bda974d09bb1138dc42cfae35', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
       res.send(body);
      });

});


app.listen(3000,()=>{
    console.log("Server Started!!!");
})