import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // In Object, Order of data doesnot matter but in Array order matter
    description: {
        required: true,
        type: String
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
        // images, videos, pdf etc like data stored in buffer format
        // it is not good to store like this data in database cause this make heavy
        // type: Buffer,
        // Another way all data store in other cloud database or in our system
        // and here provides url
        // type will declare String
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        default: 0,
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);