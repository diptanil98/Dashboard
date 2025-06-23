import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const { theme } = useTheme();

  const data = {
    labels: ['Computer Science', 'Engineering', 'Business', 'Arts', 'Medicine', 'Law'],
    datasets: [
      {
        label: 'Students Enrolled',
        data: [420, 380, 290, 150, 320, 180],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(20, 184, 166, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(20, 184, 166, 1)',
        ],
        borderWidth: 1,
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

  return <Bar data={data} options={options} />;
};

export default BarChart;