import { Link } from "react-router-dom";
import type { Post } from "../types/post";
import { motion } from "framer-motion";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <motion.div
      className="post-card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post.id}`} className="read-more">
        Read More →
      </Link>
    </motion.div>
  );
};
