import { useState, useEffect } from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import Overview from './components/Overview'
import Assignments from './components/Assignments'
import Quizzez from './components/Quizzez'
import Exam from './components/Exam'

function AnimatedRoutes() {
  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
        path='/'
        element={
          <PageWrapper>
            <Overview />
          </PageWrapper>
        } />
        <Route
        path='/assignments'
        element={
          <PageWrapper>
            <Assignments />
          </PageWrapper>
        } />
        <Route
        path='/quizzez'
        element={
          <PageWrapper>
            <Quizzez />
          </PageWrapper>
        } />
        <Route
        path='/exam'
        element={
          <PageWrapper>
            <Exam />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({ children }) {
  return(
    <motion.div
      initial={{ opacity: 0, x:50 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x:-50 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className='h-screen w-screen relative'>
        <button className="z-50 fixed bottom-4 right-4 h-16 w-16 flex items-center justify-center bg-surfaceContainerHigh rounded-full drop-shadow-xl hover:shadow-xl hover:bg-surfaceContainerHighest" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <svg 
            className="text-onPrimaryContainer"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
