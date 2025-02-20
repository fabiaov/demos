import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Post } from "@/types/Post";
import { PostActions, postReducer } from "../reducers/postReducer";
type PostContextType = {
  posts: Post[],
  dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null >(null);
export const PostProvider = ({ children }: { children: ReactNode}) => {
  const [posts, dispatch] = useReducer(postReducer, []);
  const addPost = (title: string, body: string) => {
    dispatch({ type: 'add',payload: { title, body }})
    //setPosts([...posts,{ id: posts.length, title, body }])
  }
  const removePost = (id: number) => {
    dispatch({type: 'remove', payload: { id }});
  }
  return (
    <PostContext.Provider value={{posts, dispatch}}>
      {children}
    </PostContext.Provider>
  )
}