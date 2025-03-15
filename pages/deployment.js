import SpecializationPage from '../components/SpecializationPage'

const deploymentInfo = {
  'Site Acquisition': 'We handle all aspects of site acquisition for your wireless infrastructure needs.',
  'Equipment Installation': 'Our team of technicians ensure proper installation of all wireless equipment.',
  'Network Rollout': 'We manage end-to-end network rollout projects, ensuring timely and efficient deployment.',
  'Testing and Verification': 'Our rigorous testing and verification processes ensure your network performs as designed.'
}

export default function Deployment() {
  return (
    <SpecializationPage
      title="Deployment"
      description="Efficient and reliable wireless network deployment services"
      subInfo={deploymentInfo}
    />
  )
}