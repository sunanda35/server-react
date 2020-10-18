import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import bodyParse from 'body-parse'
import App from './src/app'

const app = express();
const PORT = process.env.PORT || 8000

app.use(bodyParse.json())
app.use(express.static('build'))

app.get('*', (req, res)=>{

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
        const html = `<html><head><head/><body><div id="root">${content}</div></body></html>`;




    res.send('This is my working app')
})

app.listen(PORT, ()=>{
    console.log(`app is running at port: ${PORT}`)
})