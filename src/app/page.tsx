'use client'

import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Variants,
  MotionStyle,
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

interface WindowDimensions {
  width: number
  height: number
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}

const useWindowDimensions = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (typeof window !== 'undefined') {
      handleResize()

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}

const CharacterReveal: React.FC<{
  text: string
  delay?: number
}> = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const mousePosition = useMousePosition()
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [cursorVariant, setCursorVariant] = useState<'default' | 'button'>(
    'default',
  )

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    mouseX.set(mousePosition.x)
    mouseY.set(mousePosition.y)
  }, [mousePosition, mouseX, mouseY])

  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    cursorX.set(mousePosition.x)
    cursorY.set(mousePosition.y)
  }, [mousePosition, cursorX, cursorY])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const enterButton = () => setCursorVariant('button')
  const leaveButton = () => setCursorVariant('default')

  const cursorVariants: Variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
    },
    button: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
    },
  }

  const cursorStyle: MotionStyle = {
    translateX: '-50%',
    translateY: '-50%',
    x: cursorXSpring,
    y: cursorYSpring,
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 backdrop-blur-sm hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        style={cursorStyle}
      />

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{
              height: 0,
              transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <motion.div
              className="text-white text-3xl"
              exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
            >
              <CharacterReveal text="YOUR TEAM NAME" delay={0.2} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden bg-black" ref={containerRef}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/your-background-video.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="absolute inset-0 z-10 mix-blend-overlay opacity-30"
          style={{
            backgroundImage: "url('/noise-texture.png')",
            backgroundRepeat: 'repeat',
          }}
          animate={{
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
            ease: 'linear',
          }}
        />

        <motion.div
          className="relative z-20 flex flex-col justify-center items-center w-full min-h-screen px-4 py-16 md:py-0 max-w-7xl mx-auto"
          style={{ opacity }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/10 blur-3xl"
            style={{
              x: useTransform(mouseX, [0, windowWidth], [-20, 20]),
              y: useTransform(mouseY, [0, windowHeight], [-20, 20]),
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/10 blur-3xl"
            style={{
              x: useTransform(mouseX, [0, windowWidth], [20, -20]),
              y: useTransform(mouseY, [0, windowHeight], [20, -20]),
            }}
          />

          <div className="text-center space-y-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="inline-block px-6 py-2 bg-white/5 backdrop-blur-md rounded-full mb-4 border border-white/10"
            >
              <span className="text-sm font-medium text-white/80 flex items-center justify-center">
                Creating award-winning digital experiences since 2025
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 2.2,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
              >
                <Typography
                  variant="h1"
                  font="ClashDisplay"
                  weight="bold"
                  className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
                >
                  <span className="inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-white">
                      Crafting
                    </span>
                  </span>{' '}
                  <span className="inline-block mt-2 md:mt-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400">
                      Digital
                    </span>
                  </span>{' '}
                  <span className="inline-block mt-2 md:mt-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                      Masterpieces
                    </span>
                  </span>
                </Typography>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <Typography
                variant="bt"
                className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl"
              >
                We blend cutting-edge technology with immersive design to create
                experiences that captivate, inspire, and transform digital
                landscapes.
              </Typography>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <motion.div
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="rounded-full text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none shadow-lg shadow-blue-700/20"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-10 py-6 bg-neutral-700 border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute right-10 md:right-20 top-1/3 hidden md:block"
            style={{
              rotateX: useTransform(mouseY, [0, windowHeight], [15, -15]),
              rotateY: useTransform(mouseX, [0, windowWidth], [-15, 15]),
              rotate: useTransform(scrollY, [0, 500], [0, 180]),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 3.2,
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"></div>
          </motion.div>

          <motion.div
            className="absolute left-10 md:left-20 bottom-1/3 hidden md:block"
            style={{
              rotateX: useTransform(mouseY, [0, windowHeight], [15, -15]),
              rotateY: useTransform(mouseX, [0, windowWidth], [-15, 15]),
              rotate: useTransform(scrollY, [0, 500], [0, -180]),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 3.4,
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md rounded-full border border-white/20 shadow-xl"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 3.5, duration: 1.5 }}
        />
      </div>
    </>
  )
}
