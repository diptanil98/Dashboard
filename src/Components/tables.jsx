import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const studentsData = [
  { id: 1, name: 'Diptanil Sarkar', Branch: 'Computer Science', email: 'diptanil@example.com', attendance: '95%' },
  { id: 2, name: 'Gaurav', Branch: 'AI/ML', email: 'gaurav@example.com', attendance: '98%' },
  { id: 3, name: 'Aaditya Rana', Branch: 'IT', email: 'aaditya@example.com', attendance: '89%' },
  { id: 4, name: 'Aditi Tyagi', Branch: 'Pharma', email: 'aditi@example.com', attendance: '92%' },
  { id: 5, name: 'Tanmay Gupta', Branch: 'Computer Science', email: 'tanmay@example.com', attendance: '91%' },
];

export const StudentTable = () => {
  const { theme } = useTheme();
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`rounded-lg overflow-hidden shadow ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search students..."
          className={`px-4 py-2 rounded-lg w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700 text-white'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Attendance</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.Branch}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.attendance}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-primary-light dark:text-primary-dark mr-2">Edit</button>
                  <button className="text-secondary-light dark:text-secondary-dark">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentTable;