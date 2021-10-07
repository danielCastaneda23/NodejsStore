const {PORT} = require('./config/globals')
const app = require('./server')
const {getConnection} = require('./dao/db/connection')


getConnection().then((message) => {
    console.log(message)
    app.listen(PORT, () => {
        console.log(`Server initilized on PORT ${PORT}`)
    })
}).catch(console.log)
