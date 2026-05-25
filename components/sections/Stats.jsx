'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../../lib/data'

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let n = 0
    const step = Math.ceil(target / 40)
    const t = setInterval(() => { n += step; if (n >= target) { setCount(target); clearInterval(t) } else setCount(n) }, 35)
    return () => clearInterval(t)
  }, [start, target])
  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold:0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 px-6 md:px-10 relative z-10" style={{ background:'var(--red)', color:'#fff' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.1 }}
            className="text-center">
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="font-display font-black text-4xl mb-1 text-white">
              <CountUp target={s.value} suffix={s.suffix} start={started}/>
            </div>
            <p className="text-xs uppercase tracking-widest text-red-100">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
