const express = require('express');
const router = express.Router();

var id_counter = 0
var messages = []

/*
router.get('/',(req, res, next) => {
  res.send('Guten Tag');
});
*/
router.get('/',(req, res, next) => {
    res.status(200).json(messages);
});

//Post-Request speichert den Gästeicheintrag aus den Formulardaten
/*router.post('/',(req, res, next) => {


    resq.status(200).json({
        time: 
        name: document.getElementById('feedbackName').value, //Name
        //feedbackMail
        //feedbackBetreff
        //feedbackNachricht

      });
});*/

router.post('/', (req, res, next) => {
  
  id_counter += 1;

  let newMessage = {
      id: id_counter,
      name: req.body.name,
      time: req.body.time,
      message: req.body.message
  }

  messages.push(newMessage)

  res.status(200).json(messages);

});

module.exports = router;

