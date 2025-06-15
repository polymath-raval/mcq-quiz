import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    Box,
    VStack,
    Heading,
    Text,
    Button,
    Container,
    HStack,
    Badge,
} from '@chakra-ui/react'
import type { Chapter, Question } from '../types/question'

const Quiz = () => {
    const { subject, chapter } = useParams()
    const navigate = useNavigate()
    const [quizData, setQuizData] = useState<Chapter | null>(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string>('')
    const [showExplanation, setShowExplanation] = useState(false)
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState<string>('')

    useEffect(() => {
        // In a real app, this would be an API call
        import(`../data/questions/${subject}/${chapter}.json`)
            .then((data) => {
                setQuizData(data.default)
            })
            .catch(() => {
                alert('Error loading quiz. Please try again later.')
                navigate('/')
            })
    }, [subject, chapter, navigate])

    if (!quizData) {
        return (
            <Container maxW="4xl" centerContent>
                <Box textAlign="center" py={20}>
                    <VStack gap={6}>
                        <Box fontSize="6xl">
                            ⏳
                        </Box>
                        <Heading size="lg" color="brand.600">
                            Loading your quiz...
                        </Heading>
                        <Text color="gray.600" fontSize="lg">
                            Preparing exciting questions for you!
                        </Text>
                    </VStack>
                </Box>
            </Container>
        )
    }

    const currentQuestion: Question = quizData.questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100

    const handleAnswerSubmit = () => {
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer
        if (isCorrect) {
            setScore(score + 1)
            setFeedback('🎉 Excellent! You got it right!')
        } else {
            setFeedback('💪 Not quite right, but keep trying!')
        }
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer('')
            setShowExplanation(false)
            setFeedback('')
        } else {
            // Quiz completed
            const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)
            const percentage = Math.round((finalScore / quizData.questions.length) * 100)

            alert(`🎓 Quiz Completed! 
            
Your Score: ${finalScore}/${quizData.questions.length} (${percentage}%)
            
${percentage >= 80 ? '🌟 Outstanding performance!' :
                    percentage >= 60 ? '👍 Great job!' :
                        '📚 Keep practicing to improve!'}`)
            navigate('/')
        }
    }

    return (
        <Container maxW="4xl" centerContent>
            <VStack gap={8} align="stretch" w="100%">
                {/* Quiz Header */}
                <Box
                    bg="white"
                    shadow="card"
                    borderRadius="2xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="gray.100"
                >
                    <Box p={6}>
                        <VStack gap={4} align="stretch">
                            <HStack justify="space-between" align="center">
                                <VStack align="start" gap={1}>
                                    <Heading
                                        size="lg"
                                        color="brand.700"
                                        fontWeight="800"
                                    >
                                        {quizData.chapterName}
                                    </Heading>
                                    <HStack gap={3}>
                                        <Badge colorScheme="brand" variant="subtle" fontSize="sm">
                                            {quizData.subject}
                                        </Badge>
                                        <Badge colorScheme="green" variant="subtle" fontSize="sm">
                                            {quizData.difficulty}
                                        </Badge>
                                    </HStack>
                                </VStack>

                                <VStack align="end" gap={1}>
                                    <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="brand.600"
                                    >
                                        {currentQuestionIndex + 1}/{quizData.questions.length}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Question
                                    </Text>
                                </VStack>
                            </HStack>

                            {/* Progress Bar */}
                            <Box>
                                <HStack justify="space-between" mb={2}>
                                    <Text fontSize="sm" color="gray.600" fontWeight="500">
                                        Progress
                                    </Text>
                                    <Text fontSize="sm" color="brand.600" fontWeight="600">
                                        {Math.round(progress)}%
                                    </Text>
                                </HStack>
                                <Box
                                    w="100%"
                                    h="3"
                                    bg="gray.100"
                                    borderRadius="full"
                                    overflow="hidden"
                                >
                                    <Box
                                        h="100%"
                                        bg="brand.500"
                                        borderRadius="full"
                                        width={`${progress}%`}
                                        transition="width 0.3s ease"
                                    />
                                </Box>
                            </Box>
                        </VStack>
                    </Box>
                </Box>

                {/* Question Card */}
                <Box
                    bg="white"
                    shadow="card"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.100"
                >
                    <Box p={8}>
                        <VStack gap={8} align="stretch">
                            {/* Question */}
                            <Box>
                                <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    letterSpacing="0.5px"
                                    mb={3}
                                >
                                    Question {currentQuestionIndex + 1}
                                </Text>
                                <Heading
                                    size="md"
                                    color="gray.800"
                                    lineHeight="1.4"
                                    fontWeight="600"
                                >
                                    {currentQuestion.question}
                                </Heading>
                            </Box>

                            {/* Divider */}
                            <Box w="100%" h="1px" bg="gray.200" />

                            {/* Answer Options */}
                            <VStack gap={4} align="stretch">
                                <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    letterSpacing="0.5px"
                                >
                                    Choose your answer
                                </Text>

                                {currentQuestion.options.map((option, index) => {
                                    const isSelected = selectedAnswer === option.id
                                    const isCorrect = option.id === currentQuestion.correctAnswer
                                    const shouldShowCorrect = showExplanation && isCorrect
                                    const shouldShowWrong = showExplanation && isSelected && !isCorrect

                                    return (
                                        <Button
                                            key={option.id}
                                            onClick={() => !showExplanation && setSelectedAnswer(option.id)}
                                            size="lg"
                                            h="auto"
                                            p={6}
                                            borderRadius="xl"
                                            justifyContent="flex-start"
                                            textAlign="left"
                                            whiteSpace="normal"
                                            wordBreak="break-word"
                                            fontWeight="500"
                                            fontSize="md"
                                            lineHeight="1.5"
                                            border="2px solid"
                                            borderColor={
                                                shouldShowCorrect ? 'success.400' :
                                                    shouldShowWrong ? 'red.400' :
                                                        isSelected ? 'brand.400' : 'gray.200'
                                            }
                                            bg={
                                                shouldShowCorrect ? 'success.50' :
                                                    shouldShowWrong ? 'red.50' :
                                                        isSelected ? 'brand.50' : 'white'
                                            }
                                            color={
                                                shouldShowCorrect ? 'success.800' :
                                                    shouldShowWrong ? 'red.800' :
                                                        isSelected ? 'brand.800' : 'gray.700'
                                            }
                                            _hover={{
                                                transform: showExplanation ? 'none' : 'translateY(-2px)',
                                                shadow: showExplanation ? 'none' : 'md',
                                                borderColor:
                                                    shouldShowCorrect ? 'success.400' :
                                                        shouldShowWrong ? 'red.400' :
                                                            'brand.300'
                                            }}
                                            _active={{
                                                transform: showExplanation ? 'none' : 'translateY(0px)',
                                            }}
                                            transition="all 0.2s ease"
                                            cursor={showExplanation ? 'default' : 'pointer'}
                                        >
                                            <HStack gap={4} w="100%">
                                                <Box
                                                    w="8"
                                                    h="8"
                                                    borderRadius="full"
                                                    bg={
                                                        shouldShowCorrect ? 'success.500' :
                                                            shouldShowWrong ? 'red.500' :
                                                                isSelected ? 'brand.500' : 'gray.300'
                                                    }
                                                    color="white"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    fontWeight="bold"
                                                    fontSize="sm"
                                                    flexShrink={0}
                                                >
                                                    {shouldShowCorrect ? '✓' :
                                                        shouldShowWrong ? '✗' :
                                                            String.fromCharCode(65 + index)}
                                                </Box>
                                                <Text flex="1">
                                                    {option.text}
                                                </Text>
                                            </HStack>
                                        </Button>
                                    )
                                })}
                            </VStack>

                            {/* Feedback */}
                            {feedback && (
                                <Box
                                    p={4}
                                    bg={feedback.includes('Excellent') ? 'success.50' : 'warning.50'}
                                    borderRadius="xl"
                                    border="1px solid"
                                    borderColor={feedback.includes('Excellent') ? 'success.200' : 'warning.200'}
                                >
                                    <HStack gap={3}>
                                        <Box
                                            fontSize="lg"
                                            color={feedback.includes('Excellent') ? 'success.600' : 'warning.600'}
                                        >
                                            {feedback.includes('Excellent') ? '✓' : '!'}
                                        </Box>
                                        <Text
                                            fontWeight="600"
                                            fontSize="lg"
                                            color={feedback.includes('Excellent') ? 'success.800' : 'warning.800'}
                                        >
                                            {feedback}
                                        </Text>
                                    </HStack>
                                </Box>
                            )}

                            {/* Explanation */}
                            {showExplanation && (
                                <Box
                                    p={6}
                                    bg="blue.50"
                                    borderRadius="xl"
                                    border="1px solid"
                                    borderColor="blue.200"
                                >
                                    <VStack align="start" gap={3}>
                                        <HStack gap={3}>
                                            <Box fontSize="lg" color="blue.600">
                                                💡
                                            </Box>
                                            <Text fontWeight="600" fontSize="lg" color="blue.800">
                                                Explanation
                                            </Text>
                                        </HStack>
                                        <Text
                                            fontSize="md"
                                            lineHeight="1.6"
                                            color="blue.900"
                                        >
                                            {currentQuestion.explanation}
                                        </Text>
                                    </VStack>
                                </Box>
                            )}

                            {/* Action Button */}
                            <Button
                                size="lg"
                                h={14}
                                colorScheme="brand"
                                onClick={showExplanation ? handleNextQuestion : handleAnswerSubmit}
                                disabled={!selectedAnswer}
                                borderRadius="xl"
                                fontWeight="600"
                                fontSize="lg"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    shadow: 'lg'
                                }}
                                _active={{
                                    transform: 'translateY(0px)',
                                }}
                                transition="all 0.2s ease"
                            >
                                {showExplanation ?
                                    (currentQuestionIndex < quizData.questions.length - 1 ?
                                        '➡️ Next Question' :
                                        '🎯 Finish Quiz'
                                    ) :
                                    '✅ Check Answer'
                                }
                            </Button>
                        </VStack>
                    </Box>
                </Box>
            </VStack>
        </Container>
    )
}

export default Quiz