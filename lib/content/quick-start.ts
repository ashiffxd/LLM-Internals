import { Article } from './types';

export const quickStart: Article = {
  module: 0,
  slug: 'quick-start',
  title: 'Quick Start Guide',
  description: 'Get up and running quickly with essential setup steps',
  readTime: 8,
  content: `# Quick Start Guide

Let's get you set up and ready to learn!

## System Requirements

Before we begin, ensure you have:

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 8GB (16GB recommended)
- **Storage**: At least 10GB free space
- **Python**: Version 3.8 or higher

## Installation Steps

### Step 1: Install Python

Download and install Python from the official website:

\`\`\`bash
# Check your Python version
python --version
\`\`\`

### Step 2: Set Up Virtual Environment

Create an isolated environment for your AI projects:

\`\`\`bash
# Create virtual environment
python -m venv ai-env

# Activate it (Windows)
ai-env\\Scripts\\activate

# Activate it (macOS/Linux)
source ai-env/bin/activate
\`\`\`

### Step 3: Install Required Libraries

Install the essential AI libraries:

\`\`\`bash
pip install numpy pandas scikit-learn tensorflow
\`\`\`

## Verify Installation

Run this code to verify everything works:

\`\`\`python
import numpy as np
import pandas as pd
import sklearn
import tensorflow as tf

print("NumPy version:", np.__version__)
print("Pandas version:", pd.__version__)
print("Scikit-learn version:", sklearn.__version__)
print("TensorFlow version:", tf.__version__)
print("\\nAll libraries installed successfully!")
\`\`\`

## Next Steps

Now that you're set up, you're ready to dive into the core concepts. The next section will introduce you to the fundamental ideas behind AI and machine learning.

**Pro Tip**: Keep your virtual environment activated while working through this course!
`,
  previousTopic: { module: 0, slug: 'introduction', title: 'Introduction' },
  nextTopic: { module: 1, slug: 'basic-concepts', title: 'Basic Concepts' },
};
