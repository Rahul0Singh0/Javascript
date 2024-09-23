import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean
        // another way to define fields by giving info in an object 
        username: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true
        },
        password: {
            type: String, 
            // we can also pass custom messages
            // required: [true, "password is required!"], 
            required: true
        }
    },{timestamps: true}
); // Schema object take an object

export const User = mongoose.model("User", userSchema);

/**
 * 
 * Data model Name converted to plural form and lowercase in database(mongodb)
 * example : "User" => "users", "Todo" => "todos"
 * 
 */