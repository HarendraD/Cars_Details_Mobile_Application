const express = require("express");
const router = express.Router();
const Cars = require("../model/cars.models")

const app = express();
app.use(express.json())

router.get("/", async (req, resp) => {
  try {
    const cars = await Cars.find();
    resp.json(cars);
  } catch (err) {
    resp.json({ "message : ": err })
  }
})

router.get("/:regNumber", async (req, resp) => {
  try {
    const cars = await Cars.findById(req.params.regNumber);
    resp.json(cars);
  } catch (err) {
    resp.json({ "message : ": err })
  }
})

router.post("/save", async (req, resp) => {
  console.log("awaaaaa")
  const cars = new Cars({
    regNumber: req.body.regNumber,
    brand: req.body.brand,
    date: req.body.date,
    location: req.body.location,
    image: req.body.image,
    price: req.body.price
  });
  try {

    const response = await cars.save();
    resp.json(response);
    console.log(response)
  } catch (err) {
    resp.json({ "message : ": err })

  }
})

router.delete('/', async (req, resp) => {
  console.log("deleted")
  try {
    let arr = await Cars.find();
    let response = undefined;
    arr.forEach(async (e) => {
      console.log("deleted" + req.query.regNumber + "/" + e.regNumber)
      if (e.regNumber === req.query.regNumber) {
        console.log("deleted" + req.query.regNumber + "/" + e.regNumber)
        response = await e.remove();
      }
    });
    resp.json(response);
  } catch (err) {
    resp.json({ "message : ": err });
  }
});

module.exports = router;