import { db } from '../../lib/firebaseAdmin';
import { Timestamp } from 'firebase-admin/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { firstName, lastName, email, phone, company, inquiryType, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const docRef = await db.collection("consultation_requests").add({
      firstName,
      lastName,
      email,
      phone,
      company,
      inquiryType,
      message,
      timestamp: Timestamp.now(),
    });

    console.log("✅ Document successfully written with ID:", docRef.id);

    return res.status(200).json({ success: true, message: "Your consultation request has been submitted!" });

  } catch (error) {
    console.error("🔥 Firestore Error:", error.message);
    return res.status(500).json({ success: false, message: "Internal Server Error, check server logs." });
  }
}
