// pages/about.js
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Reliable wireless connectivity solutions for modern office environments and business facilities.',
    image: '/images/das/applications/corporate-facility.jpg'
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Secure and compliant wireless systems for government buildings and public facilities.',
    image: '/images/das/applications/government.jpg'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Critical wireless infrastructure for hospitals, clinics, and healthcare facilities.',
    image: '/images/das/applications/hospital.jpg'
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Enhancing customer experience and operations in retail and shopping environments.',
    image: '/images/das/applications/retail.jpg'
  },
  {
    id: 'public-safety',
    name: 'Public Safety',
    description: 'Reliable communications systems for first responders and emergency services.',
    image: '/images/das/applications/public-safety.jpg'
  }
]

export default function About() {
  return (
    <Layout title="About Us">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/about-us.jpg" 
            alt="One Wireless Solutions team" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Learn about One Wireless Solutions' leadership in DAS and wireless connectivity solutions.
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Company Introduction
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                One Wireless Solutions is a leading provider of Distributed Antenna Systems (DAS) and comprehensive wireless connectivity solutions. With decades of combined experience, our team of experts has established a reputation for excellence in designing, installing, and maintaining wireless infrastructure across diverse industries.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We specialize in creating seamless wireless environments that enhance communication, improve safety, and drive operational efficiency for our clients. Our commitment to innovation and quality has positioned us as a trusted partner for businesses seeking reliable wireless connectivity solutions.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 relative h-64 lg:h-auto">
              <Image 
                src="/images/das/applications/hq.jpg" 
                alt="One Wireless Solutions headquarters" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission & Vision</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Driving Innovation in Wireless Connectivity
            </p>
          </div>
          
          <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide cutting-edge wireless connectivity solutions that empower businesses and organizations to achieve seamless communication, enhanced safety, and operational excellence. We are committed to delivering customized DAS installations that meet the unique needs of each client while maintaining the highest standards of quality and reliability.
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the industry leader in wireless connectivity solutions, recognized for our innovation, expertise, and unwavering commitment to client satisfaction. We aim to shape the future of wireless communication by continuously advancing our technologies, processes, and services to meet the evolving needs of a connected world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="py-16 bg-white" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industries Served</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Solutions for Diverse Industries
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide tailored wireless connectivity solutions for a wide range of industries, each with unique requirements and challenges.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {industries.map((industry, index) => (
              <div 
                key={industry.id} 
                id={industry.id}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}
              >
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src={industry.image} 
                    alt={industry.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-lg" 
                  />
                </div>
                <div className="mt-6 lg:mt-0 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                  <p className="mt-3 text-lg text-gray-500">{industry.description}</p>
                  <div className="mt-5">
                    <Link href={`/das-solutions/applications#${industry.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      View Solutions
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            Our experts are ready to discuss your specific wireless infrastructure needs.
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