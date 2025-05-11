const mongoose = require('mongoose');

const BuyNowSchema = new mongoose.Schema({
  // User Information
  fullName: {type: String,
    required: [true, 'Full name is required'],
    trim: true
  },userName: {type: String,trim: true
  }, phoneNumber: {type: String,required: [true, 'Phone number is required']},  
  // Pickup Information
  pickupLocation: {type: String,required: [true, 'Pickup location is required'],trim: true
  },pickupDate: {type: Date,required: [true, 'Pickup date is required'],validate: {validator: function(v) {
        return v > Date.now();
      },message: 'Pickup date must be in the future'}
  },
  
  // Dropoff Information
  dropoffLocation: {type: String,required: [true, 'Dropoff location is required'],trim: true
  },dropoffDate: {type: Date,required: [true, 'Dropoff date is required'],validate: {
      validator: function(v) {
        return v > this.pickupDate;
      },      message: 'Dropoff date must be after pickup date'}
  },
  
  // Vehicle Information
  carPlateNumber: {
    type: String,
    trim: true,
    uppercase: true
  },  carChassisNumber: {
    type: String,
    required: [true, 'Chassis number is required'],
    trim: true,
    uppercase: true,
    unique: true
  },  
  // System Information
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },createdAt: {
    type: Date,
    default: Date.now
  },updatedAt: {
    type: Date,
    default: Date.now
  }});

// Update the updatedAt field before saving
BuyNowSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add index for better query performance
BuyNowSchema.index({ pickupDate: 1, dropoffDate: 1 });
BuyNowSchema.index({ carChassisNumber: 1 }, { unique: true });

module.exports = mongoose.model('BuyNow', BuyNowSchema);