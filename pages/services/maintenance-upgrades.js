// pages/services/maintenance-upgrades.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: '24/7 Monitoring',
    description: 'Continuous system monitoring to identify and address issues before they impact your operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Preventative Maintenance',
    description: 'Regular scheduled maintenance to ensure optimal system performance and prevent downtime.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    title: 'Emergency Response',
    description: 'Rapid response to system issues with guaranteed service level agreements for critical systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    )
  },
  {
    title: 'Software Updates',
    description: 'Regular software updates to ensure security patches and performance improvements are implemented.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    )
  },
  {
    title: 'Hardware Upgrades',
    description: 'Strategic hardware refresh services to keep your wireless infrastructure current with evolving technology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    )
  },
  {
    title: 'Performance Optimization',
    description: 'Regular system assessments and tuning to ensure optimal performance as usage patterns evolve.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  },
]

const servicePackages = [
  {
    title: 'Basic Support',
    description: 'Essential maintenance coverage for standard wireless installations.',
    features: [
      'Business hours technical support (8AM-5PM)',
      'Next business day response for critical issues',
      'Quarterly preventative maintenance visits',
      'Regular software updates',
      'Remote system monitoring',
      'Annual system assessment'
    ],
    recommended: 'Small to medium businesses with standard wireless needs.'
  },
  {
    title: 'Premium Support',
    description: 'Enhanced coverage with faster response times for business-critical systems.',
    features: [
      'Extended technical support (7AM-7PM)',
      'Same-day response for critical issues',
      'Monthly preventative maintenance visits',
      'Priority software updates',
      '24/7 system monitoring with alerts',
      'Semi-annual system optimization',
      'Discounted hardware upgrades'
    ],
    recommended: 'Mid-size organizations with important wireless infrastructure needs.',
    highlight: true
  },
  {
    title: 'Mission Critical',
    description: 'Comprehensive support for environments where wireless is essential to operations.',
    features: [
      '24/7/365 technical support',
      '4-hour response guarantee for critical issues',
      'Weekly preventative maintenance checks',
      'Immediate security patches and updates',
      'Continuous performance monitoring',
      'Quarterly optimization and tuning',
      'Dedicated support representative',
      'Hardware replacement program'
    ],
    recommended: 'Healthcare, public safety, and large venues where connectivity is mission-critical.'
  }
]

export default function MaintenanceUpgrades() {
  return (
    <Layout title="Maintenance & Upgrades Services">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/maintenance2.jpg" 
            alt="Maintenance & Upgrades Services" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Maintenance & Upgrades</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            24/7 monitoring and troubleshooting services to ensure uninterrupted operation of your wireless infrastructure.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Proactive Maintenance Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              One Wireless Solutions provides comprehensive maintenance and upgrade services to ensure your wireless infrastructure operates at peak performance. Our proactive approach identifies and addresses potential issues before they impact your operations.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Why Maintenance Matters
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Maintaining your wireless infrastructure is critical to ensure reliable performance and protect your investment. Our maintenance services provide:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Minimized downtime and service interruptions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Extended equipment lifespan through proper maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Enhanced security with regular updates and patches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Predictable maintenance costs with service level agreements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Future-proof infrastructure with strategic upgrades</span>
                  </li>
                </ul>
              </div>
              <div className="relative w-full aspect-[16/9]">
                <Image 
                  src="/images/maintenance2.jpg" 
                  alt="Wireless system maintenance" 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Key Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Maintenance & Upgrade Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We provide a full range of services to keep your wireless infrastructure running optimally.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Packages Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Service Packages</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Support Plans for Every Need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Choose the level of support that matches your organization's wireless infrastructure requirements.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {servicePackages.map((pkg) => (
              <div key={pkg.title} className={`rounded-lg shadow-lg overflow-hidden ${pkg.highlight ? 'border-2 border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border border-gray-200'}`}>
                <div className={`px-6 py-8 bg-white sm:p-10 sm:pb-6 ${pkg.highlight ? 'relative' : ''}`}>
                  {pkg.highlight && (
                    <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                      <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                      {pkg.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">
                      {pkg.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                      <div className="p-5">
                        <p className="text-sm font-medium text-gray-500">
                          Recommended for:
                        </p>
                        <p className="mt-2 text-base text-gray-900">
                          {pkg.recommended}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact" className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${pkg.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Case Study: Hospital Network Upgrade
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                A major regional hospital needed to upgrade their wireless infrastructure while maintaining 24/7 operations for critical medical systems.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">The Challenge:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Critical 24/7 medical systems requiring continuous uptime</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Aging infrastructure with performance limitations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Stringent security and compliance requirements</span>
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
                    <span className="ml-3 text-base text-gray-500">Phased migration plan with redundant systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">After-hours implementation with on-site standby teams</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Comprehensive testing before each system cutover</span>
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
                    <span className="ml-3 text-base text-gray-500">Zero downtime for critical medical systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">300% increase in network capacity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Full compliance with healthcare security standards</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
              <Image 
                src="/images/das/applications/hospital.jpg" 
                alt="Hospital wireless upgrade" 
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
            <span className="block">Ready to ensure the reliability of your wireless infrastructure?</span>
            <span className="block">Contact our maintenance experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Our team can develop a customized maintenance plan to meet your specific needs and requirements.
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