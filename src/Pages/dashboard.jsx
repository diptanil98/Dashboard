import { useTheme } from '../context/ThemeContext';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import UpcomingEvents from '../components/UpcomingEvents';


const Dashboard = () => {
    const { theme, primaryColor } = useTheme();

  return (
    <div className="space-y-6 w-full px-4"> 
      <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-1000'}`}>
        Dashboard Overview
      </h1>
      
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-semibold mb-4">Enrollment Trends</h2>
          <LineChart />
        </div>
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-semibold mb-4">Course Distribution</h2>
          <BarChart />
        </div>

      </div>
      
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} lg:col-span-2`}>
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;