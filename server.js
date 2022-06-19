const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const app = express();

const token = "AstraCS:wXNSJHxOkfJYhxzsZsxuOEwY:19b1a75a425f9b594242867d83da4fb2c448d27264f50b3209ec6b7346f652ba";
const url = "https://74709012-d3cd-49d5-9f26-1ae491ae2ca2-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/blogposts/collections/posts";


app.get('/blogposts', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=3`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.post('/blogposts', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }


})


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

