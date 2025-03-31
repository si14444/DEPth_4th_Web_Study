export interface Question {
  id: number;
  title: string;
  description?: string;
  answer: string;
  userId: number;
  date: string;
}

export interface QuestionList {
  weekId: number;
  questions: Question[];
}
