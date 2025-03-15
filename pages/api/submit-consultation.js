// pages/api/submit-consultation.js
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Add timestamp
    formData.createdAt = serverTimestamp();
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'consultations'), formData);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      id: docRef.id 
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error submitting form'
    });
  }
}