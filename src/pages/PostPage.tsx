import { useParams, Link, Navigate } from "react-router-dom";
import { MOCK_POSTS } from "../data/mockPosts";
import { AnimatedPage } from "../components/AnimatedPage";
import { calculateReadingTime } from "../utils/readingTime";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_POSTS.find((p) => p.id === id);

  if (!post) return <Navigate to="/" replace />;

  return (
    <AnimatedPage>
      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>

      <article className="post-detail">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta-detailed">
            <time>{post.date}</time>
            <span>•</span>
            <span>{calculateReadingTime(post.content)} min read</span>
          </div>
        </header>

        <section className="post-content-body">{post.content}</section>
      </article>
    </AnimatedPage>
  );
};
