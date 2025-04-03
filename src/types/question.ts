export interface Question {
  id: number;
  title: string;
  code?: string;
  answer: string;
  userId: number;
  date: string;
}

export interface QuestionList {
  weekId: number;
  questions: Question[];
}
