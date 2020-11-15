import mongoose, { Schema } from 'mongoose';


interface IMachine extends mongoose.Document {
  name: string;
  description: string;
  image_url: string;
  machine_model: string;
  health_score: number;
  unity: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  status: string;
};

const MachineSchema = new Schema ({

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unity',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    default: 'Disponível'
  }

});

export const Machine = mongoose.model<IMachine>('Machine', MachineSchema, 'Machine');
