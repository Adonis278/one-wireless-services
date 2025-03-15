// pages/network-fiber.js
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Voice & Data Cabling',
    description: 'Professional installation of copper cabling for office infrastructure and structured cabling for modular office furniture.',
    features: [
      'Cat 5e, Cat 6, Cat 7 cabling installations',
      'Testing and certification',
      'Structured cabling for modular office furniture',
      'Telecommunications room design and build-out'
    ],
    image: '/images/network/voice-data/cabling-system.jpg'
  },
  {
    title: 'Fiber Optic Services',
    description: 'High-speed data transmission solutions for enterprise applications using single-mode and multi-mode fiber optics.',
    features: [
      'Single-mode & multi-mode fiber installations',
      'Fiber splicing and termination',
      'OTDR testing and certification',
      'Campus-wide fiber backbone implementation'
    ],
    image: '/images/network/wireless-access/fiber-optics.jpg'
  },
  {
    title: 'Wireless Access Points',
    description: 'Professional installation of wireless access points to maximize Wi-Fi coverage and performance throughout your facility.',
    features: [
      'Site survey and heat mapping',
      'Strategic WAP placement',
      'Power over Ethernet (PoE) deployments',
      'Wireless controller configuration'
    ],
    image: '/images/network/wireless-access/wireless-access.jpg'
  },
  {
    title: 'Data Center & AV Services',
    description: 'Comprehensive solutions for data centers and audiovisual systems, including cabling, installation, and integration.',
    features: [
      'Server rack and cabinet installations',
      'High-density cabling solutions',
      'TV & video conferencing system integration',
      'Cable management systems'
    ],
    image: '/images/network/wireless-access/data-center.jpg'
  }
]

export default function NetworkFiber() {
  return (
    <Layout title="Network & Fiber Optic Cabling">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/network/wireless-access/fiber-optics.jpg" 
            alt="Network & Fiber Optic Cabling" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Network & Fiber Optic Cabling</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Professional installation and maintenance of high-performance network infrastructure and cabling solutions for your business.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Complete Networking Infrastructure Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At One Wireless Solutions, we provide comprehensive network cabling and infrastructure services to support your business communication needs. Our certified technicians deliver high-quality installations that ensure reliable performance and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      {services.map((service, index) => (
        <div key={service.title} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
              <div className="mt-10 lg:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-gray-900">{service.title}</h2>
                <p className="mt-3 text-lg text-gray-500">{service.description}</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Quality Standards Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Quality Standards</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Leading Practices
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              All of our installations adhere to the highest industry standards to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">BICSI Standards</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        We follow BICSI (Building Industry Consulting Service International) standards for telecommunications distribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">TIA/EIA Compliance</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        All installations meet or exceed TIA/EIA-568 Commercial Building Telecommunications Cabling Standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Certified Technicians</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Our team consists of fully certified and experienced cabling technicians with industry credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Quality Assurance</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Comprehensive testing and certification for every installation with detailed documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Deliver Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our structured approach ensures quality, timeliness, and customer satisfaction at every step.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Assessment & Design</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We begin with a thorough site assessment and develop a custom design based on your specific requirements and industry best practices.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Professional Installation</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our certified technicians install the cabling and infrastructure with minimal disruption to your operations, following all applicable codes and standards.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Testing & Certification</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Every installation undergoes comprehensive testing and certification to ensure it meets our high-quality standards and your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to upgrade your network infrastructure?</span>
            <span className="block">Contact our experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Get a consultation and custom quote for your network cabling needs.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}