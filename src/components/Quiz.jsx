import { useState, useEffect } from "react";
import plantIcon from "../assets/plant-icon.png";
import bg from "../assets/ayurveda.jpg";
import Chart from "./Chart";

function Quiz({ Questions }) {
  const [currQuesIdx, setCurrQuesIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [userCategories, setUserCategories] = useState({
    Vata: 0,
    Pitta: 0,
    Kapha: 0,
  });
  const [quizOver, setQuizOver] = useState(false);
  //Loader
  const [showLoader, setShowLoader] = useState(false);

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
      setCurrQuesIdx((c) => c + 1);
    }
  };

  const handleSubmit = () => {
    setShowLoader(true);
    setTimeout(() => {
      setQuizOver(true);
      setShowLoader(false);
    }, 5000);
  };

  return (
    <div className="relative flex flex-col items-center h-screen bg-sky-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})`, filter: "blur(7px)" }}
      />
      <div className="relative flex flex-col items-center justify-center z-10">
        {!quizOver ? (
          <>
            <div className="flex pb-6 pt-6 justify-center items-center bg-sky-200">
              <ul className="flex text-sky-950 list-none font-medium">
                <li className="flex items-center">
                  <img
                    src={plantIcon}
                    alt="Plant Icon"
                    className="w-7 h-7 mr-1"
                  />
                  Vata: Characteristics of an individual, defined as dry, rough,
                  cold, light, and clear.
                </li>
                <li className="flex items-center">
                  <img
                    src={plantIcon}
                    alt="Plant Icon"
                    className="w-7 h-7 mr-1"
                  />
                  Pitta: Characteristics of an individual, defined as intense,
                  driven, sharp, and energetic.{" "}
                </li>
                <li className="flex items-center">
                  <img
                    src={plantIcon}
                    alt="Plant Icon"
                    className="w-7 h-7 mr-1"
                  />
                  Kapha: Characteristics of an individual, defined as heavy,
                  slow, stable, cool, and smooth.{" "}
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center card w-96 glass shadow-xl mt-6">
              <div className="card-body">
                <div className="text-xl sm:text-md mb-4 mt-10 text-sky-100 font-medium">
                  {currentQues.question}
                </div>
                <div className="flex flex-col text-sky-100">
                  {currentQues.options.map((opt, i) => (
                    <div
                      key={i}
                      className={`flex items-center mb-2 cursor-pointer border-2 p-2 rounded ${
                        i === selectedOpt
                          ? "border-lime-300"
                          : "border-gray-400"
                      }`}
                      onClick={() => handleOption(i)}
                    >
                      <input
                        type="checkbox"
                        checked={i === selectedOpt}
                        className="checkbox checkbox-secondary mr-2"
                      />
                      <span>{opt.option}</span>
                    </div>
                  ))}
                </div>
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
        ) : (
          <>
            {showLoader ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              <Chart userCategories={userCategories} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default Quiz;
