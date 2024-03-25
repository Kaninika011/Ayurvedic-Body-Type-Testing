import { useState, useEffect } from "react";
import plantIcon from "../assets/plant-icon.png";
import Chart from "./Chart";

function Quiz({ Questions }) {
  // const [timeLeft, setTimeLeft] = useState(30);
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
      setCurrQuesIdx((c) => c + 1);
    }
  };

  const handleSubmit = () => {
    console.log("userCategories:", userCategories);
    setQuizOver(true);
  };

  // useEffect(() => {
  //   const timer =
  //     timeLeft > 0 &&
  //     setInterval(() => {
  //       setTimeLeft((t) => t - 1);
  //       if (timeLeft === 1) {
  //         handleNext();
  //       }
  //     }, 1000);
  //   return () => clearInterval(timer);
  // }, [timeLeft, handleNext]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!quizOver ? (
        <>
          <div className="justify-center">
            <h1 className=" text-zinc-700 font-semibold font-mono text-3xl mb-8 pl-11 lg:text-5xl">
              {" "}
              Know who you are...
            </h1>
            <ul className=" text-zinc-700 list-none font-medium ">
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
                Kapha: Characteristics of an individual, defined as heavy, slow,
                stable, cool, and smooth.{" "}
              </li>
            </ul>
          </div>
          <div className="text-xl sm: text-md mb-4 mt-10 text-zinc-700 font-medium">
            {currentQues.question}
          </div>
          <div className="flex flex-col text-zinc-700 ">
            {currentQues.options.map((opt, i) => (
              <div
                key={i}
                className={`flex items-center mb-2 cursor-pointer border-2 p-2 rounded ${
                  i === selectedOpt ? "border-lime-500" : "border-gray-400"
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
              <button
                className="btn btn-accent  text-zinc-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className="btn btn-accent  text-zinc-700"
                onClick={handleNext}
              >
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
