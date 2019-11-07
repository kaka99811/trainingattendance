const moongoose = require ('mongoose');
const Schema = moongoose.Schema;
const buildingSchema = new Schema({
    Name : {
        type : String
    },
    Rooms: [
        {
            Room_ID : {
                type : String
            },
            Name : {
                type : String
            },
            Wifi : {
                type : String
            }
        }
    ]
});
module.exports = Building = moongoose.model('Building' , buildingSchema);