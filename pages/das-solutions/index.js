// pages/das-solutions/index.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const dasSolutions = [
  {
    id: 'in-building',
    title: 'In-Building DAS',
    description: 'Custom-designed in-building distributed antenna systems that ensure uninterrupted cellular and public safety communications in buildings of all sizes.',
    image: '/images/das/in-building/cellular-tower.jpg',
    benefits: [
      'Reliable cellular coverage throughout the entire building',
      'Enhanced public safety communications',
      'Support for multiple wireless carriers',
      'Scalable infrastructure to accommodate future needs'
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor DAS',
    description: 'Large-scale wireless coverage solutions for outdoor spaces including campuses, commercial areas, and public venues.',
    image: '/images/das/outdoor/sports-venue.jpg',
    benefits: [
      'Extended coverage for large outdoor areas',
      'Seamless carrier integration',
      'Weather-resistant and durable equipment',
      'Supports high-density user environments'
    ]
  },
  {
    id: 'applications',
    title: 'DAS Applications',
    description: 'Specialized wireless solutions tailored for specific industries and environments with unique connectivity requirements.',
    image: '/images/das/applications/government.jpg',
    benefits: [
      'Industry-specific design considerations',
      'Compliance with regulatory requirements',
      'Integration with existing systems',
      'Enhanced operational efficiency'
    ]
  }
]

export default function DASSolutions() {
  return (
    <Layout title="DAS Solutions">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/das-hero.jpg" 
            alt="Distributed Antenna Systems" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">DAS Solutions</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Our comprehensive distributed antenna systems deliver reliable wireless connectivity for any environment.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Wireless Infrastructure
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Distributed Antenna Systems (DAS) provide enhanced wireless coverage and capacity in areas where traditional cellular networks may face challenges. Our solutions ensure consistent connectivity throughout your space.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {dasSolutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}
                >
                  <div className="relative h-64 lg:h-auto">
                    <Image 
                      src={solution.image} 
                      alt={solution.title} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg shadow-lg" 
                    />
                  </div>
                  <div className="mt-8 lg:mt-0 flex flex-col justify-center">
                    <div className="text-lg">
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="mt-3 text-lg text-gray-500">{solution.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-medium text-gray-900">Key Benefits:</h4>
                        <ul className="mt-2 space-y-2">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="ml-2 text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <Link href={`/das-solutions/${solution.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industries</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solutions for Every Industry
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our DAS solutions are tailored to meet the specific needs and challenges of different industries.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <IndustryCard 
                title="Stadiums & Arenas" 
                description="High-density wireless solutions for sports venues and entertainment arenas."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                }
              />
              
              <IndustryCard 
                title="Corporate" 
                description="Reliable connectivity solutions for modern office buildings and corporate campuses."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
              
              <IndustryCard 
                title="Healthcare" 
                description="Critical wireless infrastructure for hospitals and medical facilities."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              />
              
              <IndustryCard 
                title="Government" 
                description="Secure and compliant wireless systems for government facilities."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                }
              />
              
              <IndustryCard 
                title="Retail" 
                description="Enhanced customer experience and operations in retail environments."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                }
              />
              
              <IndustryCard 
                title="Public Safety" 
                description="Reliable communications for first responders and emergency services."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
              />
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/das-solutions/applications" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Explore Industry Applications
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to enhance your wireless connectivity?</span>
            <span className="block">Contact our team today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our DAS experts will develop a custom solution tailored to your specific needs.
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

function IndustryCard({ title, description, icon }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
              {icon}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}