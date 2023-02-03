const express = require("express");
const router = new express.Router()
const Student = require("../models/students")

router.post("/students", async (req, res) => {
   try {
      const user = new Student(req.body)
      const userDetails = await user.save()
      res.status(201).send(userDetails)
   } catch (e) {
      res.status(400).send(e)

   }


})

router.get("/students", async (req, res) => {

   try {
      const userDetails = await Student.find()
      res.status(200).send(userDetails)
   } catch (e) {
      res.status(400).send(e)
   }

})
router.get("/students/:id", async (req, res) => {
   try {
      const get_id = req.params.id
      const id = await Student.findById(get_id)
      if (!id) {
         res.status(404).send()
      }
      else {
         res.status(200).send(id)
      }
   } catch (e) {
      res.status(400).send(e)
   }
})

router.patch("/students/:id", async (req, res) => {
   try {
      const get_id = req.params.id
      const id = await Student.findByIdAndUpdate(get_id, req.body, {
         new: true
      })
      if (!id) {
         res.status(404).send()
      }
      else {
         res.status(200).send(id)
      }
   } catch (e) {
      res.status(400).send(e)
   }
})


router.delete("/students/:id", async (req, res) => {
   try {
      const get_id = req.params.id
      const id = await Student.findByIdAndDelete(get_id, {
         new: true
      })
      if (!id) {
         res.status(404).send()
      }
      else {
         res.status(200).send(id)
      }
   } catch (e) {
      res.status(400).send(e)
   }
})

module.exports = router