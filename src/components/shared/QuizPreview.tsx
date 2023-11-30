import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"
import { quizAllList } from "@/constants/quizzes";
const QuizPreview = ({ usersAnswerArray, quizId }: { usersAnswerArray: number[], quizId: number }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuiz = quizAllList[quizId];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="h-[30px] w-1/2 m-auto">Open</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-black border-0">
                <DialogHeader className="bg-black">
                    <DialogTitle className="body-bold border-b border-neutral-700 rounded-sm py-2">{currentQuestionIndex + 1}. {currentQuiz.questions[currentQuestionIndex].question}</DialogTitle>
                    <div className="">
                        <p className="small-semibold text-white"> Правильный ответ:</p>
                        <p className="small-medium text-emerald-400">{currentQuiz.questions[currentQuestionIndex].answers[currentQuiz.questions[currentQuestionIndex].correctAnswer]}</p>
                        <div className="w-full h-[1px] bg-neutral-800 my-3"/>
                        <div className="">

                            <p className="small-semibold"> Ваш ответ:</p>
                            <p className="small-medium text-secondary-500">{currentQuiz.questions[currentQuestionIndex].answers[usersAnswerArray[currentQuestionIndex]]}</p>
                        </div>
                    </div>
                </DialogHeader>

                <DialogFooter>
                    <div className="flex-between w-full">
                        <Button disabled={currentQuestionIndex <= 0 ? true : false} onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}>Prev</Button>
                        <Button disabled={currentQuestionIndex === currentQuiz.questions.length - 1 ? true : false} onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}>Next</Button>
                    </div>

                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default QuizPreview