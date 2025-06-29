import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
<header
  className={`
    flex items-center justify-between px-6 py-3 shadow-md
    ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
    fixed top-0 left-0 right-0 z-20
  `}
  style={{ height: '60px' }}
>
    
      <div className="flex items-center gap-2 font-bold text-lg">
        <span role="img" aria-label="logo">🎓</span>
        <span>College Admin</span>
      </div>

      
      <div className="flex items-center gap-4">
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          D
        </div>
      </div>
    </header>
  );
};

export default Navbar;