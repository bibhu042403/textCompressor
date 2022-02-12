const express = require("express");
//const path = require("path");
const connect = require("./connectToDatabase");
const app = express();
const User = require("./schema");

app.get("/", async (req, res) => {
  //return res.sendFile(path.join(__dirname, "/index5.html"));
  //const body = req.query;

  const { first_name, last_name, email, number } = req.query;
  const newUser = new User({
    first_name: first_name,
    Sec_name: last_name,
    Email: email,
    phone_No: number,
  });
  await newUser.save();
  return res.json(true);
});

app.get("/get-data", async (req, res) => {
  try {
    const userList = await User.find();
    return res.json(userList);
  } catch (err) {
    console.error(err);
  }
});

app.listen(4400, () => {
  console.log("Server started! ");
  connect();
});
