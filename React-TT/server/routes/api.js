const express = require("express");
const bcrypt = require("bcryptjs");
const sendMail = require("../mail");
const router = express.Router();
const UserAccount = require("../models/UserAccounts");
const imgModel = require("../models/UserAccounts");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const upload = multer();








router.get("/", (req, res) => {
  UserAccount.find({}).then((data) => {
    console.log("Data: ", data);
    res.json(data);
  });
  
});


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});



router.get("/user", (req, res) => {
  res.send(req.user);
});
 



router.post("/emailver", (req, res) => {
  const data = req.body;
  const token = jwt.sign({email: data.email}, 'ActivationKey123', {expiresIn: '20m'} );
  
  sendMail(data.email,token, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else { 
      res.json({ message: "verification successful!" });
    }
  }); 

  jwt.verify(data, "ActivationKey123", function (err, decodedToken) {
    if (err) {
      throw res.status(400).json({ error: "incorrect or expired link" });
    } else{
    data = decodedToken;
   }
  });
});






router.post("/upload", upload.single("file"), async function(req, res, next) {
  const {
    file,
    body: { name,username }
  } = req;

  const fileName = username + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../Client/src/uploads/${fileName}`)
  );

  res.send("File uploaded as " + fileName);
});







router.post("/register", (req, res, next) => {
  const data = req.body;

  UserAccount.findOne({ username: data.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Username already exists");
    if (!doc) {
      const HashPassword = await bcrypt.hash(data.password, 10);
      const newUserAccount = new UserAccount({
        username: data.username,
        password: HashPassword ,
      });


      if (data) {
        newUserAccount.save((error) => {
          if (error) {
            res.status(500).json({ msg: "internal server error" });
          } else {
            res.json({
              msg: "data has been received.",
            });
          }
          console.log(data);
        });
        
        
      }else{
          null
      }
    }
  });
});




router.post("/userpoints", (req, res) => {
  const data = req.body;
  UserAccount.findOne({ username: data.username }, async (err, doc) =>{
    if (err) throw err;
    if (doc) {
      doc.overwrite({points: data.points});
      await doc.save();
    } 
  })
});

module.exports = router;
