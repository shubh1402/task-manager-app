import {

Card,
CardContent,

Typography,

Button,

Chip,

Stack

}

from "@mui/material"



export default function TaskList({

tasks,

toggleTask,

deleteTask

}) {

return (

<>

{

tasks.map(

(task)=>(

<Card

key={
task.id
}

sx={{

mt:3,

background:

task.completed

?

"#12391a"

:

"#1b1b1b",

color:

"white",

borderRadius:
3

}}

>

<CardContent>

<Typography

variant="h5"

sx={{

textDecoration:

task.completed

?

"line-through"

:

"none"

}}

>

{task.title}

</Typography>


<Typography

sx={{
mt:1
}}

>

{task.description}

</Typography>


<Chip

label={

task.completed

?

"Done"

:

"Pending"

}

color={

task.completed

?

"success"

:

"warning"

}

sx={{
mt:2
}}

/>


<Stack

direction="row"

spacing={2}

sx={{
mt:3
}}

>

<Button

variant="contained"

color="success"

onClick={
()=>

toggleTask(
task.id,
task.completed
)

}

>

{

task.completed

?

"Undo"

:

"Complete"

}

</Button>


<Button

variant="contained"

color="error"

onClick={
()=>

deleteTask(
task.id
)

}

>

Delete

</Button>

</Stack>

</CardContent>

</Card>

)

)

}

</>

)

}