import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const LineChart2 = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=10&select=title,price"
    );
    const data = await res.json();
    setChartData(data.products);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dynamic Line Chart with Data from a Dummy API",
      },
    },
  };

  const data = {
    labels: chartData.map((val) => val.title),
    datasets: [
      {
        label: "Products Price",
        data: chartData.map((val) => val.price),
        borderColor: "rgb(255,99,132)",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.3)",
        tension: 0.4,
      },
    ],
  };
  return (
    <>
      <Link to="/linechart">
        <p className="bg-orange-400 w-fit px-2 py-1 rounded-sm m-2 text-black">
          Back
        </p>
      </Link>
      <div className="flex justify-center h-screen items-center">
        <div className=" w-[900px] h-[400px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default LineChart2;
