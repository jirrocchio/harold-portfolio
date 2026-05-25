'use client'
import { motion } from 'framer-motion'
import { certifications } from '../../lib/data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">06 — Certifications</div>
          <h2 className="section-heading">Credentials</h2>
          <div className="section-line"/>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div key={cert.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1 }}
              className="card p-6 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background:'var(--red)' }}/>
              <div className="text-3xl mb-4">{cert.icon}</div>
              <div className="tag inline-block mb-3">{cert.category}</div>
              <h3 className="font-semibold text-sm mb-1 leading-snug" style={{ color:'var(--text)' }}>{cert.title}</h3>
              <p className="text-xs font-semibold mb-1" style={{ color:'var(--red)' }}>{cert.issuer}</p>
              <p className="text-xs mb-3" style={{ color:'var(--text3)' }}>{cert.year}</p>
              <p className="text-xs leading-relaxed" style={{ color:'var(--text2)' }}>{cert.desc}</p>
            </motion.div>
          ))}

          {/* Add more placeholder */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            className="card p-6 flex flex-col items-center justify-center text-center border-dashed"
            style={{ borderStyle:'dashed', minHeight:180 }}>
            <div className="text-3xl mb-3">➕</div>
            <p className="text-sm font-semibold mb-1" style={{ color:'var(--text2)' }}>More Coming Soon</p>
            <p className="text-xs" style={{ color:'var(--text3)' }}>Add your certifications in lib/data.js</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
