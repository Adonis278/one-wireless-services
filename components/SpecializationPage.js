// components/SpecializationPage.js
import { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'

export default function SpecializationPage({ title, description, image, subInfo }) {
  const [activeSubInfo, setActiveSubInfo] = useState(null)

  return (
    <Layout title={title}>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">{title}</h1>
              <p className="mt-5 text-xl text-gray-500">{description}</p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {Object.entries(subInfo).map(([key, value]) => (
            <div key={key} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{key}</h3>
                <button
                  onClick={() => setActiveSubInfo(activeSubInfo === key ? null : key)}
                  className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                >
                  {activeSubInfo === key ? 'Hide Details' : 'Show Details'}
                </button>
                {activeSubInfo === key && (
                  <p className="mt-3 text-base text-gray-500">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}