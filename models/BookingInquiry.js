import mongoose from "mongoose";

const BookingInquirySchema = new mongoose.Schema({
  racInquiry: {},
  type: {
    type: String,
  },
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  messages: String,
  dateSent: { type: Date, default: new Date() },
});

export default mongoose.models.BookingInquiry ||
  mongoose.model("BookingInquiry", BookingInquirySchema);
