#!/usr/bin/env node
var request = require('request'),
    colors  = require('colors/safe');

request({
  url: "https://www.tim.it/authfe/loginTIMinternet.do?urlOk=" +
        "https://www.119selfservice.tim.it/area-clienti-119/rest/promozioniAttivePP/json",
  method: 'POST',
  jar: true
}, function (err, res, req) {
  if (!err) {
    request({
      url: "https://www.119selfservice.tim.it/area-clienti-119/rest/promozioniAttivePP/json",
      method: 'POST',
      json: true,
      jar: true,
      strictSSL: false
    }, function (err, res, req) {
      if (!err) {
        for(var i in req.promozioniList) {
          console.log("-- " + colors.green(req.promozioniList[i].promotionName) + " --");
          for(var j in req.promozioniList[i].caratteristiche) {
            console.log(colors.blue(req.promozioniList[i].caratteristiche[j].descrizione) + "--" +
                        "End Validity: " + colors.red(req.promozioniList[i].caratteristiche[j].endvalidity));
          }
        }
      } else {
        console.log('Error: ' + err);
      }
    });
  } else {
    console.log('Error: ' + err);
  }
});
