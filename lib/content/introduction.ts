import { Article } from './types';

export const introduction: Article = {
  module: 0,
  slug: 'introduction',
  title: 'Introduction to AI Course',
  description: 'Learn the fundamentals and get started with your AI journey',
  readTime: 5,
  content: `# Welcome to AI Course

Welcome to your comprehensive AI learning journey! This course is designed to take you from beginner to proficient in artificial intelligence concepts and applications.

## What You'll Learn

In this course, you will master:

- **Machine Learning Fundamentals** - Understanding the core principles that power AI
- **Neural Networks** - Deep dive into how neural networks work
- **Practical Applications** - Build real-world AI projects
- **Best Practices** - Industry-standard approaches and patterns

## Why AI Matters

Artificial Intelligence is transforming every industry. From healthcare to finance, transportation to entertainment, AI is reshaping how we work and live.

> "The development of full artificial intelligence could spell the end of the human race... It would take off on its own, and re-design itself at an ever increasing rate." - Stephen Hawking

## Course Structure

This course is organized into modules:

1. **Getting Started** - Foundation and setup
2. **Core Concepts** - Essential AI knowledge
3. **Examples** - Hands-on coding exercises

## Prerequisites

Before starting, you should have:

- Basic programming knowledge (Python preferred)
- Understanding of basic mathematics
- Curiosity and willingness to learn

## Let's Begin

Ready to start your AI journey? Click **Next** to proceed to the Quick Start Guide!

\`\`\`python
# Your first AI code
print("Hello, AI World!")
\`\`\`

This simple line marks the beginning of something amazing. Let's get started!
`,
  nextTopic: { module: 0, slug: 'quick-start', title: 'Quick Start Guide' },
};
