// components/Layout.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function MobileNavLink({ href, label }) {
  return (
    <Link href={href}>
      <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
        {label}
      </div>
    </Link>
  );
}

// Mobile accordion menu for dropdowns
function MobileNavAccordion({ label, links }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="pl-4 pr-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="block border-l-2 border-gray-200 pl-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md mt-1">
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout({ children, title }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title ? `${title} - One Wireless Solutions` : 'One Wireless Solutions'}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Seamless Wireless Connectivity for a Connected World" />
      </Head>

      <header className="bg-white shadow-md">
        {/* Top section with logo and contact info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3">
            {/* Logo and tagline - stacks nicely on mobile */}
            <div className="flex items-center mb-2 sm:mb-0">
              <Link href="/" className="flex-shrink-0">
                <img className="h-20 w-auto" src="/ows-logo-small.png" alt="One Wireless Solutions Logo" />
              </Link>
              <p className="ml-4 text-sm text-gray-600 hidden sm:block">One Wireless Services</p>
            </div>
            
            {/* Contact info - horizontal on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left">
              <p className="text-sm text-gray-600 mb-1 sm:mb-0">
                <span className="inline-block sm:hidden font-medium mr-2">Phone:</span>+1-704-421-0116
              </p>
              <p className="text-sm text-gray-600">
                <span className="inline-block sm:hidden font-medium mr-2">Email:</span>sales@onewirelessservices.com
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation section */}
        <nav className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <div className="sm:hidden py-3 flex justify-between items-center">
              <p className="text-sm text-gray-600">One Wireless Services</p>
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg 
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                
                {/* Icon when menu is open */}
                <svg 
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
              <div className="pt-2 pb-4 space-y-1">
                <MobileNavLink href="/" label="Home" />
                <MobileNavLink href="/about" label="About Us" />
                <MobileNavAccordion 
                  label="DAS Solutions" 
                  links={[
                    { href: '/das-solutions/in-building', label: 'In-Building DAS' },
                    { href: '/das-solutions/outdoor', label: 'Outdoor DAS' },
                    { href: '/das-solutions/applications', label: 'DAS Applications' },
                  ]} 
                />
                <MobileNavAccordion 
                  label="Services" 
                  links={[
                    { href: '/services/design-installation', label: 'Design & Installation' },
                    { href: '/services/maintenance-upgrades', label: 'Maintenance & Upgrades' },
                    { href: '/services/project-management', label: 'Project Management' },
                  ]} 
                />
                <MobileNavLink href="/network-fiber" label="Network & Fiber Optic Cabling" />
                <MobileNavLink href="/contact" label="Contact Us" />
              </div>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:space-x-4 py-3">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About Us" />
              <DropdownNavLink 
                label="DAS Solutions" 
                links={[
                  { href: '/das-solutions/in-building', label: 'In-Building DAS' },
                  { href: '/das-solutions/outdoor', label: 'Outdoor DAS' },
                  { href: '/das-solutions/applications', label: 'DAS Applications' },
                ]} 
              />
              <DropdownNavLink 
                label="Services" 
                links={[
                  { href: '/services/design-installation', label: 'Design & Installation' },
                  { href: '/services/maintenance-upgrades', label: 'Maintenance & Upgrades' },
                  { href: '/services/project-management', label: 'Project Management' },
                ]} 
              />
              <NavLink href="/network-fiber" label="Network & Fiber Optic Cabling" />
              <NavLink href="/contact" label="Contact Us" />
            </div>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">One Wireless Services</h3>
              <p className="text-sm text-gray-300">
                Providing seamless wireless connectivity solutions for businesses and organizations of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="/das-solutions" className="text-sm text-gray-300 hover:text-white">DAS Solutions</Link></li>
                <li><Link href="/services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
                <li><Link href="/network-fiber" className="text-sm text-gray-300 hover:text-white">Network & Fiber</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                <li><Link href="/about#corporate" className="text-sm text-gray-300 hover:text-white">Corporate</Link></li>
                <li><Link href="/about#government" className="text-sm text-gray-300 hover:text-white">Government</Link></li>
                <li><Link href="/about#healthcare" className="text-sm text-gray-300 hover:text-white">Healthcare</Link></li>
                <li><Link href="/about#retail" className="text-sm text-gray-300 hover:text-white">Retail</Link></li>
                <li><Link href="/about#public-safety" className="text-sm text-gray-300 hover:text-white">Public Safety</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300 mb-2">301 E 9th Street</p>
              <p className="text-sm text-gray-300 mb-2">Suite 316</p>
              <p className="text-sm text-gray-300 mb-2">Charlotte, NC 28202</p>
              <p className="text-sm text-gray-300 mb-2">sales@onewirelessservices.com</p>
              <p className="text-sm text-gray-300">+1-704-421-0116</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} One Wireless Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 px-3 py-4 text-sm font-medium">
      {label}
    </Link>
  )
}

function DropdownNavLink({ label, links }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-4 text-sm font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div 
          className="absolute z-50 left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ pointerEvents: 'auto' }} // Ensure mouse events work
        >
          <div className="py-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}