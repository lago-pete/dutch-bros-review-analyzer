const express = require('express')
const router = express.Router()
const {searchLocations} = require('../services/placesService')


router.get('/search', async (req,res) => {
    try{    
        const query = req.query.q
        if(!query){
            return res.status(400).json({error:'Search query is required'})
        }
        const results = await searchLocations(query)
        res.json(results)
    }catch(error){
        console.error('The error is:', error)
        res.status(500).json({error:'Failed to search DB'})
    }
})


module.exports = router