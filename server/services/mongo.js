import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URL = process.env.MONGO_URL


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})
mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongoDisConnect() {
    await mongoose.disconnect()
}

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

export default mongoConnect