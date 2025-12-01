// Shared types for content

export interface Article {
  module: number;
  slug: string;
  title: string;
  description: string;
  readTime: number;
  content: string;
  previousTopic?: { module: number; slug: string; title: string };
  nextTopic?: { module: number; slug: string; title: string };
}

export interface Module {
  module: number;
  title: string;
  topics: { title: string; slug: string }[];
}
