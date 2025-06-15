import {
    Box,
    Heading,
    Text,
    VStack,
    Container,
    HStack,
    Badge,
    SimpleGrid,
    Flex,
    Icon,
    Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaFilePdf, FaPodcast, FaDownload } from 'react-icons/fa'

const subjects = [
    {
        name: 'Class 6 Chemistry',
        folderName: 'chemistry',
        gradient: 'linear(135deg, #2196F3 0%, #1976D2 100%)',
        lightBg: 'rgba(33, 150, 243, 0.1)',
        description: 'Introduction to Chemistry',
        resources: [
            {
                name: 'Chapter 1 PDF',
                path: '/data/questions/chemistry/chapter1/chapter1.pdf',
                type: 'pdf',
                icon: FaFilePdf,
                color: 'red.500'
            },
            {
                name: 'Chapter 1 Podcast',
                path: '/data/questions/chemistry/chapter1/chapter1.wav',
                type: 'audio',
                icon: FaPodcast,
                color: 'purple.500'
            }
        ],
        chapters: [
            { name: 'Easy Paper 1', path: 'chapter1/easy-2', difficulty: 'easy', questions: 15 },
            { name: 'Easy Paper 2', path: 'chapter1/easy-1', difficulty: 'easy', questions: 30 },
            { name: 'Medium Paper 1', path: 'chapter1/medium-1', difficulty: 'medium', questions: 30 },
            { name: 'Medium Paper 2', path: 'chapter1/medium-2', difficulty: 'medium', questions: 30 },
            { name: 'Medium Paper 3', path: 'chapter1/medium-3', difficulty: 'medium', questions: 30 },
            { name: 'Hard Paper 1', path: 'chapter1/hard-1', difficulty: 'hard', questions: 30 }
        ]
    }
]

// Difficulty dot component
const DifficultyDots = ({ difficulty }: { difficulty: string }) => {
    const getDotColor = (level: string) => {
        switch (level) {
            case 'easy': return 'green.400'
            case 'medium': return 'orange.400'
            case 'hard': return 'red.400'
            default: return 'gray.400'
        }
    }

    const getDotCount = (level: string) => {
        switch (level) {
            case 'easy': return 1
            case 'medium': return 2
            case 'hard': return 3
            default: return 1
        }
    }

    const activeDots = getDotCount(difficulty)
    const color = getDotColor(difficulty)

    return (
        <HStack gap={1}>
            {[1, 2, 3].map((dot) => (
                <Box
                    key={dot}
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={dot <= activeDots ? color : 'gray.300'}
                    transition="all 0.2s ease"
                />
            ))}
        </HStack>
    )
}

