const http = require('http')
const os = require('os')
const helloUser = require('./personalmodule.js')

const port = 3002

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    const output = helloUser(os.userInfo().username)
    res.write(output)

    res.end()
}).listen(port, () => {
    console.log(`Server is running on port ${port}`)
})