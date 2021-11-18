const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cors());
require("./connection/dbCon");
const DataModel = require("./schema/model");
const QR_Code_Model = require("./schema/QR_Code_Setting");
const SecurityKeyModel = require ('./schema/Security_Key_Setting');
const RegistrationKeyModel = require ('./schema/Registration_No_Seeting.js');
const NoteSerialKeyModel = require('./schema/NoteSerialNo_Setting');
const IssueDateModel = require('./schema/Issue_Date_Setting')
//Create New File
app.post("/createuser", async (req, res) => {
  const {
    RegistrationNo,
    IntinitationLetterSerial,
    BookingFormSerial,
    CreatedBy,
    Detail,
  } = req.body;
  const obj = new DataModel({
    RegistrationNo,
    IntinitationLetterSerial,
    BookingFormSerial,
    CreatedBy,

    Status: true,
    Detail,
  });
  const UserCreated = await obj.save();
  try {
    UserCreated ? res.send(true) : res.send(false);
  } catch (err) {
    res.send(err);
  }
});

//Load All User's Files
app.get("/loaduser", async (req, res) => {
  const AllUser = await DataModel.find({ Status: true });
  try {
    AllUser ? res.send(AllUser) : res.send(false);
  } catch {
    res.send();
  }
});

app.put(`/deleteuser/:id`, async (req, res) => {
  const DeleteUser = await DataModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        Status: false,
      },
    }
  );

  try {
    DeleteUser ? res.send(true) : res.send(false);
  } catch {
    res.send();
  }
});

//Load Specific User's File For Update
app.get(`/loaduser/:id`, async (req, res) => {
  const UserData = await DataModel.findOne({ _id: req.params.id });
  try {
    UserData ? res.send(UserData) : res.send(false);
  } catch {
    res.send();
  }
});

app.put(`/updateuser/:id`, async (req, res) => {
  const {
    RegistrationNo,
    IntinitationLetterSerial,
    BookingFormSerial,
    Detail,
  } = req.body;
  const UpdatedUser = await DataModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        RegistrationNo,
        IntinitationLetterSerial,
        BookingFormSerial,
        Detail,
      },
    }
  );

  try {
    UpdatedUser ? res.send(true) : res.send(false);
  } catch {
    console.log("Something wrong");
  }
});


//Page Setting Alignment Attributes Load
app.get(`/loadpagesetting`, async (req, res) => {
  var size=0;
  const PageSettingLoaded = await QR_Code_Model.find();
  PageSettingLoaded.map(()=>{
    size =+1;
  })

  if(size>0) {
      res.send(PageSettingLoaded) 
  } else {
    res.send(false);
  }
});


//Change Values for fixing page Alignment (For QRCode)
app.post(`/pagesetting`, async (req, res) => {

  var size=0;
  const { LeftMargin, TopMargin} = req.body;
  const PageSettingExist=  await  QR_Code_Model.find();
  PageSettingExist.map(()=>{
    size =+1;
  })

  if(size>0){
            const UpdatePageSetting = await QR_Code_Model.updateMany({
              $set: {
                LeftMargin: LeftMargin,
                TopMargin: TopMargin
              }
            })

            try {
              UpdatePageSetting ? res.send(true) : res.send(false);
            } catch {
              console.log("Something wrong");
            }
      }
      
    else{
        const obj = new QR_Code_Model({
                      LeftMargin, TopMargin
                    });
                    
                    const UpdatePageSetting = obj.save();
                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch (err) {
                      res.send(err);
                    }
        }

  
});


//Change Values for fixing page Alignment (For Issue Data Setting)
app.post(`/issuedatesetting`, async (req, res) => {

  var size=0;
  const { LeftMargin, TopMargin} = req.body;
  const PageSettingExist=  await  IssueDateModel.find();
  PageSettingExist.map(()=>{
    size =+1;
  })

  if(size>0){
            const UpdatePageSetting = await IssueDateModel.updateMany({
              $set: {
                LeftMargin: LeftMargin,
                TopMargin: TopMargin
              }
            })

            try {
              UpdatePageSetting ? res.send(true) : res.send(false);
            } catch {
              console.log("Something wrong");
            }
      }
      
    else{
        const obj = new IssueDateModel({
                      LeftMargin, TopMargin
                    });
                    
                    const UpdatePageSetting = obj.save();
                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch (err) {
                      res.send(err);
                    }
        }

  
});


//Change Values for fixing page Alignment (For NoteSerialNo)
app.post(`/noteserialnosetting`, async (req, res) => {

  var size=0;
  const { LeftMargin, TopMargin} = req.body;
  const PageSettingExist=  await  NoteSerialKeyModel.find();
  PageSettingExist.map(()=>{
    size =+1;
  })

  if(size>0){
            const UpdatePageSetting = await NoteSerialKeyModel.updateMany({
              $set: {
                LeftMargin: LeftMargin,
                TopMargin: TopMargin
              }
            })

            try {
              UpdatePageSetting ? res.send(true) : res.send(false);
            } catch {
              console.log("Something wrong");
            }
      }
      
    else{
        const obj = new NoteSerialKeyModel({
                      LeftMargin, TopMargin
                    });
                    
                    const UpdatePageSetting = obj.save();
                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch (err) {
                      res.send(err);
                    }
        }

  
});


//Change Values for fixing page Alignment (For Security Key)
app.post(`/securitykeysetting`, async (req, res) => {

  var size=0;
  const { LeftMargin, TopMargin} = req.body;
  const PageSettingExist=  await  SecurityKeyModel.find();
  PageSettingExist.map(()=>{
    size =+1;
  })

  if(size>0){
            const UpdatePageSetting = await SecurityKeyModel.updateMany({
              $set: {
                LeftMargin: LeftMargin,
                TopMargin: TopMargin
              }
            })

            try {
              UpdatePageSetting ? res.send(true) : res.send(false);
            } catch {
              console.log("Something wrong");
            }
      }
      
    else{
        const obj = new SecurityKeyModel({
                      LeftMargin, TopMargin
                    });
                    
                    const UpdatePageSetting = obj.save();
                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch (err) {
                      res.send(err);
                    }
        }

  
});


//Change Values for fixing page Alignment (For RegistrationNo)
app.post(`/registrationkeysetting`, async (req, res) => {

  var size=0;
  const { LeftMargin, TopMargin} = req.body;
  const PageSettingExist=  await  RegistrationKeyModel.find();
  PageSettingExist.map(()=>{
    size =+1;
  })

  if(size>0){
            const UpdatePageSetting = await RegistrationKeyModel.updateMany({
              $set: {
                LeftMargin: LeftMargin,
                TopMargin: TopMargin
              }
            })

            try {
              UpdatePageSetting ? res.send(true) : res.send(false);
            } catch {
              console.log("Something wrong");
            }
      }
      
    else{
        const obj = new RegistrationKeyModel({
                      LeftMargin, TopMargin
                    });
                    
                    const UpdatePageSetting = obj.save();
                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch (err) {
                      res.send(err);
                    }
        }

  
});




//Listen from Server
app.listen(port, console.log("Server is Running at port-4000"));
