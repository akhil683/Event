import { model, models, Schema } from "mongoose";

//models: contain all the models that have been registered with mongoose

//Defines structure of the "User" document in the MongoDB collection
const UserSchema = new Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});
// This line checks if a User model has already been registered (in models.User). If it has, it uses the existing model. If not, it creates a new model named "User" based on UserSchema.
const User = models.User || model("User", UserSchema);

export default User;
