import SpecializationPage from '../components/SpecializationPage'

const engineeringInfo = {
  'Network Design': 'Our team of expert engineers design optimized wireless network architectures.',
  'RF Planning': 'We provide comprehensive RF planning services to ensure maximum coverage and capacity.',
  'System Integration': 'Our system integration services seamlessly combine various wireless technologies.',
  'Performance Optimization': 'We optimize your wireless networks for peak performance and efficiency.'
}

export default function Engineering() {
  return (
    <SpecializationPage
      title="Engineering"
      description="Expert engineering services for wireless infrastructure"
      subInfo={engineeringInfo}
    />
  )
}