import { model, Schema } from 'mongoose';
import { AdminModel, TAdmin, TAdminName } from './admin.interface';
import { BloodGroup, Gender } from './admin.constant';

const adminNameSchema = new Schema<TAdminName>({
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});
const adminSchema = new Schema<TAdmin, AdminModel>(
  {
    id: {
      type: String,
      required: [true, 'Faculty Id is Required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: adminNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: Gender,
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is Required'],
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is Required'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact No is Required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency Contact no is Required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: BloodGroup,
        message: '{VALUE} is not a valid blood group',
      },
      required: [true, 'Blood Group is Required'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present  Address is Required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent Address is Required'],
    },
    profileImg: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
// virtual
adminSchema.virtual('fullName').get(function () {
  return this?.name?.firstName + this?.name?.middleName + this?.name?.lastName;
});

// query middleware
adminSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

adminSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

adminSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
adminSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Faculty.findOne({ id });
  return existingUser;
};
export const Faculty = model<TAdmin, AdminModel>('Faculty', adminSchema);
