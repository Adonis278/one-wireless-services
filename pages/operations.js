import SpecializationPage from '../components/SpecializationPage'

const operationsInfo = {
  'Network Monitoring': 'We provide 24/7 network monitoring services to ensure optimal performance.',
  'Maintenance': 'Our maintenance services keep your wireless infrastructure running smoothly.',
  'Troubleshooting': 'Our expert technicians quickly identify and resolve any network issues.',
  'Performance Analytics': 'We offer detailed performance analytics to help you make data-driven decisions.'
}

export default function Operations() {
  return (
    <SpecializationPage
      title="Operations"
      description="Comprehensive wireless network operations and management"
      subInfo={operationsInfo}
    />
  )
}