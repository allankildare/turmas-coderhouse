import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const studentSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'non-binary', 'not-specifed'],
        required: true,
    },
    grade: {
        type: Number,
        required: true
    },
    group: {
        type: String,
        enum: ['1A', '1B'],
        default: '1A',
    },
})

studentSchema.plugin(mongoosePaginate)

const studentModel = mongoose.model('students', studentSchema)

export default studentModel