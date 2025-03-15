// pages/network-fiber/voice-data-cabling.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Cat 5e Cabling',
    description: 'Standard cabling suitable for most office environments with speeds up to 1 Gbps.',
    image: '/images/network/cat5e.jpg',
    features: [
      'Up to 1 Gbps data transmission',
      'Cost-effective solution',
      'Suitable for most standard applications',
      'Backward compatible with Cat 3 and Cat 5'
    ]
  },
  {
    title: 'Cat 6 Cabling',
    description: 'High-performance cabling for demanding business environments with speeds up to 10 Gbps over shorter distances.',
    image: '/images/network/cat6.jpg',
    features: [
      'Up to 10 Gbps for runs up to 55 meters',
      'Improved noise reduction',
      'Higher bandwidth capacity',
      'Ideal for new installations and upgrades'
    ]
  },
  {
    title: 'Cat 6A Cabling',
    description: 'Enhanced Cat 6 cabling with full 10 Gbps performance over 100 meters and improved noise protection.',
    image: '/images/network/cat6a.jpg',
    features: [
      'Full 10 Gbps over 100 meter runs',
      'Superior alien crosstalk protection',
      'Future-proof for most business applications',
      'Ideal for data centers and high-bandwidth environments'
    ]
  },
  {
    title: 'Cat 7 Cabling',
    description: 'Premium shielded cabling solution for maximum performance and noise immunity in critical environments.',
    image: '/images/network/cat7.jpg',
    features: [
      'Up to 40 Gbps over shorter distances',
      'Fully shielded construction',
      'Maximum noise immunity',
      'Extended lifespan for infrastructure investments'
    ]
  },
  {
    title: 'Structured Cabling',
    description: 'Comprehensive organized cabling systems for entire facilities including pathways, spaces, and media types.',
    image: '/images/network/structured-cabling.jpg',
    features: [
      'Organized, standards-based infrastructure',
      'Simplified maintenance and troubleshooting',
      'Flexible and scalable design',
      'Support for multiple applications and services'
    ]
  },
  {
    title: 'Office Furniture Cabling',
    description: 'Specialized solutions for modular office furniture including cubicles, raised floors, and partition systems.',
    image: '/images/network/furniture-cabling.jpg',
    features: [
      'Clean integration with modular furniture',
      'Flexible connections for reconfigurable spaces',
      'Proper cable management',
      'Power and data coordination'
    ]
  }
]

const standards = [
  {
    name: 'TIA/EIA-568',
    description: 'Commercial Building Telecommunications Cabling Standard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    name: 'BICSI Standards',
    description: 'Building Industry Consulting Service International standards and best practices',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  },
  {
    name: 'ISO/IEC 11801',
    description: 'International standard for generic cabling for customer premises',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  },
  {
    name: 'NEC Standards',
    description: 'National Electrical Code requirements for low-voltage cabling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
]

const benefits = [
  {
    title: 'Reliability',
    description: 'Professional installation ensures consistent, reliable connectivity throughout your facility.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    title: 'Scalability',
    description: 'Structured cabling systems allow for easy expansion and modification as your needs evolve.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    )
  },
  {
    title: 'Future-Proof',
    description: 'Higher-grade cabling provides capacity for future technologies and increased bandwidth demands.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    title: 'Organization',
    description: 'Proper cable management and documentation makes maintenance and troubleshooting significantly easier.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    )
  }
]

export default function VoiceDataCabling() {
  return (
    <Layout title="Voice & Data Cabling">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/network/voice-data-hero.jpg" 
            alt="Voice & Data Cabling" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Voice & Data Cabling</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Professional copper cabling installation and structured cabling solutions for modern office environments.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Cabling Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              One Wireless Solutions provides professional voice and data cabling services for businesses of all sizes. Our certified technicians deliver high-quality installations that form the foundation of your network infrastructure.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  The Importance of Quality Cabling
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  The cabling infrastructure is the foundation of your network. While often overlooked, it's one of the most critical components that affects daily operations:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">60-70% of network problems stem from cabling issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Cabling typically represents only 5-7% of network costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Properly installed cabling lasts 15+ years through multiple equipment upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Quality cabling prevents performance issues like packet loss and latency</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
                <Image 
                  src="/images/network/voice-data/cabling-system.jpg"
                  alt="Structured cabling system"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Types Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Voice & Data Cabling Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We provide a comprehensive range of cabling services to meet your specific needs.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}
              >
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
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-lg text-gray-500">{service.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-gray-900">Features:</h4>
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
            ))}
          </div>
        </div>
      </div>

      {/* Standards Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Compliance</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry Standards & Certifications
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              All our cabling installations adhere to the highest industry standards and best practices.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {standards.map((standard) => (
                <div key={standard.name} className="bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        {standard.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{standard.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {standard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Professional Cabling
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Investing in professional cabling installation provides numerous long-term benefits.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center">
                      <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-md bg-blue-500 text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Deliver Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our structured approach ensures quality, timeliness, and customer satisfaction.
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
                    We begin with a thorough site assessment and develop a custom cabling design based on your specific requirements and environment.
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
                    Our certified technicians install the cabling infrastructure with attention to detail, proper labeling, and cable management.
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
                    Every installed cable is thoroughly tested and certified to ensure it meets industry standards and your specific performance requirements.
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
            <span className="block">Contact our cabling experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our team can provide a customized cabling solution tailored to your specific requirements.
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