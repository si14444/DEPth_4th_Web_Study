import { useQuery } from "@tanstack/react-query";
import { getWeek } from "../api/getWeek";

// Suspense 모드에서 일반 모드로 전환
export function useWeek() {
  return useQuery({
    queryKey: ["GetWeek"],
    queryFn: () => getWeek(),
    retry: 1, // 실패 시 1번만 재시도
    staleTime: 5 * 60 * 1000, // 5분간 데이터 유지
  });
}
