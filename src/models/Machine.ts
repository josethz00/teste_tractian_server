import mongoose, { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';


interface IMachine extends mongoose.Document {
  _id: ObjectID;
  name: string;
  description: string;
  image_url: string;
  machine_model: string;
  health_score: number;
  unity: ObjectID;
  user: ObjectID;
  status: string;
};

const MachineSchema = new Schema ({

  _id: {
    type: ObjectID,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  machine_model: {
    type: String,
    required: true
  },
  health_score: {
    type: Number,
    required: true
  },
  unity: {
    type: ObjectID,
    ref: 'Unity',
    required: true
  },
  user: {
    type: ObjectID,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    default: 'Disponível'
  }

});

export const Machine = mongoose.model<IMachine>('Machine', MachineSchema);
