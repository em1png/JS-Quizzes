import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { quizAllList } from "@/constants/quizzes";
import { useUserContext } from "@/context/AuthContext";
import { useSaveAnswers } from "@/lib/react-query/queriesAndMutations";
import { IQuiz } from "@/types";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { toast } = useToast();
  const [answersArray, setAnswersArray] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const { id } = useParams();
  if (!id) {
    toast({ variant: "destructive", title: `Quiz not found!` });
    return (<h3 className="h3-bold">Quiz not found</h3>)
  }
  const quizArray: IQuiz = quizAllList[+id];
  const maxQuestionIndex = quizArray.questions.length;

  const chooseAnswer = (index: number) => {
    if (index === quizArray.questions[currentQuestionIndex].correctAnswer) setCorrectAnswers((prev) => prev + 1);
    setAnswersArray([...answersArray, index]);
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  const resetQuiz = () => {
    setAnswersArray([]);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
  }
  return (
    <div className='container flex flex-col items-center justify-start'>
      {currentQuestionIndex >= maxQuestionIndex ?
        <>
          <QuizPageResult arrayAnswer={answersArray} correctAnswers={correctAnswers} quizId={id} />
        </>
        :
        <>
          <div className="h3-bold border border-white p-2 w-1/2 rounded-xl mb-5 bg-white text-black">
            <p className="text-center">{quizArray.questions[currentQuestionIndex].question}</p>
          </div>

          <ul className="flex-center flex-col w-full space-y-5">
            {quizArray.questions[currentQuestionIndex].answers.map((answer, index) => (
              <li
                key={answer}
                onClick={() => chooseAnswer(index)}
                className="border border-neutral-800 p-2 px-5 rounded-xl w-1/2 cursor-pointer hover:bg-neutral-900 transition-colors"
              >
                <p className="small-semibold">{index + 1}. {answer}</p>
              </li>
            ))}
          </ul>
        </>
      }

      <Button onClick={resetQuiz} variant='outline' className="mt-5">Reset</Button>
    </div>
  )
}

const QuizPageResult = ({ arrayAnswer, correctAnswers, quizId }: { arrayAnswer: number[], correctAnswers: number, quizId: string }) => {
  const { user } = useUserContext()
  const { mutateAsync: saveAnswers } = useSaveAnswers();

  useEffect(() => {
    saveAnswers({ questionId: quizId, answers: arrayAnswer, correctAnswers: correctAnswers, userId: user.id });
  }, []);

  return (
    <>
      <h2 className="h2-bold mb-5">Result</h2>

      {quizAllList[+quizId].questions.map((questionItem, index) => (
        <div key={questionItem.question} className="w-1/2 border border-neutral-700 rounded-xl mb-5 p-3">
          <h3 className="body-bold">{questionItem.question}</h3>
          <p className={`small-semibold ${questionItem.correctAnswer === arrayAnswer[index] ? `text-green-400` : 'text-rose-400'}`}>{questionItem.answers[arrayAnswer[index]]}</p>
        </div>
      ))}

    </>
  )
}

export default QuizPage