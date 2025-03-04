const mongoose = require("mongoose")
const dbUrl = "mongodb+srv://kaushalkrkr:kaushalhero@cluster0.tz6lx.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = async (parms) => {
    try {
        const conn = await mongoose.connect(dbUrl)
        console.log(`MongoDb connected ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDb connection Error : ", error)
    }
}

module.exports = { connectDB }