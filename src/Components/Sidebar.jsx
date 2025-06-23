import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';


const Sidebar = () => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: '/', icon: '🏠', name: 'Dashboard' },
    { path: '/Student', icon: '👨‍🎓', name: 'Students' },
    { path: '/Calender', icon: '📚', name: 'Calender' },
    { path: '/KanbanBoard', icon: '✅', name: 'Kanban Board    ' },
    { path: '/Attendance', icon: '📊', name: 'Attendance' },
    { path: '/schedule', icon: '🗓️', name: 'Schedule' },
    { path: '/settings', icon: '⚙️', name: 'Settings' },
  ];

  return (
    <aside
  className={`
    ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
    h-screen flex flex-col shadow-xl transition-all duration-300
    ${collapsed ? 'w-16' : 'w-56'}
    fixed top-0 left-0 z-30  // Lower z-index than navbar
    border-r border-gray-200 dark:border-gray-800
  `}
>
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200 dark:border-gray-800">
        <span className={`font-extrabold text-lg tracking-tight transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>
          <span className="inline-block align-middle text-2xl mr-2">🎓</span>
          <span className="align-middle">College</span>
        </span>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Sidebar"
        >
          <svg
            className={`w-5 h-5 transform transition-transform ${collapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
                  ${isActive
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-semibold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`${collapsed ? 'hidden' : 'inline'} transition-all duration-300`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Footer */}
      <div className={`px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-xs ${collapsed ? 'hidden' : 'block'}`}>
        &copy; {new Date().getFullYear()} College Admin
      </div>
    </aside>
  );
};

export default Sidebar;