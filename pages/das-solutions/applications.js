// pages/das-solutions/applications.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const applications = [
  {
    id: 'stadiums',
    title: 'Stadiums & Arenas',
    description: 'High-density wireless solutions for large crowds and event venues.',
    image: '/images/das/applications/stadium.jpg',
    challenges: [
      'Thousands of simultaneous users during events',
      'Video streaming and social media usage spikes',
      'Concrete and steel construction blocking signals',
      'Critical public safety communications requirements'
    ],
    benefits: [
      'Seamless connectivity for all attendees',
      'Support for high-bandwidth applications',
      'Enhanced fan experience and engagement',
      'Reliable emergency services communications'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Facilities',
    description: 'Reliable high-speed coverage for modern business environments.',
    image: '/images/das/applications/corporate-facility.jpg',
    challenges: [
      'Multi-floor coverage requirements',
      'LEED-certified buildings with RF-blocking materials',
      'High-density user environments',
      'Mission-critical business applications'
    ],
    benefits: [
      'Enhanced employee productivity',
      'Seamless voice and data communication',
      'Support for IoT and smart building technologies',
      'Competitive advantage in tenant attraction and retention'
    ]
  },
  {
    id: 'government',
    title: 'Government & Education',
    description: 'Secure and regulated connectivity solutions for institutions.',
    image: '/images/das/applications/government.jpg',
    challenges: [
      'High security requirements',
      'Large campus environments',
      'Multiple building coverage needs',
      'Varying usage patterns and densities'
    ],
    benefits: [
      'Secure and reliable communications',
      'Support for emergency notification systems',
      'Enhanced learning and administrative environments',
      'Future-proof infrastructure for evolving needs'
    ]
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Healthcare',
    description: 'Critical wireless infrastructure for medical facilities and patient care.',
    image: '/images/das/applications/hospital.jpg',
    challenges: [
      'Medical equipment interference concerns',
      'Large complex building layouts',
      'Critical communications requirements',
      'Patient and visitor connectivity needs'
    ],
    benefits: [
      'Support for medical IoT devices and equipment',
      'Reliable communications for healthcare providers',
      'Enhanced patient experience',
      'Improved emergency response capabilities'
    ]
  },
  {
    id: 'retail',
    title: 'Retail & Hospitality',
    description: 'Enhanced customer experience solutions for retail and hospitality venues.',
    image: '/images/das/applications/retail.jpg',
    challenges: [
      'Varying layout and construction challenges',
      'High customer expectations for connectivity',
      'Support for point-of-sale and inventory systems',
      'Seasonal and promotional traffic variations'
    ],
    benefits: [
      'Improved customer experience and satisfaction',
      'Support for mobile payment solutions',
      'Enhanced guest services in hospitality settings',
      'Data collection for customer behavior analysis'
    ]
  },
  {
    id: 'public-safety',
    title: 'Public Safety',
    description: 'Reliable emergency communications systems for first responders.',
    image: '/images/das/applications/public-safety.jpg',
    challenges: [
      'Code compliance requirements',
      'Hardened systems for emergency operations',
      'Multi-agency frequency support',
      'Coverage in challenging areas like stairwells and basements'
    ],
    benefits: [
      'Code-compliant emergency responder radio coverage',
      'Enhanced safety for building occupants',
      'Reliable communications during emergencies',
      'Integrated solutions with in-building systems'
    ]
  }
]

export default function DASApplications() {
  return (
    <Layout title="DAS Applications">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/das/applications/das-app.jpg" 
            alt="DAS Applications" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">DAS Applications</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Specialized wireless solutions tailored for specific industries and environments with unique connectivity requirements.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Specific Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At One Wireless Solutions, we understand that different environments have unique wireless connectivity challenges. Our DAS solutions are tailored to the specific needs of various industries and building types, ensuring optimal performance and reliability in any setting.
            </p>
          </div>
        </div>
      </div>

      {/* Applications Sections */}
      {applications.map((application, index) => (
        <div key={application.id} id={application.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src={application.image} 
                  alt={application.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
              <div className="mt-10 lg:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-gray-900">{application.title}</h2>
                <p className="mt-3 text-lg text-gray-500">{application.description}</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">Industry Challenges:</h3>
                  <ul className="mt-4 space-y-3">
                    {application.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">Solution Benefits:</h3>
                  <ul className="mt-4 space-y-3">
                    {application.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Discuss Your Requirements
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ROI and Value Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Business Value</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Return on Investment
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our DAS solutions deliver measurable business benefits beyond connectivity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Operational Efficiency</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Improved communication leads to streamlined operations and reduced costs. Our customers report an average 15-20% improvement in operational efficiency.
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
                    <h3 className="text-lg font-medium text-gray-900">User Satisfaction</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Whether employees, customers, or visitors, enhanced connectivity leads to higher satisfaction rates and improved experiences.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Future-Proof Investment</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Our scalable systems grow with your needs, providing long-term value and adaptability to emerging technologies and requirements.
                    </p>
                  </div>
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
            <span className="block">Ready to enhance connectivity in your environment?</span>
            <span className="block">Contact our experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our team can provide a customized DAS solution tailored to your industry's specific requirements.
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