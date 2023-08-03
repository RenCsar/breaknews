import { TopNewsData } from "../../utils/types";

const selectNumberPosts = (post: TopNewsData[] | null, initial: number, max: number) => {
    const maximo = initial !== 0 ? max + initial : max;
    const arr = [];
  
    if (post !== null && Array.isArray(post)) {
      for (let i = initial; i < maximo; i++) {
        arr.push(post[i]);
      }
    } else {
      for (let i = initial; i < maximo; i++) {
        arr.push(null);
      }
    }
  
    return arr;
}

export default selectNumberPosts;