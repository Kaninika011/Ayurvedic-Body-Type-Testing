import { Pie } from "react-chartjs-2";

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
      <Pie data={chartData} />
    </div>
  );
};

export default Chart;
