import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { signup, isLoading };
}
