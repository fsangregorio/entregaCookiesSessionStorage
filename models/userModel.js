
import mongoosePaginate from "mongoose-paginate-v2";
import { Schema, model } from "mongoose";


const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
});

userSchema.plugin(mongoosePaginate);

const User = model("User", userSchema);

export { User };
