import { useState } from "react";
import Questions from "../Data/Questions";
import Quiz from "../components/Quiz";

function QuizPage() {
  const [questions, setQuestions] = useState(Questions);
  return (
    <>
      <Quiz Questions={questions} />
    </>
  );
}
export default QuizPage;
