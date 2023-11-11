// pages/api/submit-form.js
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://MinuteMingle:MM@cluster0.kbdxhkp.mongodb.net/MinuteMingle');

const formDataSchema = new mongoose.Schema({
  basicInfo: {
    firstName: String,
    age: Number,
    gender: String,
  },
  contactInfo:{
    email: String,
    phoneNumber: String,
  },
  locationInfo:{
    isOnCampus: Boolean,
    residentialArea: String
  },
  academicInfo:{
    majors: String,
    minors: String,
    classes: String
  }
});

const FormDataModel = mongoose.models.UserInfo || mongoose.model('UserInfo', formDataSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = new FormDataModel(req.body);
      await formData.save();
      res.status(200).json({ success: true, message: 'Form data saved successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving form data.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
