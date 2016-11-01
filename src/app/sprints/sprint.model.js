import mongoose from 'mongoose'
const Schema = mongoose.Schema

const sprintSchema = new Schema({
  name: { type: String, required: true }
})

export default mongoose.model('Sprint', sprintSchema)
