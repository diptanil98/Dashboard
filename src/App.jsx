import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/dashboard';
import AcademicCalendar from './Components/Calender';
import KanbanBoard  from './Components/KanbanBoard';
import  Students  from './Components/Student';
import Attendance from './Components/Attendance';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden ml-16 md:ml-56"> {/* Adjust for sidebar width */}
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 pt-20 md:pt-16"> {/* Adjust padding-top for navbar */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Calender" element={<AcademicCalendar />} />
                <Route path="/KanbanBoard" element={<KanbanBoard />} />
                <Route path="/Student" element={<Students />} />
                <Route path="/Attendance" element={<Attendance />} />
        
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;