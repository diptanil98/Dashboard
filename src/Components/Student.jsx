import StudentTable from './tables';
import  {useTheme } from '../context/ThemeContext';

 const Students = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} p-6 rounded-lg`}>
      <h1 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Student Management</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Student List</h2>
        <StudentTable />
      </div>
    </div>
  );
};
export default Students;