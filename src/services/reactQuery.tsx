import { useQuery } from "@tanstack/react-query";

type Props = {
  queryKey: string[];
  url: string;
}
export const useApi = ({ queryKey, url}: Props) => {
  const { data, refetch, error, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      try {
        const res = await fetch(url);
        const d = res.json();
        return d;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
      }
    },
  })

  return { data, refetch, error, isLoading }
}