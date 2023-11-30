import { INewUser } from "@/types";
import { account, appwriteConfig, databases } from "./config";
import { ID, Query } from "appwrite"; // Для генерации уникального ID автоматически, при создаении юзера.

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create( ID.unique(), user.email, user.password, user.username );
    if (!newAccount) throw Error;

    const newUser = await saveUserToDB({ accountId: newAccount.$id, email: newAccount.email, username: user.username });
    return newUser;

  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function saveUserToDB(user: { accountId: string; email: string; username: string }) {
  try {
    const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments( appwriteConfig.databaseId, appwriteConfig.userCollectionId, [Query.equal("accountId", currentAccount.$id)] );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function saveAnswers(answer: {questionId: string, answers: number[], correctAnswers: number, userId: string}) {
  try {
    const saveAnswers = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.answersCollectionId,
      ID.unique(),
      {
        users: answer.userId,
        answers: answer.answers,
        questionId: answer.questionId,
        correctAnswers: answer.correctAnswers,
      }
    );
    if (!saveAnswers) throw Error;

    return saveAnswers;
  } catch (error) {
    console.log(error);
  }
}

// export async function getAnswersByUser(userId: number) {
//   try {
//     const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.answersCollectionId, [Query.equal("users", [userId])])
//     if(!posts) throw Error;

//     return posts;
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function getQuizPreviewById(quizId: string) {
//   try {
//     const post = await databases.getDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.answersCollectionId,
//       quizId
//     );
//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// }