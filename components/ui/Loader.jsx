'use client'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0a0a0a' }} exit={{ opacity: 0 }}>
      {/* Spinning ring */}
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }} className="relative mb-8">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full"
          style={{ border: '2px solid transparent', borderTopColor: '#e63329', borderRightColor: 'rgba(230,51,41,0.2)' }} />
        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xl text-white">
          HJM
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
        Harold Jirro I. Madrona
      </motion.p>
      {/* Progress bar */}
      <div className="w-48 h-0.5 rounded-full overflow-hidden bg-gray-800">
        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-full rounded-full" style={{ background: 'linear-gradient(to right, #e63329, #ff4d42)' }} />
      </div>
    </motion.div>
  )
}
