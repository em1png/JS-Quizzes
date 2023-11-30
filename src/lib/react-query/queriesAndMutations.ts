import { INewUser } from "@/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { createUserAccount, getCurrentUser, saveAnswers, signInAccount } from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => 
      createUserAccount(user),
  });
};

export const useSigninAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSaveAnswers = () => {
  return useMutation({
    mutationFn: (answer: { questionId: string, answers: number[], correctAnswers: number, userId: string }) =>
      saveAnswers(answer),
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: getCurrentUser,
  });
};
