import mongoose from "mongoose";

// it helps us to define structure of array
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        // structure define
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        // enum means choices
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
},{timestamps: true})

export const Order = mongoose.model("Order", orderSchema);