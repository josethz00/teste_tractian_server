import mongoose, { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';


interface IUnity extends mongoose.Document {
  name: string;
  machines?: Array<ObjectID>;
};

const UnitySchema = new Schema ({

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
