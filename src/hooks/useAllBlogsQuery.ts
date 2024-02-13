import { BlogInterface } from "@/app/page";
import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useAllBlogsQuery = () => {
  const { data, isLoading, isError, isSuccess } = useQuery<BlogInterface[]>({
    queryKey: ["blogs"],
    queryFn: () => API.getAllBlogs(),
  });
  return { data, isLoading, isError, isSuccess };
};
