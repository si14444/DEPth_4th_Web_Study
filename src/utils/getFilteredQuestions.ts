import { QuestionList } from "../types/question";

// 주차 번호와 문제 번호를 받아서 해당 문제를 반환
export const getFilteredQuestion = (
  questions: QuestionList[],
  weekId: number,
  id: string
) => {
  return questions
    ?.flatMap((question) =>
      question.weekId === Number(weekId) ? question.questions : []
    )
    ?.find((q) => q.id === id);
};
