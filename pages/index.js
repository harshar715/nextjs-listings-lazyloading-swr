import { usePaginatePosts } from "../useRequest";
import React, { useEffect, useState } from 'react';
import Post from "../components/Post";

export default function IndexPage() {

  const { posts, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginatePosts("/posts");
  const [count, setCount] = useState(0);

  const isBottom = (el) => {
    setCount(count + window.innerHeight + 1);
    return el.getBoundingClientRect().bottom <= (window.innerHeight + 1) || el.getBoundingClientRect().bottom <= count;
  }

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
  }, []);

  useEffect(() => {

    return (() => {
      document.removeEventListener('scroll', trackScrolling);
    });
  }, []);

  const trackScrolling = () => {
    const wrappedElement = document.getElementById('header');
    if (isBottom(wrappedElement)) {
      document.getElementById('button').click();
    }
  };

  if (error) return <h1>Something went wrong!</h1>;

  if (!posts) return <h1>Loading...</h1>;

  return (
    <div id="header" className="container">
      <h1>My Posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

      <button id="button" disabled={isLoadingMore || isReachingEnd} onClick={() => setSize(size + 1)} >
        {isLoadingMore
          ? "Loading..."
          : isReachingEnd
            ? "No more posts"
            : "Load more"}
      </button>
      {/* {chnage to bottom scroll} */}


    </div>
  );
}
