import mongoose from 'mongoose'
const Schema = mongoose.Schema

const sprintSchema = new Schema({
  name: { type: String, required: true }
})

const Sprint = mongoose.model('Sprint', sprintSchema)

export default Sprint
