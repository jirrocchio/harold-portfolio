'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Lock, Smartphone, Database } from 'lucide-react'
import { projects } from '../../lib/data'

const CATS = ['All', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [modal, setModal] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">04 — Projects</div>
          <h2 className="section-heading">What I've Built</h2>
          <div className="section-line"/>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200"
              style={filter===cat
                ? { background:'var(--red)', color:'#fff', boxShadow:'0 4px 14px rgba(230,51,41,0.3)' }
                : { background:'var(--bg2)', color:'var(--text2)', border:'1px solid var(--border2)' }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:0.95 }} transition={{ delay:i*0.1 }}
                className="card p-8 relative overflow-hidden group cursor-pointer hover:-translate-y-2"
                onClick={() => setModal(p)}>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background:'linear-gradient(to right, var(--red), rgba(230,51,41,0.3))' }}/>
                {p.featured && (
                  <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{ background:'var(--red)', color:'#fff' }}>Featured</span>
                )}
                <div className="text-xs font-mono mb-2" style={{ color:'var(--text3)' }}>{String(p.id).padStart(3,'0')} · {p.date}</div>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-1" style={{ color:'var(--text)' }}>{p.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color:'var(--red)' }}>{p.subtitle}</p>
                <p className="text-sm leading-loose mb-5" style={{ color:'var(--text2)' }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="mt-5 text-xs font-semibold flex items-center gap-1" style={{ color:'var(--red)' }}>
                  View case study →
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background:'rgba(0,0,0,0.7)', backdropFilter:'blur(8px)' }}
            onClick={() => setModal(null)}>
            <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl p-8"
              style={{ background:'var(--bg)', border:'1px solid var(--border)' }}
              onClick={e => e.stopPropagation()}>
              <button onClick={() => setModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background:'var(--bg2)', color:'var(--text2)' }}>
                <X size={16}/>
              </button>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background:'var(--red)' }}/>
              <div className="text-4xl mb-4">{modal.icon}</div>
              <div className="tag inline-block mb-3">{modal.category}</div>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color:'var(--text)' }}>{modal.title}</h3>
              <p className="text-sm font-semibold mb-4" style={{ color:'var(--red)' }}>{modal.subtitle}</p>
              <p className="text-sm leading-loose mb-6" style={{ color:'var(--text2)' }}>{modal.description}</p>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color:'var(--text3)' }}>Key Features</h4>
              <ul className="space-y-2 mb-6">
                {modal.highlights.map(h => (
                  <li key={h} className="text-sm flex items-start gap-2" style={{ color:'var(--text2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background:'var(--red)' }}/>{h}
                  </li>
                ))}
              </ul>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color:'var(--text3)' }}>Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {modal.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
