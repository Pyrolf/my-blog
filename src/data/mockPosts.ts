import type { Post } from "../types/post";

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "The Rise of Server-Side Rendering",
    excerpt: "A quick look at the shift back to the server.",
    date: "2024-03-15",
    content: `Server-side rendering is back in style. By rendering HTML on the server, we get better SEO and faster initial loads. Frameworks like Next.js make this seamless for developers. It is all about giving the user content as fast as possible.`,
  },
  {
    id: "2",
    title: "Mastering TypeScript Utility Types",
    excerpt: "Deep dive into Partial, Pick, and Omit.",
    date: "2024-03-12",
    content: `TypeScript utility types are powerful tools for transforming interfaces. 
    
    Partial<T> makes all properties optional, which is perfect for update forms. Pick<T, K> lets you create a new type by selecting specific keys from an existing one. Omit<T, K> does the opposite by removing keys. 
    
    Using these effectively prevents type duplication. When your base interface changes, your utility types update automatically, keeping your codebase DRY and maintainable. They are essential for any professional React project where data shapes evolve frequently.`,
  },
  {
    id: "3",
    title: "Designing Accessible User Interfaces",
    excerpt: "The fundamental guide to web accessibility.",
    date: "2024-03-10",
    content: `Accessibility (a11y) is about ensuring everyone can use your site. This includes keyboard navigation, screen reader support, and color contrast. 
    
    Start with semantic HTML. Use <button> for actions, not <div>. Ensure your colors meet WCAG contrast ratios. Add alt text to images. These steps benefit everyone, not just users with disabilities. For instance, high contrast helps people using phones in bright sunlight, and keyboard shortcuts help power users. 
    
    Don't treat accessibility as an afterthought or a "feature" to be added later. It should be part of your design process from day one. Test your site using only a keyboard. If you can't navigate, neither can many of your users. Focus on focus states—don't hide that blue outline unless you provide a clear alternative.`,
  },
  {
    id: "4",
    title: "The Future of CSS: Container Queries",
    excerpt: "A deep dive into the biggest shift in CSS since Flexbox.",
    date: "2024-03-05",
    content: `Container queries allow us to style elements based on their parent's size. For decades, we relied on media queries, which look at the total screen width. This was problematic for modular components. 
    
    Imagine a card component. In a sidebar, it should look compact. In the main hero section, it should be wide and detailed. With media queries, the card needs to know where it is located on the page. With container queries, the card simply looks at its own container. 
    
    This enables "Intrinsic Web Design." Components become truly portable. You can drop a card into any layout, and it will adapt its own styling. This reduces the need for complex CSS grid logic or multiple class modifiers. 
    
    As browser support hits 90%+, it is time to start using @container in production. Start by defining a container-type on your parent elements. Then, write your styles. The complexity of responsive design just dropped significantly. This is the end of "mobile-first" vs "desktop-first"—now we are "component-first."`,
  },
  {
    id: "5",
    title: "Modern State Management in React",
    excerpt: "From Redux to Zustand and beyond.",
    date: "2024-02-28",
    content: new Array(15)
      .fill(
        `State management has changed. We started with complex Redux patterns, but now we have lighter alternatives like Zustand and Jotai. These libraries focus on developer experience. They remove the boilerplate of actions and reducers. Instead, you get a simple hook. This makes your code more readable. It also reduces the bundle size of your application. When choosing a tool, consider the scale of your project. For most small to medium apps, Context API or Zustand is plenty. Don't over-engineer until you actually feel the pain of prop drilling.`,
      )
      .join("\n\n"),
  },
  {
    id: "6",
    title: "The Neovim Productivity Guide",
    excerpt: "Boost your coding speed by staying on the home row.",
    date: "2024-02-20",
    content: new Array(8)
      .fill(
        `Neovim is a modal editor. You spend most of your time in "Normal" mode, navigating and deleting text with single keystrokes. This is much faster than using a mouse. By learning the motions, you can move between lines and words instantly. The Lua ecosystem has made customization easy. You can build your own IDE. Plugins like Telescope and Treesitter provide powerful search and syntax highlighting. It takes time to learn, but the efficiency gains are worth it for any developer.`,
      )
      .join("\n\n"),
  },
  {
    id: "7",
    title: "Effective Project Management",
    excerpt: "Focusing on delivering value over finishing tickets.",
    date: "2024-02-15",
    content: new Array(10)
      .fill(
        `Software engineering is about solving problems, not just writing code. High-performing teams focus on outcomes. They use agile methodologies to iterate quickly. Communication is key. Use tools like Jira or Linear to track progress, but don't let the tool dictate the workflow. Keep your standups short. Focus on blockers. The goal is to ship value to the customer every single week. Documentation is also vital. Write it for your future self.`,
      )
      .join("\n\n"),
  },
];
