import { Article } from './types';

export const basicConcepts: Article = {
  module: 1,
  slug: 'basic-concepts',
  title: 'Basic Concepts',
  description: 'Understand the fundamental concepts of AI and machine learning',
  readTime: 12,
  content: `# Basic Concepts

Understanding the core concepts is essential for your AI journey.

## What is Artificial Intelligence?

**Artificial Intelligence (AI)** is the simulation of human intelligence in machines. These machines are programmed to think and learn like humans.

## Types of AI

### 1. Narrow AI (Weak AI)

AI designed for specific tasks:

- Voice assistants (Siri, Alexa)
- Recommendation systems (Netflix, Spotify)
- Image recognition systems

### 2. General AI (Strong AI)

AI with human-like cognitive abilities (theoretical, not yet achieved).

### 3. Super AI

AI that surpasses human intelligence (hypothetical).

## Machine Learning Basics

Machine Learning is a subset of AI that enables systems to learn from data.

### Types of Machine Learning

| Type | Description | Example |
|------|-------------|---------|
| Supervised | Learning from labeled data | Email spam detection |
| Unsupervised | Finding patterns in unlabeled data | Customer segmentation |
| Reinforcement | Learning through rewards/penalties | Game-playing AI |

## Key Terminology

- **Model**: A mathematical representation learned from data
- **Training**: The process of teaching a model using data
- **Features**: Input variables used for predictions
- **Labels**: Output/target variables we want to predict
- **Overfitting**: When a model performs well on training data but poorly on new data

## Simple Example

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

# Training data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make prediction
prediction = model.predict([[6]])
print(f"Prediction for 6: {prediction[0]}")  # Output: 12.0
\`\`\`

## Summary

- AI is about creating intelligent machines
- Machine Learning enables learning from data
- Different types of ML suit different problems
- Understanding terminology is crucial for communication

Ready to explore more advanced topics?
`,
  previousTopic: { module: 0, slug: 'quick-start', title: 'Quick Start Guide' },
  nextTopic: { module: 1, slug: 'advanced-topics', title: 'Advanced Topics' },
};
