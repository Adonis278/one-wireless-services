// pages/technology.js
import SpecializationPage from '../components/SpecializationPage'

const technologyInfo = {
  '5G Networks': 'We specialize in designing and implementing cutting-edge 5G network solutions, ensuring high-speed connectivity and low latency for next-generation applications.',
  'IoT Integration': 'Our IoT integration services help businesses connect and manage their smart devices efficiently, enabling data-driven decision making and automation.',
  'Network Security': 'We provide robust security solutions to protect your wireless networks from cyber threats, ensuring data integrity and confidentiality.',
  'Cloud Services': 'Our cloud services enable seamless integration of wireless technologies with cloud platforms, facilitating scalability and flexibility in your operations.'
}

export default function Technology() {
  return (
    <SpecializationPage
      title="Technology"
      description="Advanced wireless technology solutions for modern businesses"
      image="/images/technology-hero.jpg"
      subInfo={technologyInfo}
    />
  )
}