"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postsSlice";

export default function PostsPage() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
