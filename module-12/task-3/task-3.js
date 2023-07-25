const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3002

const filePath = path.join(__dirname, 'data.txt')

function writeToTextFile(data) {
    fs.writeFile(filePath, data)
}

function readFromTextFile(callback) {
    fs.readFile(filePath, 'utf8', (data) => {
        callback(data)
    })
}

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        const query = new URLSearchParams(req.url.split('?')[1])
        const textToWrite = query.get('text')
        
        if (textToWrite) {
            writeToTextFile(textToWrite)
        }

        readFromTextFile((data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })

            res.write(`<h1>Inside the file:</h1><p>${data}</p>`)

            res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})