import {

Button,

Modal,

Box,

TextField,

Typography

}

from "@mui/material"

import {
useState
}
from "react"



export default function TaskForm({

title,

setTitle,

description,

setDescription,

addTask

}) {

const [

open,

setOpen

]

=

useState(
false
)



const submit =
async()=>{

await addTask()

setOpen(
false
)

}



return (

<>

<Button

variant=
"contained"

onClick={
()=>
setOpen(
true
)
}

>

Add Task

</Button>



<Modal

open={
open
}

onClose={
()=>
setOpen(
false
)
}

>

<Box

sx={{

position:
"absolute",

top:
"50%",

left:
"50%",

transform:

"translate(-50%,-50%)",

width:
500,

bgcolor:
"#1f1f1f",

color:
"white",

borderRadius:
3,

p:4

}}

>

<Typography

variant=
"h5"

>

Create Task

</Typography>


<TextField

label=
"Title"

fullWidth

margin=
"normal"

value={
title
}

onChange={
e=>
setTitle(
e.target.value
)
}

sx={{

input:{
color:
"white"
},

label:{
color:
"#bbb"
}

}}

>


</TextField>



<TextField

label=
"Description"

fullWidth

margin=
"normal"

value={
description
}

onChange={
e=>
setDescription(
e.target.value
)
}

sx={{

input:{
color:
"white"
},

label:{
color:
"#bbb"
}

}}

>

</TextField>


<Button

variant=
"contained"

sx={{
mt:2
}}

onClick={
submit
}

>

Save

</Button>

</Box>

</Modal>

</>

)

}