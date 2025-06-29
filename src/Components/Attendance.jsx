import { useTheme } from '../context/ThemeContext';
import BarChart from '../components/BarChart';


const attendanceData = [
  { date: '2025-06-01', present: 85, absent: 15, branch: 'Computer Science' },
  { date: '2025-06-02', present: 88, absent: 12, branch: 'Computer Science' },
  { date: '2025-06-03', present: 82, absent: 18, branch: 'Computer Science' },
  { date: '2025-06-04', present: 90, absent: 10, branch: 'Computer Science' },
  { date: '2025-06-05', present: 87, absent: 13, branch: 'Computer Science' },
];

export const Attendance = () => {
  const { theme } = useTheme();
  const todayAttendance = { present: 45, absent: 5, total: 50, percentage: 92 };
  const monthlyAverage = { percentage: 89, trend: 'up', change: 2 };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} p-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">Attendance Management</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track and manage student attendance records
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Export Data
            </button>
            <button className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-black rounded-lg hover:bg-opacity-90 transition-colors shadow-md">
              Take Attendance
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border-l-4 border-green-500`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-300 mb-1">Today's Attendance</h3>
                <p className="text-4xl font-bold text-green-500">{todayAttendance.percentage}%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {todayAttendance.present}/{todayAttendance.total} students present
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                Good
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full" 
                  style={{ width: `${todayAttendance.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border-l-4 border-blue-500`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-300 mb-1">Monthly Average</h3>
                <p className="text-4xl font-bold text-blue-500">{monthlyAverage.percentage}%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {monthlyAverage.trend === 'up' ? '+' : '-'}{monthlyAverage.change}% from last month
                </p>
              </div>
              <div className={`${monthlyAverage.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300'} px-3 py-1 rounded-full text-xs font-medium`}>
                {monthlyAverage.trend === 'up' ? 'Improving' : 'Declining'}
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${monthlyAverage.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border-l-4 border-red-500`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-300 mb-1">Absent Today</h3>
                <p className="text-4xl font-bold text-red-500">{todayAttendance.absent}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {todayAttendance.absent - 2} without notice
                </p>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium">
                Needs Attention
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full" 
                  style={{ width: `${(todayAttendance.absent / todayAttendance.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 rounded-xl overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Attendance Trend
              </h2>
              <select 
                className={`text-sm rounded-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} px-3 py-1`}
                defaultValue="week"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="p-6">
              <BarChart 
                data={attendanceData.map(day => ({
                  grade: day.date,
                  count: Math.round((day.present / (day.present + day.absent)) * 100)
                }))} 
                theme={theme}
              />
            </div>
          </div>
          <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Recent Activity
              </h2>
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                {attendanceData.slice(0, 4).map((day, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
                      {/* You can put an emoji or leave it empty */}
                      <span
  role="img"
  aria-label="calendar"
  className={`text-lg ${theme === 'light' ? 'text-gray-800' : 'text-text-dark'}`}
>
  📅
</span>
                    </div>
                    <div>
                      <p className="font-medium">{day.date}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-green-500">{day.present} present</span>,{' '}
                        <span className="text-red-500">{day.absent} absent</span>
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${(day.present / (day.present + day.absent)) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">
                          {Math.round((day.present / (day.present + day.absent)) * 100)}%
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 py-2 text-sm font-medium text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              </button>
            </div>
          </div>
        </div>

        
        <div className={`mt-8 rounded-xl overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Attendance Records</h2>
            <div className="flex gap-2">
              <select 
                className={`text-sm rounded-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} px-3 py-1`}
                defaultValue="all"
              >
                <option value="all">All Branches</option>
                <option value="cs">Computer Science</option>
                <option value="it">Information Technology</option>
              </select>
              <input 
                type="date" 
                className={`text-sm rounded-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} px-3 py-1`}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'} text-left`}>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-tl-lg">Date</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Present</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Absent</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-tr-lg">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {attendanceData.map((day, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{day.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{day.branch}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-500 font-medium">{day.present}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-500 font-medium">{day.absent}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${(day.present / (day.present + day.absent)) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">
                          {Math.round((day.present / (day.present + day.absent)) * 100)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`px-6 py-3 flex justify-between items-center ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'} rounded-b-lg`}>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to 5 of 25 entries
            </span>
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-600 text-sm">Previous</button>
              <button className="px-3 py-1 rounded-md bg-primary-light dark:bg-primary-dark text-white text-sm">1</button>
              <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-600 text-sm">2</button>
              <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-600 text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;