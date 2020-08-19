const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crewSchema = new Schema (
    {
        name: { type: String, required: true },
        rank: { type: String, required: true },
        img: { type: String, required: true },
        homePlanet: { type: String, required: true },
        engineeringAccess: { type: Boolean }
    },
    {timestamps: true}
);

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;