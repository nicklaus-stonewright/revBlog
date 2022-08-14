const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const config = require("config");
const axios = require('axios');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
app.use(cors())
app.use(express.json())
app.use(helmet());

const token = "AstraCS:wXNSJHxOkfJYhxzsZsxuOEwY:19b1a75a425f9b594242867d83da4fb2c448d27264f50b3209ec6b7346f652ba";
const url = "https://74709012-d3cd-49d5-9f26-1ae491ae2ca2-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/blogposts/collections/posts";

app.use(morgan("dev"));

app.get('/blogposts', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
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



// ****** work with a single post  *****

app.get('/blogposts/:key', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}/${req.params.key}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.put('/blogposts/:key', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(`${url}/${req.params.key}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }


})


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

// ****** Get News *****
const newsToken = "97828163f98651e2f739f2fd24abb798";
const newsURL = "http://api.mediastack.com/v1";
const newsLanguagesFilter = "&languages=en";
const newsCountryFilter = "&countries=gb";
const newsCategoryFilter = "&categories=business";
const newsLimitFilter = "&limit=3";


app.get('/news', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
        }
    }
    try {
        const response = await axios(`${newsURL}/news?access_key=${newsToken}${newsLanguagesFilter || ""}${newsCountryFilter || ""}${newsCategoryFilter || ""}${newsLimitFilter || ""}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})



// ****** Get Surveys *****

const url_surveys_questionBank = "https://74709012-d3cd-49d5-9f26-1ae491ae2ca2-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/surveys/collections/questionBank";


app.get('/surveyquestions', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url_surveys_questionBank}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})



// app.post('/surveyquestions', async (req, res) => {
//     const formData = req.body.formData

//     const options = {
//         method: 'POST',
//         headers: {
//             Accepts: 'application/json',
//             'X-Cassandra-Token': token,
//             'Content-Type': 'application/json'
//         },
//         data: formData
//     }

//     try {
//         const response = await axios(url_surveys_questionBank, options)
//         res.status(200).json(response.data)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ message: err })
//     }


// })


const url_surveys_questionAnswers = "https://74709012-d3cd-49d5-9f26-1ae491ae2ca2-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/surveys/collections/questionAnswers"


app.get('/surveyanswers', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url_surveys_questionAnswers}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})




app.post('/surveyanswers', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData,
    }

    try {
        const response = await axios(url_surveys_questionAnswers, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }


})
