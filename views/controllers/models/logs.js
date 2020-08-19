const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logsSchema = new Schema (
    {
        title: { type: String },
        entry: { type: String },
        shipIsBroken: { type: Boolean }
    },
    {timestamps: true}
);

const Logs = mongoose.model('Log', logsSchema);

module.exports = Logs;
