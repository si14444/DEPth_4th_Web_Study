export interface Question {
  id?: string;
  title: string;
  code?: string;
  answer: string;
  userId: number;
  date: string;
  topic: string;
}

export interface QuestionList {
  id: string;
  weekId: number;
  questions: Question[];
}
