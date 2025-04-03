import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { Question, QuestionList } from "../types/question";

export async function getQuestion(): Promise<QuestionList[]> {
  try {
    // 1. 'question' 컬렉션의 모든 문서 가져오기
    const collectionRef = collection(firestore, "question");
    const querySnapshot = await getDocs(collectionRef);

    // 결과 배열 준비
    const QuestionList: QuestionList[] = [];

    // 2. 각 문서와 그 하위 컬렉션 가져오기
    const questionPromises = querySnapshot.docs.map(async (docSnap) => {
      const questionData = docSnap.data() as QuestionList;
      const questionId = docSnap.id;

      // 3. 해당 문서의 'questions 하위 컬렉션 가져오기
      const questionCollectionRef = collection(
        firestore,
        "question",
        questionId,
        "questions"
      );
      const questionQuerySnapshot = await getDocs(questionCollectionRef);

      // 4. 하위 컬렉션 데이터 배열로 변환 (각 문서의 ID도 포함)
      const questions: Question[] = [];
      questionQuerySnapshot.forEach((questionDoc) => {
        questions.push({
          ...(questionDoc.data() as Question),
          id: questionDoc.id, // 각 question 문서의 ID 추가
        });
      });

      // 5. 주차 데이터에 토픽 배열 추가
      return {
        ...questionData,
        id: questionId, // id 추가
        questions: questions,
      };
    });

    // 6. 모든 비동기 작업 완료 대기
    const populatedQuestions = await Promise.all(questionPromises);
    const validQuestions = populatedQuestions.map((question) => ({
      ...question,
      id: question.id,
    }));
    QuestionList.push(...validQuestions);

    console.log("가져온 주차 데이터(하위 컬렉션 포함):", QuestionList);
    return QuestionList;
  } catch (error) {
    console.error("question 데이터 가져오기 오류:", error);
    throw new Error("question 데이터를 불러오는 중 오류가 발생했습니다");
  }
}
