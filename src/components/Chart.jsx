import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ userCategories }) => {
  const chartData = {
    labels: Object.keys(userCategories),
    datasets: [
      {
        data: Object.values(userCategories),
        backgroundColor: ["#eab308", "#65a30d", "#1a2e05"],
        hoverBackgroundColor: ["#eab308", "#65a30d", "#1a2e05"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-zinc-700 font-semibold font-mono text-3xl mb-8 pl-11 lg:text-4xl">
        Your Category Result
      </h1>
      <Doughnut data={chartData} />
      <Link to="/" className=" mt-5 btn btn-accent btn-wide text-zinc-700">
        Retake Test{" "}
      </Link>
    </div>
  );
};

export default Chart;
