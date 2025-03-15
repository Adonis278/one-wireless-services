// pages/das-solutions/in-building.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'Enhanced Signal Coverage',
    description: 'Eliminate dead zones and provide consistent connectivity throughout your building, from lobby to top floor.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    )
  },
  {
    title: 'Multi-Carrier Support',
    description: 'Support for all major wireless carriers in a single system, providing universal coverage for all users.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    )
  },
  {
    title: 'Public Safety Compliance',
    description: 'Meet emergency responder radio coverage requirements and building codes with our public safety DAS solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: 'Future-Proof Design',
    description: 'Scalable infrastructure that can adapt to evolving technologies and growing demands.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
]

const applications = [
  {
    name: 'Commercial Office Buildings',
    description: 'Enhance productivity with reliable connectivity throughout your office space.'
  },
  {
    name: 'Healthcare Facilities',
    description: 'Support critical communications and medical devices with dependable wireless coverage.'
  },
  {
    name: 'Educational Institutions',
    description: 'Enable digital learning with campus-wide wireless connectivity.'
  },
  {
    name: 'Hotels and Hospitality',
    description: 'Provide guests with seamless connectivity for an enhanced experience.'
  },
  {
    name: 'Manufacturing Facilities',
    description: 'Support IoT devices and operational technologies with robust wireless infrastructure.'
  },
  {
    name: 'Retail Environments',
    description: 'Improve customer experience and enable mobile point-of-sale systems.'
  },
]

export default function InBuildingDAS() {
  return (
    <Layout title="In-Building DAS Solutions">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/das/in-building/cellular-tower.jpg" 
            alt="In-Building DAS Installation" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">In-Building DAS</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Overcome indoor wireless challenges with our custom distributed antenna systems designed for seamless connectivity throughout your building.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Indoor Wireless Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our In-Building Distributed Antenna Systems provide reliable cellular and public safety communications in environments where traditional networks struggle to deliver consistent coverage.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  The Challenge of Indoor Wireless Coverage
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Modern building materials, architectural designs, and LEED certification requirements can create significant barriers to wireless signals. These obstacles include:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Low-E glass windows that block RF signals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Concrete and steel materials that attenuate signals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Underground areas and parking structures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Building size and layout complexity</span>
                  </li>
                </ul>
              </div>
              <div className="relative w-full aspect-[16/9]">
                <Image 
                  src="/images/das/in-building/office-glass.jpg"
                  alt="Building with wireless coverage challenges" 
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
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Key Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The One Wireless Solutions Advantage
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our custom-designed In-Building DAS solutions provide critical benefits for modern facilities.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
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

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The In-Building DAS Implementation Process
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Site Assessment</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our RF engineers conduct a comprehensive site survey to identify coverage needs and challenges specific to your building.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Custom Design</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We develop a tailored DAS design that optimizes coverage while working within your building's structural constraints.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Carrier Coordination</h3>
                  <p className="mt-3 text-base text-gray-500">
                    We manage all carrier relationships and approvals to ensure your system meets their technical requirements.
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
                  <h3 className="text-xl font-medium text-gray-900">Installation</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our certified technicians install the DAS components with minimal disruption to your day-to-day operations.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Testing & Optimization</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Comprehensive testing ensures the system meets or exceeds performance expectations across your entire facility.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                  <span className="text-xl font-bold">6</span>
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-xl font-medium text-gray-900">Ongoing Maintenance</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Continuous monitoring and regular maintenance ensure your system provides reliable performance over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Applications</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ideal for Various Building Types
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our In-Building DAS solutions are versatile and can be implemented in a wide range of facilities.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((application, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{application.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{application.description}</p>
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
                Case Study: Premier Office Tower
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                A 30-story office building in downtown San Francisco faced significant connectivity challenges due to its steel and glass construction. Employees and tenants experienced dropped calls and slow data speeds throughout the building.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">The Solution:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Installation of a multi-carrier DAS system covering 750,000 sq ft</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Integration with public safety radio frequencies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Strategic antenna placement throughout all floors</span>
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
                    <span className="ml-3 text-base text-gray-500">100% cellular coverage throughout the building</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">95% improvement in data speeds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">Full compliance with public safety requirements</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 lg:h-auto">
              <Image 
                src="/images/das/in-building/cellular-tower.jpg" 
                alt="Office tower with DAS installation" 
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
            <span className="block">Ready to enhance your building's connectivity?</span>
            <span className="block">Contact our DAS experts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Schedule a consultation to discuss your specific in-building wireless needs.
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