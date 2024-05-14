import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  company: String,
  workEmail: String,
  password: String,
});
