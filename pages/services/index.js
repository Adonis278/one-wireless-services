// pages/services/index.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'design-installation',
    title: 'Design & Installation',
    description: 'Custom DAS system design and expert installation services tailored to your specific needs.',
    image: '/images/services/design-installation.jpg',
    features: [
      'Site Surveys & Planning',
      'Custom DAS System Design',
      'Integration with Existing Networks',
      'Compliance with Industry Standards'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end deployment coordination with carriers and vendors for seamless implementation.',
    image: '/images/services/project-management.jpg',
    features: [
      'End-to-End Deployment',
      'Coordination with Carriers & Vendors',
      'Regulatory & Safety Compliance',
      'Ongoing Support & Optimization'
    ]
  },
  {
    id: 'maintenance-upgrades',
    title: 'Maintenance & Upgrades',
    description: '24/7 monitoring and troubleshooting services to ensure uninterrupted operation of your wireless infrastructure.',
    image: '/images/services/maintenance.jpg',
    features: [
      '24/7 Monitoring & Troubleshooting',
      'Software & Hardware Upgrades',
      'Emergency Response Services',
      'Preventative Maintenance Programs'
    ]
  }
]

export default function ServicesIndex() {
  return (
    <Layout title="Services">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/services/services-hero.jpg" 
            alt="Wireless Services" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            From initial design to ongoing maintenance, we provide comprehensive services to ensure optimal performance of your wireless infrastructure.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              End-to-End Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              One Wireless Solutions provides comprehensive services that cover every aspect of wireless infrastructure deployment and management. Our experienced team delivers quality results at every stage of your project.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
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
                  <div className="mt-8 lg:mt-0 flex flex-col justify-center">
                    <div className="text-lg">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="mt-3 text-lg text-gray-500">{service.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-medium text-gray-900">Key Offerings:</h4>
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
                      
                      <div className="mt-8">
                        <Link href={`/services/${service.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
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
                  <h3 className="text-xl font-medium text-gray-900">Discovery & Planning</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We begin by understanding your requirements, conducting site surveys, and developing a detailed project plan.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Design & Engineering</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our team creates custom designs and engineering plans tailored to your specific needs and environment.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Deployment & Implementation</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We handle professional installation, testing, and commissioning of your wireless infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-10">
              <div className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Testing & Optimization</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Comprehensive testing ensures your system meets or exceeds performance expectations.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Training & Handover</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We provide training for your team and complete documentation of your system.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">6</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Ongoing Support</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our team provides continuous monitoring, maintenance, and support services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-500">
                    "The One Wireless Solutions team provided exceptional service from initial consultation through project completion. Their expertise in DAS installation has significantly improved our facility's wireless coverage."
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-gray-900">Michael Johnson</p>
                    <p className="text-sm text-gray-600">Facilities Director, Metro Hospital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-500">
                    "We partnered with One Wireless Solutions for our campus-wide outdoor DAS deployment. Their project management was flawless, and the system performance has exceeded our expectations."
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-gray-900">Sarah Rodriguez</p>
                    <p className="text-sm text-gray-600">IT Director, State University</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-500">
                    "The maintenance team at One Wireless Solutions has been instrumental in keeping our DAS infrastructure running flawlessly. Their 24/7 monitoring has prevented several potential outages."
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-gray-900">David Thompson</p>
                    <p className="text-sm text-gray-600">Operations Manager, Golden Arena</p>
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
            <span className="block">Ready to discuss your wireless needs?</span>
            <span className="block">Contact our team today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Schedule a consultation with our experts to explore how our services can benefit your organization.
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