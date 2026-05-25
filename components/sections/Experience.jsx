'use client'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">03 — Experience</div>
          <h2 className="section-heading">Work History</h2>
          <div className="section-line"/>
        </motion.div>
        <div className="relative pl-6 md:pl-10" style={{ borderLeft:'2px solid var(--border)' }}>
          {experience.map((exp, i) => (
            <motion.div key={exp.company} initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1 }}
              className="relative mb-10 pl-6 md:pl-10">
              {/* Timeline node */}
              <div className="absolute -left-[calc(1.5rem+1px)] md:-left-[calc(2.5rem+1px)] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ background:'var(--bg2)', borderColor:'var(--red)', boxShadow:'0 0 0 4px var(--red-soft)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background:'var(--red)' }}/>
              </div>
              <div className="card p-7 md:p-8 hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ background:'var(--red-soft)', color:'var(--red)', border:'1px solid rgba(230,51,41,0.18)' }}>
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide"
                    style={{ color:'var(--text3)' }}>
                    <Briefcase size={11}/> {exp.type}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1" style={{ color:'var(--text)' }}>{exp.role}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color:'var(--red)' }}>{exp.company}</p>
                <p className="text-xs mb-5" style={{ color:'var(--text3)' }}>{exp.location}</p>
                <ul className="space-y-3">
                  {exp.highlights.map(h => (
                    <li key={h} className="text-sm pl-5 relative leading-relaxed" style={{ color:'var(--text2)' }}>
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:'var(--red)' }}/>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
