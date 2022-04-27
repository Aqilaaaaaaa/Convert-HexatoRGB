const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("hello")
})

app.listen(port, () => {
    console.log(`Read port ${port}`)
})

function convertHex(hexCode, opacity = 1) {
    var hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0, 2), 16),
        g = parseInt(hex.substring(2, 4), 16),
        b = parseInt(hex.substring(4, 6), 16);

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;
    }

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}


app.get('/api/:id', function (req, res) {
    //res.send(req.params.id)
    let color = convertHex(req.params.id)
    res.json({
        color
    })
})