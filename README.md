# Kids Quiz App 🎓

An interactive and kid-friendly quiz application built with React and TypeScript. This application helps children learn through multiple-choice questions with immediate feedback and explanations.

## Features

- 🎨 Kid-friendly and engaging UI
- 📚 Multiple subjects and chapters
- ✅ Immediate feedback on answers
- 📝 Detailed explanations for each question
- 📊 Progress tracking
- 🎮 Interactive quiz experience

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── data/
    └── questions/ # JSON files containing quiz questions
        ├── math/
        │   ├── addition.json
        │   └── subtraction.json
        └── science/
            ├── animals.json
            └── plants.json
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Adding New Questions

To add new questions, create a new JSON file in the appropriate subject directory under `src/data/questions/`. Follow this structure:

```json
{
  "chapterName": "Your Chapter Name",
  "subject": "Subject Name",
  "difficulty": "Easy/Medium/Hard",
  "questions": [
    {
      "id": 1,
      "question": "Your question here?",
      "options": [
        { "id": "a", "text": "Option A" },
        { "id": "b", "text": "Option B" },
        { "id": "c", "text": "Option C" },
        { "id": "d", "text": "Option D" }
      ],
      "correctAnswer": "a",
      "explanation": "Detailed explanation of the correct answer"
    }
  ]
}
```

## Technologies Used

- React
- TypeScript
- Chakra UI
- React Router
- Vite

## Contributing

Feel free to contribute to this project by:
1. Adding new questions
2. Improving the UI/UX
3. Adding new features
4. Reporting bugs

## License

MIT License
