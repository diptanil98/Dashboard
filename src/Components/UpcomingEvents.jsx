import { useTheme } from '../context/ThemeContext';

const UpcomingEvents = () => {
  const { theme } = useTheme();
  
  const events = [
    { id: 1, title: 'Semester Exams', date: '2025-10-15', type: 'exam' },
    { id: 2, title: 'Faculty Meeting', date: '2025-10-20', type: 'meeting' },
    { id: 3, title: 'Career Fair', date: '2025-11-22', type: 'event' },
    { id: 4, title: 'Final Project Submission', date: '2025-12-30', type: 'deadline' },
    { id: 5, title: 'Sports Day', date: '2026-12-05', type: 'event' },
  ];
  
  const getEventIcon = (type) => {
    switch(type) {
      case 'exam': return '📝';
      case 'meeting': return '👥';
      case 'event': return '🎉';
      case 'deadline': return '⏰';
      default: return '📅';
    }
  };
  
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
          <div className="mr-3 mt-1">
            <span className="text-xl">{getEventIcon(event.type)}</span>
          </div>
          <div className="flex-1">
            <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {event.title}
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {formatDate(event.date)}
            </p>
          </div>
          <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;