const Home = () => {
    return (
        <Container maxW="6xl" centerContent>
            {/* Header */}
            <Box
                w="100%"
                py={4}
                px={6}
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                shadow="md"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                mt={2}
                mb={8}
            >
                <Flex align="center" justify="space-between" flexWrap="wrap" gap={4}>
                    {/* Logo/Title Section */}
                    <Flex align="center" gap={3} id="mainHeader">
                        <Text fontSize="2xl">🎓</Text>
                        <Box>
                            <Heading
                                size="md"
                                color="gray.800"
                                fontWeight="700"
                            >
                                Shlok's Study Hub
                            </Heading>
                            <Text fontSize="xs" color="gray.600" fontWeight="500">
                                Standard 6 Learning Center
                            </Text>
                        </Box>
                    </Flex>

                    {/* Stats Section */}
                    <Flex gap={6} align="center">
                        <Box textAlign="center">
                            <Text fontSize="lg" fontWeight="700" color="blue.500">6</Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="600">PAPERS</Text>
                        </Box>
                        <Box w="1px" h="6" bg="gray.300" />
                        <Box textAlign="center">
                            <Text fontSize="lg" fontWeight="700" color="purple.500">1</Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="600">SUBJECT</Text>
                        </Box>
                        <Box w="1px" h="6" bg="gray.300" />
                        <Box textAlign="center">
                            <Text fontSize="lg" fontWeight="700" color="green.500">195</Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="600">QUESTIONS</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            <VStack gap={16} w="100%" align="stretch">
                {/* Hero Section */}
                <Box textAlign="center" py={6}>
                    <VStack gap={8}>
                        <HStack gap={4} justify="center" align="center">
                            <Box
                                fontSize="6xl"
                                filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"
                                animation="float 3s ease-in-out infinite"
                                css={{
                                    '@keyframes float': {
                                        '0%, 100%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-10px)' }
                                    }
                                }}
                            >
                                🌟📚
                            </Box>
                            <Heading
                                fontSize={{ base: "4xl", md: "6xl" }}
                                fontWeight="900"
                                color="white"
                                textAlign="center"
                                letterSpacing="-0.02em"
                                lineHeight="1.1"
                                textShadow="0 4px 8px rgba(0,0,0,0.3)"
                            >
                                Hey Shlok & Friends!
                            </Heading>
                        </HStack>
                        <VStack gap={4}>
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
                                Ready to ace your Standard 6 subjects? Jump into these awesome quizzes and challenge yourself while having tons of fun with your classmates!
                            </Text>
                            <Text
                                fontSize={{ base: "lg", md: "xl" }}
                                color="rgba(255,255,255,0.9)"
                                maxW="3xl"
                                textAlign="center"
                                lineHeight="1.5"
                                fontWeight="400"
                                textShadow="0 2px 4px rgba(0,0,0,0.2)"
                            >
                                Perfect for Standard 6 students who love learning through play! 🎯
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

                                {/* Resources Section */}
                                <VStack gap={4} align="stretch">
                                    <Text
                                        fontSize="sm"
                                        fontWeight="700"
                                        color="gray.600"
                                        textTransform="uppercase"
                                        letterSpacing="wider"
                                    >
                                        Learning Resources
                                    </Text>

                                    <HStack gap={4} flexWrap="wrap">
                                        {subject.resources.map((resource) => (
                                            <ChakraLink
                                                key={resource.name}
                                                href={resource.path}
                                                download
                                                _hover={{ textDecoration: 'none' }}
                                            >
                                                <Box
                                                    p={4}
                                                    bg="white"
                                                    borderRadius="xl"
                                                    border="2px solid"
                                                    borderColor="gray.200"
                                                    _hover={{
                                                        borderColor: resource.color,
                                                        transform: 'translateY(-2px)',
                                                        shadow: 'lg'
                                                    }}
                                                    transition="all 0.3s ease"
                                                    cursor="pointer"
                                                >
                                                    <HStack gap={3}>
                                                        <Icon
                                                            as={resource.icon}
                                                            color={resource.color}
                                                            fontSize="xl"
                                                        />
                                                        <VStack align="start" gap={1}>
                                                            <Text
                                                                fontSize="sm"
                                                                fontWeight="600"
                                                                color="gray.700"
                                                            >
                                                                {resource.name}
                                                            </Text>
                                                            <HStack gap={2}>
                                                                <Icon as={FaDownload} fontSize="xs" color="gray.500" />
                                                                <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                                                                    {resource.type}
                                                                </Text>
                                                            </HStack>
                                                        </VStack>
                                                    </HStack>
                                                </Box>
                                            </ChakraLink>
                                        ))}
                                    </HStack>
                                </VStack>

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
                                            Practice Papers
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
                                            {subject.chapters.length} papers
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
                                                            <HStack gap={2}>
                                                                <DifficultyDots difficulty={chapter.difficulty} />
                                                            </HStack>
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
                        <Text fontSize="4xl" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))">🎓✨</Text>
                        <Text
                            bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                            backgroundClip="text"
                            fontSize="2xl"
                            fontWeight="700"
                        >
                            Great job, Standard 6 champions!
                        </Text>
                        <Text
                            color="gray.700"
                            fontSize="lg"
                            fontWeight="500"
                        >
                            More exciting subjects and challenges coming soon for you and your friends! 🚀📖
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default Home 