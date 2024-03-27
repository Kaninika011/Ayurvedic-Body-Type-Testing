import { useState, useEffect, useMemo } from "react";
import bg from "../assets/ayurveda.jpg";
import Chart from "./Chart";
import OptionsPanel from "./OptionsPanel";
import QuizInfo from "./Quizinfo";

function Quiz({ Questions }) {
  const [currQuesIdx, setCurrQuesIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [userCategories, setUserCategories] = useState({
    Vata: 0,
    Pitta: 0,
    Kapha: 0,
  });
  const [quizOver, setQuizOver] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  console.log("loader", showLoader);
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
    setShowLoader(false);
    if (currQuesIdx !== Questions.questions.length - 1) {
      setCurrQuesIdx((c) => c + 1);
    }
  };

  const handleSubmit = () => {
    setShowLoader(true);
    setQuizOver(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  };

  // const shouldShowLoader = useMemo(() => {
  //   if (quizOver && showLoader) {
  //     return true;
  //   }
  //   return false;
  // }, [quizOver, showLoader]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-sky-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})`, filter: "blur(7px)" }}
      />
      <div className="relative flex flex-col items-center justify-center z-10">
        {!quizOver ? (
          <>
            <QuizInfo />
            <div className="flex flex-col items-center justify-center card w-96 glass shadow-xl mt-6">
              <div className="card-body">
                <div className="text-xl sm:text-md mb-4 mt-10 text-sky-100 font-medium">
                  {currentQues.question}
                </div>
                <OptionsPanel
                  options={currentQues.options}
                  selectedOpt={selectedOpt}
                  handleOption={handleOption}
                />
              </div>
            </div>
            <div className="mt-8">
              {currQuesIdx === Questions.questions.length - 1 ? (
                <button
                  className="btn btn-accent text-sky-950"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="btn btn-accent text-sky-950"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : showLoader ? (
          <span className="loading loading-dots loading-lg text-sky-100">
            {" "}
            Analysing your results..{" "}
          </span>
        ) : (
          <Chart userCategories={userCategories} />
        )}
      </div>
    </div>
  );
}

export default Quiz;
