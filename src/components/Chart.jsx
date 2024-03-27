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
        backgroundColor: ["#67e8f9", "#075985", "#1e3a8a"],
        hoverBackgroundColor: ["#67e8f9", "#075985", "#1e3a8a"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className=" text-sky-100 font-semibold font-mono text-3xl mb-8  lg:text-4xl">
        Your Test Result
      </h1>
      <Doughnut data={chartData} />
      <Link to="/" className=" mt-5 btn btn-accent btn-wide  text-sky-950">
        Retake Test{" "}
      </Link>
    </div>
  );
};

export default Chart;
