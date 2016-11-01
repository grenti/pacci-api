import mongoose from 'mongoose'
const Schema = mongoose.Schema

const storySchema = new Schema({
  name: { type: String, required: true },
  votes: [{ type: Number, min: 1, max: 144 }],
  estimate: { type: Number, min: 1, max: 144 },
  completed: { type: Boolean, required: true, default: false }
})

export default mongoose.model('Story', storySchema)
