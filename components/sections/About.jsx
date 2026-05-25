'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Zap, User } from 'lucide-react'
import { personal, jobRoles } from '../../lib/data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">01 — About Me</div>
          <h2 className="section-heading">Who I Am</h2>
          <div className="section-line"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 mb-16">
          {/* Text */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <p className="text-base leading-loose mb-6" style={{ color:'var(--text2)' }}>{personal.summary}</p>
            <p className="text-sm leading-loose mb-8" style={{ color:'var(--text2)' }}>
              I am an IT graduate with a passion for building clean, functional systems and beautiful interfaces. My background spans development, design, and operations — making me adaptable to technical and non-technical roles alike.
            </p>
            {/* Info chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon:MapPin, text:personal.location },
                { icon:Mail, text:personal.email },
                { icon:Phone, text:personal.phone },
                { icon:Zap, text:'Open to Work' },
              ].map(({ icon:Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                  style={{ background:'var(--red-soft)', color:'var(--red)', border:'1px solid rgba(230,51,41,0.15)' }}>
                  <Icon size={11}/> {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What I bring */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <h3 className="font-display text-xl font-bold mb-5" style={{ color:'var(--text)' }}>What I Bring</h3>
            <div className="space-y-3">
              {[
                { t:'Technical Depth', d:'Full-stack development, system security, testing & QA — built through 4 years of study and real-world internship.' },
                { t:'Creative Eye', d:'UI/UX design, graphic design, video editing — producing polished work across multiple visual mediums.' },
                { t:'Operational Reliability', d:'Data encoding, documentation, scheduling, and client communication — dependable in any office or admin setting.' },
                { t:'Fast Learner', d:'Adaptable to new tools, workflows, and industries — I pick things up quickly and perform under pressure.' },
              ].map((item, i) => (
                <motion.div key={item.t} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  className="card p-4 flex gap-3 hover:-translate-y-0.5">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background:'var(--red)' }}/>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color:'var(--text)' }}>{item.t}</p>
                    <p className="text-xs leading-relaxed" style={{ color:'var(--text2)' }}>{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Job roles grid */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h3 className="font-display text-xl font-bold mb-6 text-center" style={{ color:'var(--text)' }}>
            Roles I Can Fill
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {jobRoles.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ delay:i*0.06 }}
                className="card p-4 text-center hover:-translate-y-1 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{r.icon}</div>
                <p className="text-xs font-semibold mb-1" style={{ color:'var(--text)' }}>{r.label}</p>
                <p className="text-xs" style={{ color:'var(--text3)' }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
