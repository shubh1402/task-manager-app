const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()

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
fs.readFileSync(
filePath,
"utf8"
)
)

res.json(tasks)

})

router.post("/", (req, res) => {

const tasks =
JSON.parse(
fs.readFileSync(
filePath,
"utf8"
)
)

const newTask = {

id: Date.now(),

title:
req.body.title,

description:
req.body.description,

completed: false

}

tasks.push(newTask)

fs.writeFileSync(

filePath,

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
fs.readFileSync(
filePath,
"utf8"
)
)

tasks =
tasks.map(
task =>

task.id ==
req.params.id

?

{
...task,
...req.body
}

:

task

)

fs.writeFileSync(

filePath,

JSON.stringify(
tasks,
null,
2
)

)

res.json({
message:
"updated"
})

})

router.delete("/:id", (req, res) => {

let tasks =
JSON.parse(
fs.readFileSync(
filePath,
"utf8"
)
)

tasks =
tasks.filter(

task =>

task.id !=
req.params.id

)

fs.writeFileSync(

filePath,

JSON.stringify(
tasks,
null,
2
)

)

res.json({
message:
"deleted"
})

})

module.exports =
router