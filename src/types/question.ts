export interface Option {
    id: string;
    text: string;
}

export interface Question {
    id: number;
    question: string;
    options: Option[];
    correctAnswer: string;
    explanation: string;
}

export interface Chapter {
    chapterName: string;
    subject: string;
    difficulty: string;
    questions: Question[];
} 