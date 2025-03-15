// pages/network-fiber/data-center-av.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const dataCenterServices = [
  {
    title: 'Server Rack Installation',
    description: 'Professional installation of server racks and cabinets with proper spacing, ventilation, and power considerations.',
    image: '/images/network/server-rack.jpg',
    features: [
      'Secure rack mounting and stabilization',
      'Proper alignment and spacing',
      'Power distribution setup',
      'Cooling considerations'
    ]
  },
  {
    title: 'High-Density Cabling',
    description: 'Specialized high-density cabling solutions designed specifically for data center environments.',
    image: '/images/network/high-density.jpg',
    features: [
      'Optimized cable management',
      'Minimized cable lengths',
      'Enhanced airflow design',
      'Future expansion planning'
    ]
  },
  {
    title: 'Cable Management',
    description: 'Comprehensive cable management solutions to maintain organization, airflow, and accessibility in data centers.',
    image: '/images/network/cable-management.jpg',
    features: [
      'Vertical and horizontal management systems',
      'Proper bend radius maintenance',
      'Organized bundling and routing',
      'Labeled and documented connections'
    ]
  }
]

const avServices = [
  {
    title: 'Conference Room Systems',
    description: 'Complete audio/visual solutions for conference rooms and meeting spaces.',
    image: '/images/network/conference-room.jpg',
    features: [
      'Video conferencing integration',
      'Display systems and mounting',
      'Audio systems and speakers',
      'Control systems and automation'
    ]
  },
  {
    title: 'Digital Signage',
    description: 'Professional installation and integration of digital signage systems throughout your facility.',
    image: '/images/network/digital-signage.jpg',
    features: [
      'Display mounting and installation',
      'Content management system setup',
      'Network integration',
      'Remote management capabilities'
    ]
  },
  {
    title: 'AV Cabling Infrastructure',
    description: 'Specialized cabling infrastructure designed specifically for audio/visual applications.',
    image: '/images/network/av-cabling.jpg',
    features: [
      'HDMI, DisplayPort, and SDI cabling',
      'Audio cabling and connections',
      'Control system wiring',
      'Centralized AV equipment rooms'
    ]
  }
]

const benefits = [
  {
    title: 'Enhanced Performance',
    description: 'Properly designed data center and AV installations maximize performance and reliability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: 'Scalability',
    description: 'Future-proof installations that can grow and adapt as your needs evolve over time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    )
  },
  {
    title: 'Operational Efficiency',
    description: 'Organized infrastructure reduces maintenance time and troubleshooting efforts.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  },
  {
    title: 'Professional Appearance',
    description: 'Clean, organized installations create a professional impression for clients and stakeholders.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    )
  }
]

export default function DataCenterAV() {
  return (
    <Layout title="Data Center & AV Services">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/network/data-center-hero.jpg" 
            alt="Data Center & AV Services" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Data Center & AV Services</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Professional cabling solutions for data centers and audiovisual system integration for modern business environments.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Infrastructure Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              One Wireless Solutions provides comprehensive data center and audiovisual cabling services to support your critical infrastructure and communication needs. Our certified technicians deliver high-quality installations that ensure performance, reliability, and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Data Center Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Data Center Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mission-Critical Infrastructure
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our data center solutions ensure reliable, organized, and scalable infrastructure for your critical systems.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {dataCenterServices.map((service, index) => (
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
                    <h4 className="text-lg font-medium text-gray-900">Key Features:</h4>
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

      {/* AV Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Audiovisual Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Enhanced Communication Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our AV solutions enhance collaboration, communication, and presentation capabilities in your business environment.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {avServices.map((service, index) => (
              <div 
                key={service.title}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}
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
                    <h4 className="text-lg font-medium text-gray-900">Key Features:</h4>
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Professional Infrastructure Matters
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Investing in professional data center and AV infrastructure provides numerous long-term advantages.
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

      {/* Case Study Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Case Study: Financial Services Data Center
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                A growing financial services firm needed a comprehensive data center refresh to support their expanding operations and improve reliability.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">The Challenge:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Disorganized legacy cabling infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Need for minimal downtime during implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Strict compliance and documentation requirements</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Our Approach:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Comprehensive infrastructure assessment and design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Phased implementation with minimal service interruption</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Detailed documentation and testing procedures</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">The Results:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">50% reduction in troubleshooting time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">100% compliance with industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Scalable infrastructure supporting 3x future growth</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
              <Image 
                src="/images/network/data-center-case.jpg" 
                alt="Data center implementation" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to optimize your infrastructure?</span>
            <span className="block">Contact our experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our team can provide customized data center and AV solutions tailored to your specific requirements.
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