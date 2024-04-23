var multer = require('multer');
var path = require('path');
const time = require('../helper/time');

var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/experience/')
    },
    filename: function (req, file, cb) {
        if (req.user.auth) 
        {

            let unixtime  = time.getTime().toString();
            cb(null,file.originalname.split('.')[0]+"-"+unixtime+"."+file.originalname.split('.')[1] ) //Appending extension
            req.user.imgUrl.push(`experience/${file.originalname.split('.')[0]+"-"+unixtime+"."+file.originalname.split('.')[1]}`) 
            // console.log('file',req.user)
        }
    }
})



var upload = multer({ storage: storage });


module.exports = upload;