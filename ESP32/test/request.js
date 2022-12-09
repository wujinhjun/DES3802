const axios = require('axios');

const url = "http://192.168.137.166/test2"

// axios.get(url)
//     .then((res) => {
//         console.log(res.data);
//     })

axios.post(url, {
    command: "GO",
}).then((res) => {
    console.log(res.data);
})