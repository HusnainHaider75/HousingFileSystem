const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cors());
require("./connection/dbCon");
const DataModel = require("./schema/model");
const PageSetModel = require("./schema/pageSetModel");
//Add user

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

app.put(`/pagesetting`, (req, res) => {

  const { LeftMargin, RightMargin} = req.body;
  console.log(req.body)
  PageSetModel.find((error, data)=>{
    if (data) {
                    
                    const UpdatePageSetting = PageSetModel.updateMany({
                      $set: {
                        LeftMargin: LeftMargin,
                        RightMargin: RightMargin
                      }
                    });

                    try {
                      UpdatePageSetting ? res.send(true) : res.send(false);
                    } catch {
                      console.log("Something wrong");
                    }
    } 
    // else 
    // {
                   
    //                 const obj = new PageSetModel({
    //                   LeftMargin, RightMargin
    //                 });
                    
    //                 const UpdatePageSetting = obj.save();
    //                 try {
    //                   UpdatePageSetting ? res.send(true) : res.send(false);
    //                 } catch (err) {
    //                   res.send(err);
    //                 }
    // }

  });
});

//Listen from Server
app.listen(port, console.log("Server is Running at port-4000"));
