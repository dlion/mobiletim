var request = require('request');

request({
  url: "https://www.tim.it/authfe/loginTIMinternet.do?urlOk=https://www.119selfservice.tim.it/area-clienti-119/rest/promozioniAttivePP/json",
  method: 'POST',
  jar: true
}, function(err, res, req) {
  if(!err) {
    request({
      url: "https://www.119selfservice.tim.it/area-clienti-119/rest/promozioniAttivePP/json",
      method: 'POST',
      json: true,
      jar: true,
      strictSSL: false
    }, function(err, res, req) {
      var i, j;
      if(!err) {
        for(i in req.promozioniList) {
          console.log("-- "+req.promozioniList[i].promotionName+" --");
          for(j in req.promozioniList[i].caratteristiche) {
            console.log(req.promozioniList[i].caratteristiche[j].descrizione+ "-- End Validity: "+req.promozioniList[i].caratteristiche[j].endvalidity);
          }
        }
      } else {
        console.log('Error: '+err);
      }
    });
  } else {
    console.log('Error: '+err);
  }
});
