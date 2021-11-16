const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cors());
require("./connection/dbCon");
const DataModel = require("./schema/model");

//Add user

app.post("/createuser", async (req, res) => {
  const {
    RegistrationNo,
    IntinitationLetterSerial,
    BookingFormSerial,
    CreatedBy,
  } = req.body;
  const obj = new DataModel({
    RegistrationNo,
    IntinitationLetterSerial,
    BookingFormSerial,
    CreatedBy,
    Status: true,
  });
  const UserCreated = await obj.save();
  try {
    UserCreated ? res.send(true) : res.send(false);
  } catch (err) {
    res.send(err);
  }
});
app.get("/loaduser", async (req, res) => {
  const AllUser = await DataModel.find({Status: true});
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

//Listen from Server
app.listen(port, console.log("Server is Running at port-4000"));
