import mongoose, { Schema } from 'mongoose';


interface ICompany extends mongoose.Document {
  name: string;
  unity?: Array<mongoose.Schema.Types.ObjectId>;
};

const CompanySchema = new Schema ({

  name: {
    type: String,
    required: true
  },
  unity: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unity'
  }]

});

export const Company = mongoose.model<ICompany>('Company', CompanySchema, 'Company');
