const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
    Name :{
        type: String
    },
    Trainner :{
        type : String
    },
    FromDate :{
        type : Date,
        default : Date.now
    },
    ToDate :{
        type : Date,
        default : Date.now
    },
    Room_ID : {
        type : mongoose.Schema.Types.ObjectId,
    },
    Class: [
        {
            Class_ID : {
                type : String
            },
            Name : {
                type : String
            },
            Trainner : {
                type : String
            },
            Date : {
                type : Date,
                default : Date.now
            },
            From_hours : {
                type : Date
            },
            To_hours : {
                type : Date
            },
            Room_ID : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'Building'
            },
            Code : {
                type : String
            }
        }
    ],
    Comment : [
        {
            Comment_ID :{
                type : String
            },
            Username : {
                type : String
            },
            Question_1 : {
                type : String
            },
            Question_2 : {
                type : String
            },
            Question_3 : {
                type : String
            },
            Question_4 : {
                type : String
            },
            Question_5_1 : {
                type : Number
            },
            Question_5_2 : {
                type : Number
            },
            Question_5_3 : {
                type : Number
            },
            Question_5_4 : {
                type : Number
            },
        }
    ],
    Attendance: [
        {
            Attendance_ID : {
                type : String
            },
            Username : {
                type : String
            },
            Check_in : {
                type : Date
            },
            Check_out : {
                type : Date
            },
            Date : {
                type : Date,
                default : Date.now
            },
            Class_ID : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        }
    ]
});
module.exports = Couser = moongoose.model('Course' , courseSchema);