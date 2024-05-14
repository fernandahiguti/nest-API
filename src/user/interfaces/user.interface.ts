import { Document } from 'mongoose';

export interface User extends Document {
  firstName: string;
  lastName: string;
  jobTitle?: string;
  company: string;
  workEmail: string;
  password: string;
}
