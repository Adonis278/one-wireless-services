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