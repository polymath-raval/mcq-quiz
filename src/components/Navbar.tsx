import { Box, Flex, Heading, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Box
            position="sticky"
            top="0"
            zIndex="10"
            backdropFilter="blur(20px)"
            bg="rgba(255, 255, 255, 0.95)"
            borderBottom="1px solid"
            borderColor="rgba(255, 255, 255, 0.3)"
            shadow="lg"
        >
            <Flex
                maxW="1200px"
                mx="auto"
                justify="space-between"
                align="center"
                px={{ base: 4, md: 8 }}
                py={4}
            >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <HStack gap={3}>
                        <Box
                            fontSize="2xl"
                            w="12"
                            h="12"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            borderRadius="xl"
                            color="white"
                            shadow="lg"
                        >
                            🎓
                        </Box>
                        <Heading
                            size={{ base: "md", md: "lg" }}
                            bgGradient="linear(135deg, #667eea, #764ba2)"
                            backgroundClip="text"
                            fontWeight="800"
                            letterSpacing="-0.02em"
                        >
                            Kids Quiz
                        </Heading>
                    </HStack>
                </Link>

                <Link to="/">
                    <Button
                        size={{ base: "sm", md: "md" }}
                        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        color="white"
                        fontWeight="600"
                        borderRadius="xl"
                        px={6}
                        py={2}
                        shadow="lg"
                        _hover={{
                            transform: 'translateY(-2px)',
                            shadow: 'xl',
                            bg: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)"
                        }}
                        _active={{
                            transform: 'translateY(0px)',
                        }}
                        transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                        border="none"
                    >
                        🏠 Home
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Navbar 