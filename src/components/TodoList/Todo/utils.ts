import { useQueryClient } from "react-query";
import { QUERY_KEY_GET_TODOS } from "../../../constants";

export const useCreateSideEffect = (): any => {
  const queryClient = useQueryClient();

  return {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: (data: any, variables: any, context: any) => {
      queryClient.invalidateQueries(QUERY_KEY_GET_TODOS);
      console.log("data:", data)
      queryClient.setQueryData(["todos", {id: variables._id}], data)
    },
    onSettled: (data: any) => {
      console.log("onSettled");
    },
  };
};

