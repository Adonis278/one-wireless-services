// pages/network-fiber/wireless-access-points.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Site Survey & Planning',
    description: 'Comprehensive RF site surveys to identify optimal wireless access point placement for maximum coverage and performance.',
    image: '/images/network/site-survey.jpg',
    features: [
      'Heat mapping and signal analysis',
      'Interference detection and mitigation',
      'Coverage optimization planning',
      'Capacity planning for user density'
    ]
  },
  {
    title: 'WAP Installation',
    description: 'Professional installation of wireless access points with proper mounting, cabling, and power configuration.',
    image: '/images/network/wap-installation.jpg',
    features: [
      'Ceiling, wall, and outdoor mounting options',
      'Power over Ethernet (PoE) configuration',
      'Cable management and labeling',
      'Seamless integration with existing infrastructure'
    ]
  },
  {
    title: 'Controller Configuration',
    description: 'Setup and configuration of wireless controllers for centralized management of your wireless network.',
    image: '/images/network/controller-config.jpg',
    features: [
      'Centralized management setup',
      'High availability configuration',
      'Automatic channel and power optimization',
      'Load balancing and band steering'
    ]
  },
  {
    title: 'Mesh Network Deployment',
    description: 'Implementation of mesh wireless networks for seamless coverage in challenging environments.',
    image: '/images/network/mesh-network.jpg',
    features: [
      'Self-healing network architecture',
      'Extended coverage for difficult spaces',
      'Reduced cabling requirements',
      'Simplified expansion capabilities'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'Fine-tuning your wireless network for optimal performance, coverage, and reliability.',
    image: '/images/network/performance-optimization.jpg',
    features: [
      'Signal strength optimization',
      'Channel interference remediation',
      'Throughput and capacity enhancement',
      'Quality of Service (QoS) configuration'
    ]
  },
  {
    title: 'Security Configuration',
    description: 'Implementation of wireless security best practices to protect your network and data.',
    image: '/images/network/security-config.jpg',
    features: [
      'Enterprise-grade authentication protocols',
      'Secure guest access implementation',
      'Intrusion detection and prevention',
      'Compliance with security standards'
    ]
  }
]

const benefits = [
  {
    title: 'Enhanced Productivity',
    description: 'Reliable Wi-Fi enables employees to work efficiently from anywhere in your facility.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  },
  {
    title: 'Mobility & Flexibility',
    description: 'Enable seamless movement throughout your facility while maintaining consistent connectivity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    )
  },
  {
    title: 'Guest Access',
    description: 'Provide secure internet access for visitors while keeping your business network protected.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: 'IoT Support',
    description: 'Enable connectivity for smart devices and IoT implementations throughout your facility.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
      </svg>
    )
  }
]

export default function WirelessAccessPoints() {
  return (
    <Layout title="Wireless Access Points">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/network/wap-hero.jpg" 
            alt="Wireless Access Points" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Wireless Access Points</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Professional installation of wireless access points to maximize Wi-Fi coverage and performance throughout your facility.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Professional Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              One Wireless Solutions provides expert wireless access point installation and configuration services to ensure optimal Wi-Fi coverage throughout your facility. Our certified technicians deliver high-performance wireless networks tailored to your specific needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  The Importance of Proper AP Placement
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Proper wireless access point placement is critical for optimal Wi-Fi performance. Our professional approach ensures:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Maximum coverage with minimal dead zones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Reduced interference between access points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Optimal signal strength throughout the coverage area</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Adequate capacity for high-density user areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Enhanced roaming capabilities for mobile users</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
                <Image 
                  src="/images/network/wap-planning.jpg" 
                  alt="Wireless access point planning" 
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
              Our Wireless Access Point Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We provide comprehensive wireless services to meet your specific connectivity needs.
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

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Professional Wi-Fi Matters
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              A professionally designed and installed wireless network provides significant advantages for your business.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 overflow-hidden shadow rounded-lg">
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

      {/* Implementation Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Implement Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our structured approach ensures optimal wireless performance tailored to your needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative">
                <ol className="relative border-l border-gray-200 ml-3">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      1
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Requirements Gathering</h3>
                    <p className="mb-4 text-base text-gray-500">We discuss your wireless needs, identify usage patterns, and determine coverage requirements.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      2
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Site Survey</h3>
                    <p className="mb-4 text-base text-gray-500">Our engineers conduct a detailed RF site survey to identify optimal access point locations and potential interference sources.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      3
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Network Design</h3>
                    <p className="mb-4 text-base text-gray-500">We create a comprehensive wireless network design with access point placements, channel planning, and coverage predictions.</p>
                  </li>
                </ol>
              </div>
              <div className="relative mt-10 lg:mt-0">
                <ol className="relative border-l border-gray-200 ml-3">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      4
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Installation</h3>
                    <p className="mb-4 text-base text-gray-500">Our certified technicians install access points, run cable drops, and configure power sources according to the design plan.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      5
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Configuration</h3>
                    <p className="mb-4 text-base text-gray-500">We configure wireless controllers, access points, security settings, and network integration for optimal performance.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                      6
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Validation & Optimization</h3>
                    <p className="mb-4 text-base text-gray-500">Post-installation testing and performance validation ensure the network meets design specifications, with optimization as needed.</p>
                  </li>
                </ol>
              </div>
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
                Case Study: Office Complex Upgrade
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                A multi-building office complex with 250,000 square feet of space needed a comprehensive wireless upgrade to support growing mobility needs.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">The Challenge:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Aging wireless infrastructure with coverage gaps</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Increasing number of mobile devices and IoT implementations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Inconsistent performance across different areas</span>
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
                    <span className="ml-3 text-base text-gray-500">Comprehensive site survey with heat mapping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Strategic access point placement and density planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Controller-based deployment with centralized management</span>
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
                    <span className="ml-3 text-base text-gray-500">100% coverage throughout all buildings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">250% increase in average wireless throughput</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Seamless roaming and consistent performance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
              <Image 
                src="/images/network/office-wifi-case.jpg" 
                alt="Office wireless upgrade" 
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
        <div className="max-w-2xl mx-auto text-center py-16 px
              6 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Upgrade Your Wireless Network?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Contact us today to discuss your wireless access point needs and get a customized solution for your business.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <a className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-100">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
