import { MOCK_POSTS } from "../data/mockPosts";
import { PostCard } from "../components/PostCard";
import { AnimatedPage } from "../components/AnimatedPage";

export const HomePage = () => {
  return (
    <AnimatedPage>
      <header className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Thoughts on React, TypeScript, and Design.</p>
      </header>

      <section className="post-list">
        {MOCK_POSTS.length > 0 ? (
          MOCK_POSTS.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </section>
    </AnimatedPage>
  );
};
