import mongoose, { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';


interface ICompany extends mongoose.Document {
  _id: ObjectID;
  name: string;
  unity: Array<ObjectID>;
};

const CompanySchema = new Schema ({

  _id: {
    type: ObjectID,
    required: true
  },
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
