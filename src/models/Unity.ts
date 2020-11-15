import mongoose, { Schema } from 'mongoose';


interface IUnity extends mongoose.Document {
  name: string;
  machines?: Array<mongoose.Schema.Types.ObjectId>;
};

const UnitySchema = new Schema ({

  name: {
    type: String,
    required: true
  },
  machines: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unity'
  }]

});

export const Unity = mongoose.model<IUnity>('Unity', UnitySchema, 'Unity');
