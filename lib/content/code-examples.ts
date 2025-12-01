import { Article } from './types';

export const codeExamples: Article = {
  module: 2,
  slug: 'code-examples',
  title: 'Code Examples',
  description: 'Practical code examples to solidify your understanding',
  readTime: 10,
  content: `# Code Examples

Let's put everything together with practical examples.

## Example 1: Image Classification

\`\`\`python
import tensorflow as tf
from tensorflow.keras import datasets, layers, models

# Load CIFAR-10 dataset
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values
train_images = train_images / 255.0
test_images = test_images / 255.0

# Build CNN model
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10)
])

# Compile and train
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

history = model.fit(train_images, train_labels, epochs=10,
                    validation_data=(test_images, test_labels))
\`\`\`

## Example 2: Text Classification

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Sample data
texts = ["I love this product", "Terrible experience", "Great quality", "Waste of money"]
labels = [1, 0, 1, 0]  # 1 = positive, 0 = negative

# Create pipeline
text_clf = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', MultinomialNB()),
])

# Train model
text_clf.fit(texts, labels)

# Predict
new_text = ["This is amazing!"]
prediction = text_clf.predict(new_text)
print(f"Sentiment: {'Positive' if prediction[0] == 1 else 'Negative'}")
\`\`\`

## Example 3: Data Visualization

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Training history visualization
def plot_training_history(history):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

    # Accuracy plot
    ax1.plot(history.history['accuracy'], label='Training')
    ax1.plot(history.history['val_accuracy'], label='Validation')
    ax1.set_title('Model Accuracy')
    ax1.set_xlabel('Epoch')
    ax1.set_ylabel('Accuracy')
    ax1.legend()

    # Loss plot
    ax2.plot(history.history['loss'], label='Training')
    ax2.plot(history.history['val_loss'], label='Validation')
    ax2.set_title('Model Loss')
    ax2.set_xlabel('Epoch')
    ax2.set_ylabel('Loss')
    ax2.legend()

    plt.tight_layout()
    plt.show()
\`\`\`

## Congratulations!

You've completed the core modules of this AI course. Continue practicing with these examples and build your own projects!

### What's Next?

- Experiment with different datasets
- Try various model architectures
- Join AI communities and contribute
- Build real-world projects

**Happy Learning!**
`,
  previousTopic: { module: 1, slug: 'advanced-topics', title: 'Advanced Topics' },
};
