import mongoose, { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';


interface IUnity extends mongoose.Document {
  _id: ObjectID;
  name: string;
  machines: Array<ObjectID>;
};

const UnitySchema = new Schema ({

  _id: {
    type: ObjectID,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  machines: [{
    type: ObjectID,
    ref: 'Machine'
  }]

});

export const Unity = mongoose.model<IUnity>('Unity', UnitySchema);
