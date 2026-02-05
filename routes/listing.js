const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");

// ✅ Validation Middleware
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.details[0].message);
    } else {
        next();
    }
};

router.get("/", isLoggedIn,validateListing,wrapAsync(async (req, res) => {
    const search = req.query.search || ""; 
    let query = {};

    if (search) {
        query = { title: { $regex: search, $options: "i" } };
    }

    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { allListings, search });
}));

module.exports = router;
