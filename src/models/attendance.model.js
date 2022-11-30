import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    user_id: String,
    checkin: String,
    checkout: String,
    Date: Date
})

const Attendance = mongoose.model('attendance', attendanceSchema); 
export default Attendance;