import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Legend,
  Tooltip
);

const BarChart1 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar chart for Hardcoded data",
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Present",
        data: [20, 40, 35],
        backgroundColor: "#F79489",
      },
      {
        label: "Abesent",
        data: [2, 4, 3],
        backgroundColor: "#F8AFA6",
      },
    ],
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <div className=" w-[800px] h-[400px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart1;
