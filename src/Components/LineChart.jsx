import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const { theme, primaryColor } = useTheme();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Students',
        data: [65, 59, 80, 81, 56, 72],
        borderColor: `rgb(59 130 246)`, // blue-500
        backgroundColor: `rgba(59, 130, 246, 0.2)`,
        tension: 0.1,
      },
      {
        label: 'Graduating Students',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: `rgb(16, 185, 129)`, // green-500
        backgroundColor: `rgba(16, 185, 129, 0.2)`,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme === 'dark' ? '#fff' : '#000',
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: theme === 'dark' ? '#fff' : '#000',
        },
      },
      y: {
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: theme === 'dark' ? '#fff' : '#000',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;