const http = require('http')
const os = require('os')
const path = require('path')

const port = 3001

http.createServer().on('request', (req, res) => {

    res.write('<h1>System information</h1>')

    res.write(`<p>Username: ${os.userInfo().username}</p>`)

    res.write(`<p>OS type: ${os.type()}</p>`)

    res.write(`<p>Work time: ${Math.floor(os.uptime() / 60)}</p>`)

    res.write(`<p>Directory: ${process.cwd()}</p>`)

    res.write(`<p>File name: ${path.basename(__filename)}</p>`)

    res.end()
}).listen(port, () => {
    console.log(`Server is running on port ${port}`)
})