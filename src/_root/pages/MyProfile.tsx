import { quizAllList } from '@/constants/quizzes';
import { useUserContext } from '@/context/AuthContext';
import QuizPreview from '@/components/shared/QuizPreview';
import { useGetCurrentUser } from '@/lib/react-query/queriesAndMutations';
import Loader from '@/components/shared/Loader';

const MyProfile = () => {
  const { user } = useUserContext();
  const { data: userData, isLoading } = useGetCurrentUser();

  return (
    <section className='container'>
      <h2 className='h2-bold mb-5 py-2 px-5 bg-white text-black rounded-xl'>{user.username}</h2>

      <div className='grid grid-cols-4 gap-3'>

        <div className='rounded-xl border border-neutral-800 p-3 flex-center mb-5'>
          <h3 className='text-[46px] font-bold leading-[140%] tracking-tighter mr-2 text-emerald-400'>{userData?.answers?.length}</h3>
          <div>
            <p className='body-bold'>Quizzes</p>
            <p className='small-semibold text-white/80'>completed</p>
          </div>
        </div>

        <div className='rounded-xl border border-neutral-800 p-3 flex-center mb-5'>
          <h3 className='text-[46px] font-bold leading-[140%] tracking-tighter mr-2 text-emerald-400'>{userData?.answers?.filter((item: { correctAnswers : number} ) => item.correctAnswers === 10).length}</h3>
          <div>
            <p className='body-bold'>Perfect</p>
            <p className='small-semibold text-white/80'> quizzes</p>
          </div>
        </div>

        <div className='rounded-xl border border-neutral-800 p-3 flex-center mb-5'>
          <h3 className='text-[46px] font-bold leading-[140%] tracking-tighter mr-2 text-emerald-400'>{userData?.answers?.length > 0 ? Math.round(userData?.answers?.reduce((acc: number, value: { correctAnswers : number}) => acc + value.correctAnswers, 0) / userData?.answers?.length * 10) : 0}%</h3>
          <div>
            <p className='body-bold'>Correct</p>
            <p className='small-semibold text-white/80'> answers</p>
          </div>
        </div>

      </div>

      <div className='w-full border border-neutral-900 p-3 rounded-xl'>
        <h3 className='h2-bold mb-3 rounded-xl'>Last quizzes</h3>

        <div className='grid grid-cols-[100px_3fr_1fr_3fr_2fr] gap-3 w-full text-center mb-2 text-white/90'>
          <p className='body-bold'>Date</p>
          <p className='body-bold'>Quiz</p>
          <p className='body-bold'>Correct</p>
          <p className='body-bold'>Answers</p>
          <p className='body-bold'>Link</p>
        </div>

        {isLoading ? <Loader />
          :
          <>
            {userData?.answers?.toReversed().slice(0, 10).map((answer: {$createdAt : Date, questionId: number, correctAnswers: number, answers: number[]}) =>
              <div key={answer.$createdAt.toISOString()} className='grid grid-cols-[100px_3fr_1fr_3fr_2fr] gap-3 w-full border border-neutral-700 rounded-xl py-2 mb-3 text-center'>
                <div className='flex-center border-r border-neutral-800'>
                  <p className='small-semibold'>{new Date(answer.$createdAt).toLocaleString()}</p>
                </div>
                <div className='flex-center border-r border-neutral-800'>
                  <p className='small-semibold'>{quizAllList[answer.questionId].title}</p>
                </div>

                <div className='flex-center border-r border-neutral-800'>
                  <p className='small-semibold text-emerald-400'>{(answer.correctAnswers / quizAllList[answer.questionId].questions.length) * 100}%</p>
                </div>

                <div className='flex-center border-r border-neutral-800'>
                  {answer.answers.map((item: number, index: number) =>
                    <div key={index} className={`h-3 w-3 rounded-xl mr-1 ${item === quizAllList[answer.questionId].questions[index].correctAnswer ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                  )}
                </div>

                <QuizPreview usersAnswerArray={answer.answers} quizId={answer.questionId} />

              </div>
            )}
          </>
        }

      </div>
    </section>
  )
}

export default MyProfile