const express = require("express");
const router = express.Router();
const { searchLocations, getLocationReviews } = require("../services/placesService");
const pool = require("../db/pool");

router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const results = await searchLocations(query);
    res.json(results);
  } catch (error) {
    console.error("The error is:", error);
    res.status(500).json({ error: "Failed to search DB" });
  }
});

router.post("/", async (req, res) => {
  try {
    const address = req.body.address;
    const google_place_id = req.body.google_place_id;
    const name = req.body.name;

    const result = await pool.query(
      "SELECT * FROM locations WHERE google_place_id = $1",
      [google_place_id],
    );

    if (result.rows.length > 0) {
      return res.status(200).json(result.rows[0]);
    }

    const newLocation = await pool.query(
      "INSERT INTO locations (address, google_place_id, name) VALUES ($1, $2, $3) RETURNING *",
      [address, google_place_id, name],
    );

    return res.status(201).json(newLocation.rows[0]);
  } catch (error) {
    console.error("Error is: ", error);
    return res.status(500).json({ error: "failed to load location." });
  }
});



router.get("/:id/reviews", async(req, res) =>{
  try{
    const id = req.params.id
    const result = await pool.query("SELECT google_place_id FROM locations WHERE id = $1 ", [id])
    if(result.rows.length!=0){
      const google_result = await getLocationReviews(result.rows[0].google_place_id)
      return res.status(200).json(google_result)
    }
  }catch(error){
    console.error("This is the error:", error)
    return res.status(404).json({error:"Location was not found"})
  }
})

module.exports = router;
