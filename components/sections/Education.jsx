'use client'
import { motion } from 'framer-motion'
import { education, activities } from '../../lib/data'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">05 — Education</div>
          <h2 className="section-heading">Academic Background</h2>
          <div className="section-line"/>
        </motion.div>
        <div className="space-y-5">
          {[...education.map(e=>({...e,isEdu:true})), ...activities.map(a=>({...a,isEdu:false}))].map((item, i) => (
            <motion.div key={item.degree||item.role} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.12 }}
              className="card p-7 md:p-8 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-0.5 group">
              <div className="w-14 h-14 min-w-[3.5rem] rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                style={{ background:'var(--red-soft)', border:'1px solid rgba(230,51,41,0.18)' }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg font-bold leading-tight" style={{ color:'var(--text)' }}>
                    {item.degree||item.role}
                  </h3>
                  <span className="tag flex-shrink-0">{item.type}</span>
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color:'var(--red)' }}>
                  {item.school||item.org}
                </p>
                <p className="text-xs font-mono mb-2" style={{ color:'var(--text3)' }}>
                  {item.period}{item.location?` · ${item.location}`:''}
                </p>
                {item.desc && <p className="text-sm leading-relaxed" style={{ color:'var(--text2)' }}>{item.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
