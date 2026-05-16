const express = require('express');
const router = express.Router();
const axios = require('axios');

const CLIENT_ID = '02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea';

router.get('/policy/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api-v2.soundcloud.com/tracks/${req.params.id}`,
            {
                params: {
                    client_id: CLIENT_ID
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0'
                }
            }
        );

        res.json({
            policy: response.data.policy
        });

    } catch (err) {
        console.error(err.response?.data || err.message);

        res.status(500).json({
            error: err.response?.data || err.message
        });
    }
});

router.get('/stream/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api-v2.soundcloud.com/tracks/${req.params.id}/streams`,
            {
                params: {
                    client_id: CLIENT_ID
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0'
                }
            }
        );

        res.json(response.data);

    } catch (err) {
        console.error(err.response?.data || err.message);

        res.status(500).json({
            error: err.response?.data || err.message
        });
    }
});

module.exports = router;
