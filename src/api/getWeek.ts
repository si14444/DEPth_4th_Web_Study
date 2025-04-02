import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { Topic, Week, Weeks } from "../types/weeks";

export async function getWeek(): Promise<Weeks> {
  try {
    // 1. 'week' 컬렉션의 모든 문서 가져오기
    const collectionRef = collection(firestore, "week");
    const querySnapshot = await getDocs(collectionRef);

    // 결과 배열 준비
    const weeks: Weeks = [];

    // 2. 각 문서와 그 하위 컬렉션 가져오기
    const weekPromises = querySnapshot.docs.map(async (docSnap) => {
      const weekData = docSnap.data() as Week;
      const weekId = docSnap.id;

      // 3. 해당 문서의 'topic' 하위 컬렉션 가져오기
      const topicCollectionRef = collection(firestore, "week", weekId, "topic");
      const topicQuerySnapshot = await getDocs(topicCollectionRef);

      // 4. 하위 컬렉션 데이터 배열로 변환
      const topics: Topic[] = [];
      topicQuerySnapshot.forEach((topicDoc) => {
        topics.push(topicDoc.data() as Topic);
      });

      // 5. 주차 데이터에 토픽 배열 추가
      return {
        ...weekData,
        id: Number(weekId) || weekId,
        topic: topics,
      };
    });

    // 6. 모든 비동기 작업 완료 대기
    const populatedWeeks = await Promise.all(weekPromises);
    const validWeeks = populatedWeeks.map((week) => ({
      ...week,
      id: typeof week.id === "string" ? parseInt(week.id) : week.id,
    }));
    weeks.push(...validWeeks);

    console.log("가져온 주차 데이터(하위 컬렉션 포함):", weeks);
    return weeks;
  } catch (error) {
    console.error("week 데이터 가져오기 오류:", error);
    throw new Error("주차 데이터를 불러오는 중 오류가 발생했습니다");
  }
}
