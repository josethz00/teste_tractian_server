import mongoose, { Schema } from 'mongoose';


interface IUser extends mongoose.Document {
  username: string;
};

const UserSchema = new Schema ({

  username: {
    type: String,
    required: true
  }

});

export const User = mongoose.model<IUser>('User', UserSchema);
