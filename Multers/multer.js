var multer = require('multer');
var path = require('path');
const time = require('../helper/time');

var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let utxTime=  '';
        if (req.user.auth) 
        {
            utxTime = time.getTime().toString();
            cb(null,utxTime+"."+file.originalname.split('.')[1] ) //Appending extension
            req.user.imgUrl = utxTime+"."+file.originalname.split('.')[1] 
        }
    }
})



var upload = multer({ storage: storage });


module.exports = upload;