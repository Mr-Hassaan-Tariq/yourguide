var multer = require('multer');
var path = require('path');
const time = require('../helper/time');
let index = 0;

var storage = multer.diskStorage({


        destination: function (req, file, cb,res) {
            cb(null, 'uploads/experience')
        },
        filename: function (req, file, cb, res) {
            if (req.files["images"].length <= 2) {
                if (req.user.auth) {
                    const filename = time.getTime().toString() + "_" + (index++) + "." + file.originalname.split('.')[1];
                    if (!req.fileNames) {
                        req.fileNames = [];
                    }
                    req.fileNames.push(filename);
                    cb(null, filename);
                }
            } else {
                res.status(400).send("Maximum number of files exceeded"); // Send a response when the maximum file count is exceeded
            }
        }

    
});

var upload = multer({ storage: storage });

module.exports = upload;
