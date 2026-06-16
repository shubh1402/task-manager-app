const express = require("express")
const fs = require("fs")

const router = express.Router()

const fs = require("fs")
const path = require("path")

const filePath =
path.join(
__dirname,
"..",
"data",
"tasks.json"
)

router.get("/", (req, res) => {

const tasks =
JSON.parse(
fs.readFileSync(path)
)

res.json(tasks)

})
router.post("/", (req, res) => {

const tasks =
JSON.parse(
fs.readFileSync(path)
)

const newTask = {
id: Date.now(),
title: req.body.title,
description: req.body.description,
completed: false
}

tasks.push(newTask)

fs.writeFileSync(
path,
JSON.stringify(
tasks,
null,
2
)
)

res.json(newTask)

})
router.put("/:id", (req, res) => {

let tasks =
JSON.parse(
fs.readFileSync(path)
)

tasks = tasks.map(task =>

task.id == req.params.id
? {
...task,
...req.body
}
: task

)

fs.writeFileSync(
path,
JSON.stringify(
tasks,
null,
2
)
)

res.json({
message:"updated"
})

})
router.delete("/:id", (req, res) => {

let tasks =
JSON.parse(
fs.readFileSync(path)
)

tasks =
tasks.filter(
task =>
task.id != req.params.id
)

fs.writeFileSync(
path,
JSON.stringify(
tasks,
null,
2
)
)

res.json({
message:"deleted"
})

})
module.exports = router