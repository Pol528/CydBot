const mongoose = require('mongoose')

const WarnSchema = new mongoose.Schema({
    guildID: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    warnings: {
        type: [Object],
        required: true
    }
})
module.exports = mongoose.model('warnings', WarnSchema)