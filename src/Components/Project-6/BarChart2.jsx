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
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Legend,
  Tooltip
);

const BarChart2 = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=10&select=title,price,rating"
    );
    const data = await res.json();
    setChartData(data.products);
  };
  console.log(chartData);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dynamic Bar Chart with Data from a Dummy API",
      },
    },
  };

  const data = {
    labels: chartData.map((val) => val.title),
    datasets: [
      {
        label: "Price",
        data: chartData.map((val) => val.price),
        backgroundColor: "#F79489",
      },
      {
        label: "Rating",
        data: chartData.map((val) => val.rating),
        backgroundColor: "#F8AFA6",
      },
    ],
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <div className=" w-[1000px] h-[500px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart2;
