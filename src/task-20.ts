import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
  const posts = await fetchPosts();
  //   console.log(posts);
  const postsInfo = posts.map(({ title, body }) => {
    return { title, body };
  });
  //   console.log(postsInfo);
  const threePosts = postsInfo.slice(0, 3);
  console.log(threePosts);
};

logThreePosts();
