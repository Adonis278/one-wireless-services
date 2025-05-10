// pages/contact.js
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const officeLocations = [
  {
    name: 'Headquarters',
    address: '301 E 9th Street, Suite 316, Charlotte, NC 28202',
    phone: '+1 (704) 421-0116',
    email: 'sales@onewirelessservices.com',
    hours: 'Monday-Friday, 8:00 AM - 5:00 PM ET'
  }
];


const inquiryTypes = [
  { id: 'general', name: 'General Inquiry' },
  { id: 'consultation', name: 'Request a Consultation' },
  { id: 'quote', name: 'Request a Quote' },
  { id: 'support', name: 'Technical Support' },
  { id: 'career', name: 'Career Opportunities' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9\s-()+]+$/;
  const nameRegex = /^[A-Za-z\s'-]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.trim();

    // Validate phone number (allow digits, spaces, dashes, and parentheses)
    if (name === 'phone' && !phoneRegex.test(formattedValue) && formattedValue !== '') {
      return;
    }

    // Ensure first and last name only contain letters and spaces
    if ((name === 'firstName' || name === 'lastName') && !nameRegex.test(formattedValue) && formattedValue !== '') {
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Invalid email address format. Please enter a valid email.'
      });
      setIsSubmitting(false); // ✅ Fix: Reset submit state
      return;
    }
    
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Invalid phone number format. Only digits, spaces, and dashes are allowed.'
      });
      setIsSubmitting(false); // ✅ Fix: Reset submit state
      return;
    }
    
    if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Names can only contain letters, spaces, and apostrophes.'
      });
      setIsSubmitting(false); // ✅ Fix: Reset submit state
      return;
    }

    if (!formData.message.trim()) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Message cannot be empty.'
      });
      setIsSubmitting(false); // ✅ Fix: Reset submit state
      return;
    }
    
    try {
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been submitted successfully. Our team will contact you shortly.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: 'general',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Error submitting form');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error submitting your message. Please try again or contact us directly by phone.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Layout title="Contact Us">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img 
            src="/images/about-us.jpg" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Get in touch with our team for inquiries, support, or to request a consultation for your wireless connectivity needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Get in touch</h2>
              <p className="mt-3 text-lg text-gray-500">
                Have questions about our services or need assistance? Our team is here to help. Contact us through the form or reach out directly.
              </p>
              
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1-704-421-0116</p>
                    <p className="mt-1">Mon-Fri 8am to 5pm PT</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>sales@onewirelessservices.com</p>
                    <p className="mt-1">Support: sales@onewirelessservices.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Schedule a Consultation</h3>
                <p className="mt-3 text-gray-500">
                  For in-depth discussions about your specific wireless infrastructure needs, schedule a consultation with our technical team.
                </p>
                
                <a 
                  href="#contact-form" 
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Book Consultation
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-12 lg:mt-0 lg:col-span-2" id="contact-form">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Form</h2>
                
                {formStatus.submitted ? (
                  <div className={`rounded-md ${formStatus.error ? 'bg-red-50' : 'bg-blue-50'} p-4 mb-6`}>
                    <div className="flex">
                      <div>
                        <p className={`text-sm ${formStatus.error ? 'text-red-800' : 'text-blue-800'}`}>
                          {formStatus.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        required
                        maxLength='50'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        maxLength='50'
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        maxLength='100'
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        maxLength='20'
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        maxLength='100'
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">
                      Inquiry Type
                    </label>
                    <div className="mt-1">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Office Locations</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {officeLocations.map((office) => (
              <div key={office.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{office.name}</h3>
                  
                  <div className="mt-5">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-sm text-gray-500">
                        <p>{office.address}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-sm text-gray-500">
                        <p>{office.phone}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-sm text-gray-500">
                        <p>{office.email}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-sm text-gray-500">
                        <p>{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Process Simplified</h2>
            <p className="mt-4 text-lg text-gray-500">
              How we work with you from initial consultation to project completion.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 transform -translate-y-1/2" aria-hidden="true"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-xl font-bold mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Consultation</h3>
                  <p className="text-center text-gray-500 text-sm">
                    We discuss your needs and challenges to understand your unique requirements.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-xl font-bold mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Solution Design</h3>
                  <p className="text-center text-gray-500 text-sm">
                    Our team creates a custom design tailored to your specific environment.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-xl font-bold mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Implementation</h3>
                  <p className="text-center text-gray-500 text-sm">
                    Professional installation by our certified technicians with minimal disruption.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-xl font-bold mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-center text-gray-500 text-sm">
                    We provide continued maintenance and support to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our structured process ensures quality results, clear communication, and timely delivery for every project.
            </p>
            <div className="mt-8">
              <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}