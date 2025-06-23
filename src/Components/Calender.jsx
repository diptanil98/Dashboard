import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const events = [
  { id: 1, title: 'Math Exam', date: '2023-06-15', type: 'exam' },
  { id: 2, title: 'Science Fair', date: '2023-06-20', type: 'event' },
  { id: 3, title: 'Parent-Teacher Meeting', date: '2023-06-25', type: 'meeting' },
  { id: 4, title: 'Sports Day', date: '2023-06-30', type: 'event' },
];

export const AcademicCalendar = () => {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: 'event' });

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleAddEvent = () => {
    // In a real app, you would add the event to your state or API
    console.log('Adding event:', newEvent);
    setShowEventForm(false);
    setNewEvent({ title: '', date: '', type: 'event' });
  };

  const getEventsForDay = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'bg-red-500';
      case 'event': return 'bg-blue-500';
      case 'meeting': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-4`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{monthNames[currentMonth]} {currentYear}</h2>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 rounded bg-primary-light dark:bg-primary-dark text-black"
            onClick={prevMonth}
          >
            &lt;
          </button>
          <button
            className="px-3 py-1 rounded bg-primary-light dark:bg-primary-dark text-black"
            onClick={nextMonth}
          >
            &gt;
          </button>
          <button
            className="px-3 py-1 rounded bg-secondary-light dark:bg-secondary-dark text-black"
            onClick={() => setShowEventForm(true)}
          >
            + Event
          </button>
        </div>
      </div>

      {showEventForm && (
        <div className={`mb-4 p-4 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
          <h3 className="font-semibold mb-2">Add New Event</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Event title"
              className={`w-full px-3 py-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="date"
              className={`w-full px-3 py-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <select
              className={`w-full px-3 py-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
            >
              <option value="event">Event</option>
              <option value="exam">Exam</option>
              <option value="meeting">Meeting</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-600"
                onClick={() => setShowEventForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 rounded bg-primary-light dark:bg-primary-dark text-white"
                onClick={handleAddEvent}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold py-2">
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-20"></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dayEvents = getEventsForDay(day);
          return (
            <div
              key={day}
              className={`min-h-20 p-1 border rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}
            >
              <div className="text-right">{day}</div>
              <div className="space-y-1 mt-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`text-xs p-1 rounded text-white ${getTypeColor(event.type)}`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AcademicCalendar;