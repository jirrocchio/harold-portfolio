'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.5 }}
          whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ background:'#e63329', color:'#fff', boxShadow:'0 4px 20px rgba(230,51,41,0.4)' }}>
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
