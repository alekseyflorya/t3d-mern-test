import mongoose from 'mongoose';

const tableItemSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    nickname: String,
    date: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const TableItem = mongoose.model('TableItem', tableItemSchema);

export default TableItem;