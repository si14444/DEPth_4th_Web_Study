import { Topic } from "../types/weeks";

/**
 * 주제 정렬
 * @param topic
 * @returns
 */
export const sortTopic = (topic: Topic[]) => {
  return topic.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || "0");
    const numB = parseInt(b.name.match(/\d+/)?.[0] || "0");
    return numA - numB;
  });
};
