import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme, primaryColor, changePrimaryColor } = useTheme();
  
  const colors = [
    'blue', 'indigo', 'purple', 'pink', 
    'red', 'orange', 'yellow', 'green', 
    'teal', 'cyan'
  ];

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <div className="relative group">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          🎨
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium">Primary Color</p>
          </div>
          <div className="grid grid-cols-5 gap-2 p-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => changePrimaryColor(color)}
                className={`h-6 w-6 rounded-full bg-${color}-500 ${primaryColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                title={color}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;