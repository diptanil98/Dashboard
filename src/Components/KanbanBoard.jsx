import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const initialTasks = {
  todo: [
    { id: 1, title: 'Review math homework', student: 'John Doe', priority: 'high', dueDate: '2023-06-15' },
    { id: 2, title: 'Prepare science project', student: 'Jane Smith', priority: 'medium', dueDate: '2023-06-18' },
  ],
  inProgress: [
    { id: 3, title: 'Grade history essays', student: 'Mike Johnson', priority: 'low', dueDate: '2023-06-20' },
  ],
  done: [
    { id: 4, title: 'Update attendance records', student: 'Sarah Williams', priority: 'medium', dueDate: '2023-06-10' },
  ],
};

export const KanbanBoard = () => {
  const { theme } = useTheme();
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('New Student');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [expandedTask, setExpandedTask] = useState(null);

  const students = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'New Student'];

  const onDragStart = (e, taskId, sourceColumn) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const onDrop = (e, targetColumn) => {
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    const sourceColumn = e.dataTransfer.getData('sourceColumn');

    if (sourceColumn !== targetColumn) {
      const taskToMove = tasks[sourceColumn].find(task => task.id === taskId);
      const newSourceTasks = tasks[sourceColumn].filter(task => task.id !== taskId);
      const newTargetTasks = [...tasks[targetColumn], taskToMove];

      setTasks({
        ...tasks,
        [sourceColumn]: newSourceTasks,
        [targetColumn]: newTargetTasks,
      });
    }
  };

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        student: selectedStudent,
        priority,
        dueDate: dueDate || null,
      };

      setTasks({
        ...tasks,
        todo: [...tasks.todo, newTaskObj],
      });

      // Reset form
      setNewTask('');
      setSelectedStudent('New Student');
      setPriority('medium');
      setDueDate('');
    }
  };

  const deleteTask = (columnId, taskId) => {
    setTasks({
      ...tasks,
      [columnId]: tasks[columnId].filter(task => task.id !== taskId),
    });
  };

  const toggleTaskExpand = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const Column = ({ title, tasks, columnId }) => {
    const columnColors = {
      todo: theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20',
      inProgress: theme === 'light' ? 'bg-yellow-50' : 'bg-yellow-900/20',
      done: theme === 'light' ? 'bg-green-50' : 'bg-green-900/20',
    };

    const headerColors = {
      todo: 'bg-blue-100 dark:bg-blue-800',
      inProgress: 'bg-yellow-100 dark:bg-yellow-800',
      done: 'bg-green-100 dark:bg-green-800',
    };

    return (
      <div
        className={`rounded-lg flex-1 flex flex-col min-h-[400px] ${columnColors[columnId]}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, columnId)}
      >
        <div className={`p-3 rounded-t-lg ${headerColors[columnId]} flex justify-between items-center`}>
          <h3 className="font-semibold">{title}</h3>
          <span className="text-sm px-2 py-1 rounded-full bg-white dark:bg-gray-700">
            {tasks.length} tasks
          </span>
        </div>
        <div className="p-3 space-y-3 flex-1 overflow-y-auto">
          {tasks.length === 0 ? (
            <div className={`p-4 text-center rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} text-gray-500 dark:text-gray-400`}>
              No tasks here
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 rounded-lg shadow-sm ${theme === 'light' ? 'bg-white' : 'bg-gray-600'} border-l-4 ${
                  task.priority === 'high' ? 'border-red-500' : 
                  task.priority === 'medium' ? 'border-yellow-500' : 'border-gray-500'
                }`}
                draggable
                onDragStart={(e) => onDragStart(e, task.id, columnId)}
              >
                <div 
                  className="cursor-pointer" 
                  onClick={() => toggleTaskExpand(task.id)}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium">{task.title}</p>
                    {task.dueDate && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        new Date(task.dueDate) < new Date() && columnId !== 'done' ? 
                        'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200' : 
                        'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-80 mt-1">{task.student}</p>
                </div>

                {expandedTask === task.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-500">
                    <div className="flex justify-between items-center text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.priority === 'high' ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200' :
                        task.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200' :
                        'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {task.priority} priority
                      </span>
                      <button 
                        onClick={() => deleteTask(columnId, task.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-6`}>
      <h1 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Task Management Board</h1>
      
      <div className={`p-4 rounded-lg mb-6 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
        <h2 className="font-semibold mb-3">Add New Task</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Task title..."
            className={`px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'} col-span-1 md:col-span-2`}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <select
            className={`px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            {students.map(student => (
              <option key={student} value={student}>{student}</option>
            ))}
          </select>
          <select
            className={`px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <input
            type="date"
            className={`px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-600 text-white'}`}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-colors col-span-1 md:col-span-4"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Column title="To Do" tasks={tasks.todo} columnId="todo" />
        <Column title="In Progress" tasks={tasks.inProgress} columnId="inProgress" />
        <Column title="Done" tasks={tasks.done} columnId="done" />
      </div>
    </div>
  );
};

export default KanbanBoard;