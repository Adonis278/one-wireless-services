// pages/index.js
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const applications = [
  { 
    name: 'Stadiums & Arenas', 
    description: 'Ensuring large crowd connectivity in high-density environments.',
    icon: '/icons/stadium.svg' 
  },
  { 
    name: 'Corporate Facilities', 
    description: 'Reliable high-speed coverage for modern business operations.',
    icon: '/icons/corporate.svg' 
  },
  { 
    name: 'Government & Education', 
    description: 'Secure and regulated connectivity solutions for institutions.',
    icon: '/icons/government.svg' 
  },
  { 
    name: 'Healthcare', 
    description: 'Enabling crucial medical communications and device connectivity.',
    icon: '/icons/healthcare.svg' 
  },
]

const services = [
  { 
    name: 'Design & Installation', 
    description: 'Custom DAS system design tailored to your specific needs.',
    link: '/services/design-installation' 
  },
  { 
    name: 'Project Management', 
    description: 'End-to-end deployment coordination with carriers and vendors.',
    link: '/services/project-management' 
  },
  { 
    name: 'Maintenance & Upgrades', 
    description: '24/7 monitoring and troubleshooting for uninterrupted service.',
    link: '/services/maintenance-upgrades' 
  },
]

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/das/outdoor/outdoor-wireless.jpg" 
            alt="High-tech wireless installation" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Seamless Wireless Connectivity for a Connected World
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            One Wireless Solutions delivers industry-leading distributed antenna systems (DAS) 
            and wireless infrastructure for businesses, venues, and organizations of all sizes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-gray-900 border-white">
              Learn More
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* DAS Solutions Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">DAS Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Wireless Infrastructure
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide custom-designed distributed antenna systems to solve your most challenging connectivity issues.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* In-Building DAS */}
              <div className="relative bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">In-Building DAS</h3>
                <p className="text-base text-gray-500 mb-6">
                  Overcome indoor wireless challenges with our custom DAS solutions that ensure uninterrupted cellular and public safety communications.
                </p>
                <Link href="/das-solutions/in-building" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              {/* Outdoor DAS */}
              <div className="relative bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Outdoor DAS</h3>
                <p className="text-base text-gray-500 mb-6">
                  Large-scale wireless coverage for outdoor spaces including parking lots, campuses, and shopping areas with seamless carrier integration.
                </p>
                <Link href="/das-solutions/outdoor" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              {/* DAS Applications */}
              <div className="relative bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DAS Applications</h3>
                <p className="text-base text-gray-500 mb-6">
                  Specialized wireless solutions for various industries and environments with unique connectivity requirements.
                </p>
                <Link href="/das-solutions/applications" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Applications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Key Applications</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Specific Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide tailored wireless connectivity solutions for diverse industries and environments.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application) => (
                <div key={application.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{application.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{application.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/das-solutions/applications" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                View All Applications
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              End-to-End Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From initial design to ongoing maintenance, we provide comprehensive services to ensure optimal performance.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="bg-white overflow-hidden shadow-lg rounded-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-base text-gray-500 mb-6">{service.description}</p>
                    <Link href={service.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      Learn more 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to enhance your wireless connectivity?</span>
            <span className="block">Get in touch today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our team of experts is ready to design a customized DAS solution for your specific needs.
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