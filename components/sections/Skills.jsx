'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../lib/data'

export default function Skills() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="skills" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">02 — Skills</div>
          <h2 className="section-heading">My Toolkit</h2>
          <div className="section-line"/>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat, i) => (
            <motion.div key={cat.category} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.08 }}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              className="card p-7 cursor-default"
              style={{ borderColor: hovered===i ? 'var(--red)' : undefined, transform: hovered===i ? 'translateY(-5px)' : 'none' }}>
              <motion.div animate={{ rotate: hovered===i ? [0,-8,8,0] : 0 }} transition={{ duration:0.4 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background:'var(--red-soft)', border:'1px solid rgba(230,51,41,0.18)' }}>
                {cat.icon}
              </motion.div>
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color:'var(--red)', letterSpacing:'0.12em' }}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
