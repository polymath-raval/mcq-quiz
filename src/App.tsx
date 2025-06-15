import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Box
        minH="100vh"
        position="relative"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      >
        {/* Sophisticated background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          opacity="0.1"
          backgroundImage={`
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
          `}
          zIndex="0"
        />

        {/* Mesh gradient overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
          zIndex="1"
        />

        <Navbar />

        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={{ base: 6, md: 12 }}
          position="relative"
          zIndex="2"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:subject/:chapter/*" element={<Quiz />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
