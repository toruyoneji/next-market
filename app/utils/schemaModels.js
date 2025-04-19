import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

export const ItemModel = mongoose.model.Item || mongoose.model("items", ItemSchema);
export const UserModel = mongoose.model.User || mongoose.model("users", UserSchema);