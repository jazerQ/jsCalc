import { Request, Response } from 'express';
const path = require('path')
const express = require('express') 
const port = process.env.PORT || 3000;
const app = express()
app.use(express.static(path.resolve(__dirname,'views')))
app.get('/',(req: Request, res: Response) => {
	res.sendFile("index")
})


app.listen(port, () =>{
	console.log(`serv start at ${port}`)
})