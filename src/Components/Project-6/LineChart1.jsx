import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LineChart1 = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "Weekdays",
        data: [30, 33, 66],
        borderColor: "aqua",
        backgroundColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <Link to="/linechart">
        <p className="bg-orange-400 w-fit px-2 py-1 rounded-sm m-2 text-black">
          Back
        </p>
      </Link>

      <div className=" w-[1000px] h-[500px] p-10">
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default LineChart1;
