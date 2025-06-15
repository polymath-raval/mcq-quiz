import {
    Box,
    Heading,
    Text,
    VStack,
    Container,
    HStack,
    Badge,
    SimpleGrid,
    Flex
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const subjects = [
    {
        name: 'Class 6 Chemistry',
        folderName: 'chemistry',
        emoji: '⚗️',
        gradient: 'linear(135deg, #2196F3 0%, #1976D2 100%)',
        lightBg: 'rgba(33, 150, 243, 0.1)',
        description: 'Introduction to Chemistry',
        chapters: [
            { name: 'Easy Paper 1', path: 'easy-2', difficulty: 'Easy', questions: 15 },
            { name: 'Easy Paper 2', path: 'easy-1', difficulty: 'Easy', questions: 30 },
            { name: 'Medium Paper 1', path: 'medium-1', difficulty: 'Medium', questions: 30 },
            { name: 'Medium Paper 2', path: 'medium-2', difficulty: 'Medium', questions: 30 },
            { name: 'Medium Paper 3', path: 'medium-3', difficulty: 'Medium', questions: 30 },
            { name: 'Hard Paper 1', path: 'hard-1', difficulty: 'Hard', questions: 30 }
        ]
    }
]

const Home = () => {
    return (
        <Container maxW="6xl" centerContent>
            <VStack gap={16} w="100%" align="stretch">
                {/* Hero Section */}
                <Box textAlign="center" py={12}>
                    <VStack gap={8}>
                        <Box
                            fontSize="8xl"
                            mb={4}
                            filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"
                            animation="float 3s ease-in-out infinite"
                            css={{
                                '@keyframes float': {
                                    '0%, 100%': { transform: 'translateY(0px)' },
                                    '50%': { transform: 'translateY(-10px)' }
                                }
                            }}
                        >
                            🎮✨
                        </Box>
                        <VStack gap={4}>
                            <Heading
                                fontSize={{ base: "4xl", md: "6xl" }}
                                fontWeight="900"
                                color="white"
                                textAlign="center"
                                letterSpacing="-0.02em"
                                lineHeight="1.1"
                                textShadow="0 4px 8px rgba(0,0,0,0.3)"
                            >
                                Welcome to Kids Quiz!
                            </Heading>
                            <Text
                                fontSize={{ base: "xl", md: "2xl" }}
                                color="white"
                                maxW="4xl"
                                textAlign="center"
                                lineHeight="1.6"
                                fontWeight="500"
                                textShadow="0 2px 4px rgba(0,0,0,0.3)"
                                opacity="0.95"
                            >
                                Embark on an exciting learning adventure! Choose your favorite subject and dive into interactive quizzes designed to make learning fun and engaging.
                            </Text>
                        </VStack>
                    </VStack>
                </Box>

                {/* Subjects Grid */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} w="100%">
                    {subjects.map((subject, index) => (
                        <Box
                            key={subject.name}
                            bg="rgba(255, 255, 255, 0.98)"
                            backdropFilter="blur(20px)"
                            borderRadius="3xl"
                            p={8}
                            shadow="2xl"
                            border="1px solid"
                            borderColor="rgba(255, 255, 255, 0.4)"
                            _hover={{
                                transform: 'translateY(-8px) scale(1.02)',
                                shadow: '0 25px 50px rgba(0,0,0,0.15)',
                            }}
                            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                            position="relative"
                            overflow="hidden"
                        >
                            {/* Animated background gradient */}
                            <Box
                                position="absolute"
                                top="-50%"
                                right="-50%"
                                w="200%"
                                h="200%"
                                bg={subject.gradient}
                                opacity="0.05"
                                borderRadius="full"
                                animation={`rotate${index} 20s linear infinite`}
                                css={{
                                    [`@keyframes rotate${index}`]: {
                                        '0%': { transform: 'rotate(0deg)' },
                                        '100%': { transform: 'rotate(360deg)' }
                                    }
                                }}
                            />

                            <VStack align="stretch" gap={6} position="relative" zIndex={1}>
                                {/* Subject Header */}
                                <Flex align="center" gap={6}>
                                    <Box
                                        fontSize="5xl"
                                        w="20"
                                        h="20"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        bg={subject.gradient}
                                        borderRadius="2xl"
                                        color="white"
                                        shadow="xl"
                                        position="relative"
                                        _before={{
                                            content: '""',
                                            position: 'absolute',
                                            inset: '-2px',
                                            bg: subject.gradient,
                                            borderRadius: '2xl',
                                            opacity: 0.3,
                                            filter: 'blur(8px)',
                                            zIndex: -1
                                        }}
                                    >
                                        {subject.emoji}
                                    </Box>
                                    <VStack align="start" gap={2} flex="1">
                                        <Heading
                                            size="xl"
                                            bgGradient={subject.gradient}
                                            backgroundClip="text"
                                            fontWeight="800"
                                            letterSpacing="-0.01em"
                                        >
                                            {subject.name}
                                        </Heading>
                                        <Text
                                            color="gray.700"
                                            fontSize="lg"
                                            lineHeight="1.5"
                                            fontWeight="500"
                                        >
                                            {subject.description}
                                        </Text>
                                    </VStack>
                                </Flex>

                                {/* Chapters */}
                                <VStack gap={4} align="stretch">
                                    <Flex align="center" justify="space-between">
                                        <Text
                                            fontSize="sm"
                                            fontWeight="700"
                                            color="gray.600"
                                            textTransform="uppercase"
                                            letterSpacing="wider"
                                        >
                                            Available Chapters
                                        </Text>
                                        <Badge
                                            bg={subject.lightBg}
                                            color="gray.700"
                                            px={3}
                                            py={1}
                                            borderRadius="full"
                                            fontSize="xs"
                                            fontWeight="600"
                                        >
                                            {subject.chapters.length} chapters
                                        </Badge>
                                    </Flex>

                                    {subject.chapters.map((chapter) => (
                                        <Link
                                            key={chapter.path}
                                            to={`/quiz/${subject.folderName}/${chapter.path}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Box
                                                p={5}
                                                bg={chapter.questions > 0 ? subject.gradient : "gray.100"}
                                                borderRadius="2xl"
                                                border="2px solid"
                                                borderColor={chapter.questions > 0 ? "transparent" : "gray.200"}
                                                _hover={{
                                                    transform: 'translateX(6px)',
                                                    shadow: 'xl'
                                                }}
                                                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                                opacity={chapter.questions > 0 ? 1 : 0.7}
                                                cursor={chapter.questions > 0 ? "pointer" : "not-allowed"}
                                                position="relative"
                                                overflow="hidden"
                                            >
                                                {chapter.questions > 0 && (
                                                    <Box
                                                        position="absolute"
                                                        top="0"
                                                        left="0"
                                                        w="100%"
                                                        h="100%"
                                                        bg="rgba(255,255,255,0.15)"
                                                        opacity="0"
                                                        _hover={{ opacity: 1 }}
                                                        transition="opacity 0.3s ease"
                                                    />
                                                )}

                                                <Flex align="center" justify="space-between" position="relative">
                                                    <VStack align="start" gap={2}>
                                                        <Text
                                                            fontWeight="800"
                                                            fontSize="lg"
                                                            color={chapter.questions > 0 ? "black" : "gray.700"}
                                                            textShadow={chapter.questions > 0 ? "none" : "none"}
                                                        >
                                                            {chapter.name}
                                                        </Text>
                                                        <HStack gap={3}>
                                                            <Badge
                                                                colorScheme={chapter.difficulty === 'Easy' ? 'green' : 'orange'}
                                                                variant="solid"
                                                                fontSize="xs"
                                                                px={2}
                                                                py={1}
                                                                borderRadius="md"
                                                            >
                                                                {chapter.difficulty}
                                                            </Badge>
                                                            <Badge
                                                                bg={chapter.questions > 0 ? "rgba(255,255,255,0.25)" : "gray.200"}
                                                                color={chapter.questions > 0 ? "white" : "gray.700"}
                                                                fontSize="xs"
                                                                px={2}
                                                                py={1}
                                                                borderRadius="md"
                                                                border={chapter.questions > 0 ? "1px solid rgba(255,255,255,0.3)" : "none"}
                                                            >
                                                                {chapter.questions} questions
                                                            </Badge>
                                                        </HStack>
                                                    </VStack>

                                                    <Box
                                                        fontSize="2xl"
                                                        color={chapter.questions > 0 ? "white" : "gray.400"}
                                                        transform={chapter.questions > 0 ? "scale(1)" : "scale(0.8)"}
                                                        transition="transform 0.2s ease"
                                                        filter={chapter.questions > 0 ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none"}
                                                    >
                                                        {chapter.questions > 0 ? '▶️' : '🔒'}
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Link>
                                    ))}
                                </VStack>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Footer Message */}
                <Box
                    textAlign="center"
                    py={10}
                    bg="rgba(255, 255, 255, 0.98)"
                    backdropFilter="blur(20px)"
                    borderRadius="3xl"
                    shadow="xl"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.4)"
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        h="100%"
                        bg="linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(240, 147, 251, 0.05))"
                    />
                    <VStack gap={4} position="relative">
                        <Text fontSize="4xl" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))">🌟</Text>
                        <Text
                            bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                            backgroundClip="text"
                            fontSize="2xl"
                            fontWeight="700"
                        >
                            More exciting quizzes coming soon!
                        </Text>
                        <Text
                            color="gray.700"
                            fontSize="lg"
                            fontWeight="500"
                        >
                            Keep learning and having fun with knowledge! 🚀
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default Home 