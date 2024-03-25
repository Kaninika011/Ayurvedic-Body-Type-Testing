import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ userCategories }) => {
  const chartData = {
    labels: Object.keys(userCategories),
    datasets: [
      {
        data: Object.values(userCategories),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2>Your Category Result</h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default Chart;
