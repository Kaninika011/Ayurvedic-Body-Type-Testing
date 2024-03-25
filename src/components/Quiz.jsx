import { useState, useEffect } from "react";
import Chart from "./Chart";

function Quiz({ Questions }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [currQuesIdx, setCurrQuesIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [userCategories, setUserCategories] = useState({
    Vata: 0,
    Pitta: 0,
    Kapha: 0,
  });
  const [quizOver, setQuizOver] = useState(false);
  const currentQues = Questions.questions[currQuesIdx];

  const handleOption = (optionIndex) => {
    setSelectedOpt(optionIndex);
    const selectedOption = currentQues.options[optionIndex];
    const category = selectedOption.category;
    setUserCategories((prevCategories) => ({
      ...prevCategories,
      [category]: prevCategories[category] + 1,
    }));
  };

  const handleNext = () => {
    setSelectedOpt(null);
    if (currQuesIdx !== Questions.questions.length - 1) {
      setTimeLeft(30);
      setCurrQuesIdx((c) => c + 1);
    }
  };

  const handleSubmit = () => {
    console.log("userCategories:", userCategories);
    setQuizOver(true);
  };

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft((t) => t - 1);
        if (timeLeft === 1) {
          handleNext();
        }
      }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleNext]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!quizOver ? (
        <>
          <div className="text-6xl font-mono mb-8">
            <span style={{ "--value": `${timeLeft}` }}>{timeLeft}</span>
          </div>
          <div className="text-xl mb-4">{currentQues.question}</div>
          <div className="flex flex-col">
            {currentQues.options.map((opt, i) => (
              <div
                key={i}
                className={`flex items-center mb-2 cursor-pointer border-2 p-2 rounded ${
                  i === selectedOpt ? "border-red-500" : "border-gray-400"
                }`}
                onClick={() => handleOption(i)}
              >
                <input
                  type="checkbox"
                  checked={i === selectedOpt}
                  readOnly
                  className="checkbox checkbox-secondary mr-2"
                />
                <span>{opt.option}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            {currQuesIdx === Questions.questions.length - 1 ? (
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <Chart userCategories={userCategories} />
      )}
    </div>
  );
}

export default Quiz;
