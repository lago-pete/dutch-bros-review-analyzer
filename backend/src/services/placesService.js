const axios = require('axios')


const searchLocations = async (query) =>{
    try{
        const response = await axios.post(
            'https://places.googleapis.com/v1/places:searchText',
            {textQuery: query},
            {headers:{
                'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY,
                'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
                'Content-Type': 'application/json' 
            }
        }
        )
        return response.data
    }catch (error){
        console.error("Retrieving Google Api Error:", error)
        throw error
    }
}

module.exports = {searchLocations}