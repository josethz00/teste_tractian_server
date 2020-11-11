import mongoose, { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';


interface ICompany extends mongoose.Document {
  name: string;
  unity?: Array<ObjectID>;
};

const CompanySchema = new Schema ({

  name: {
    type: String,
    required: true
  },
  unity: [{
    type: ObjectID,
    ref: 'Unity'
  }]

});

export const Company = mongoose.model<ICompany>('Company', CompanySchema);
