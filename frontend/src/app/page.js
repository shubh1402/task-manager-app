"use client"

import { useEffect, useState } from "react"

import {
Snackbar,
Alert
}
from "@mui/material"
import api from "../services/api"

import TaskForm
from "../components/TaskForm"

import TaskList
from "../components/TaskList"


export default function Home() {

const [tasks,
setTasks] =
useState([])

const [title,
setTitle] =
useState("")

const [description,
setDescription] =
useState("")
const [

open,

setOpen

] =

useState(
false
)

useEffect(() => {

loadTasks()

}, [])


const loadTasks =
async () => {

const res =
await api.get(
"/tasks"
)

setTasks(
res.data
)

}


const addTask =
async () => {

if (
!title
||
!description
)
return

await api.post(
"/tasks",
{
title,
description
}
)

setTitle("")
setDescription("")

loadTasks()
setOpen(
true
)
}


const toggleTask =
async (
id,
completed
) => {

await api.put(
`/tasks/${id}`,
{
completed:
!completed
}
)

loadTasks()

}


const deleteTask =
async (
id
) => {

await api.delete(
`/tasks/${id}`
)

loadTasks()

}


return (

<div

style={{

padding:
"40px",

maxWidth:
"800px",

margin:
"auto"

}}

>

<h1>

Task Manager

</h1>


<TaskForm

title={
title
}

setTitle={
setTitle
}

description={
description
}

setDescription={
setDescription
}

addTask={
addTask
}

/>


<TaskList

tasks={
tasks
}

toggleTask={
toggleTask
}

deleteTask={
deleteTask
}

/>
<Snackbar

open={
open
}

autoHideDuration={
2000
}

onClose={
()=>
setOpen(
false
)
}

>

<Alert

severity=
"success"

>

Task saved

</Alert>

</Snackbar>
</div>

)

}