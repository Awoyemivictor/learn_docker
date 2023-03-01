const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            "id":"1",
            "title":"Book Review: The Lagos & The Nightingale......."
        },
        {
            "id":"2",
            "title":"Game Review: Du Dupe Diamond.... WHO ARE YOU?"
        },
        {
            "id":"3",
            "title":"Show Review: Alice in Borderland"
        }
    ])
})

app.listen(4000, () => {
    console.log('listening for requests on port 4000....')
})