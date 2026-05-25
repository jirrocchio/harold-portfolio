'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Github, Linkedin, Facebook, Mail } from 'lucide-react'
import { personal } from '../../lib/data'
import Image from 'next/image'

/* Typewriter cycling through roles */
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t
    if (!del && text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length+1)), 75)
    else if (!del && text.length === word.length) t = setTimeout(() => setDel(true), 1800)
    else if (del && text.length > 0) t = setTimeout(() => setText(text.slice(0,-1)), 40)
    else if (del) { setDel(false); setIdx(i => (i+1)%words.length) }
    return () => clearTimeout(t)
  }, [text, del, idx, words])

  return (
    <span style={{ color:'var(--red)', fontWeight:600 }}>
      {text}<span style={{ animation:'blink 1s infinite' }}>|</span>
    </span>
  )
}

export default function Hero() {
  const socials = [
    { icon: Github, href: personal.social.github },
    { icon: Linkedin, href: personal.social.linkedin },
    { icon: Facebook, href: personal.social.facebook },
    { icon: Mail, href: `mailto:${personal.email}` },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-10"
      style={{ background:'var(--bg)' }}>

      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <div style={{
          position:'absolute', top:0, right:0, bottom:0,
          width:'100%',
          background:'linear-gradient(135deg, transparent 40%, var(--red-soft) 100%)',
        }}/>
        {/* Grid lines */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(230,51,41,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(230,51,41,0.06) 1px,transparent 1px)',
          backgroundSize:'48px 48px',
          maskImage:'linear-gradient(to left, black 20%, transparent 80%)',
        }}/>
      </div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center pt-24 pb-16">
        {/* LEFT — Text */}
        <div className="relative z-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-7 px-4 py-2 rounded-full"
            style={{ background:'var(--red-soft)', color:'var(--red)', border:'1px solid rgba(230,51,41,0.2)' }}>
            <Sparkles size={11}/> Available for Opportunities
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            className="font-display font-black leading-none mb-3"
            style={{ fontSize:'clamp(2.8rem,6vw,5rem)', letterSpacing:'-0.02em', color:'var(--text)' }}>
            {personal.name.split(' ').slice(0,2).join(' ')}
            <br/>
            <span style={{ color:'var(--red)' }}>{personal.name.split(' ').slice(2).join(' ')}</span>
          </motion.h1>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }}
            className="text-lg mb-3 h-8" style={{ color:'var(--text2)' }}>
            <Typewriter words={personal.roles}/>
          </motion.p>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.45 }}
            className="text-sm leading-loose mb-9 max-w-md" style={{ color:'var(--text2)' }}>
            {personal.summary}
          </motion.p>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
            className="flex flex-wrap gap-3 mb-10">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Hire Me</a>
            <a href="/Harold_Jirro_Madrona_CV.pdf" download className="btn-secondary">Download CV</a>
          </motion.div>

          {/* Social icons */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.65 }}
            className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest mr-1" style={{ color:'var(--text3)' }}>Follow</span>
            {socials.map(({ icon:Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background:'var(--bg2)', border:'1px solid var(--border2)', color:'var(--text3)' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='var(--red)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='var(--red)' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='var(--bg2)'; e.currentTarget.style.color='var(--text3)'; e.currentTarget.style.borderColor='var(--border2)' }}>
                <Icon size={15}/>
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1, delay:0.3, ease:'easeOut' }}
          className="relative hidden md:flex items-end justify-center self-end"
          style={{ minHeight:'65vh' }}>

          {/* Red blob behind photo */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background:'radial-gradient(ellipse 75% 65% at 50% 60%, rgba(230,51,41,0.08) 0%, transparent 65%)',
          }}/>

          {/* Floating badge */}
          <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
            className="absolute top-8 right-4 px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-lg z-10"
            style={{ background:'var(--red)', color:'#fff', boxShadow:'0 8px 24px rgba(230,51,41,0.3)' }}>
            ✨ Open to Work
          </motion.div>

          {/* Experience badge */}
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut', delay:0.5 }}
            className="absolute bottom-20 right-2 px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-lg z-10"
            style={{ background:'var(--bg3)', color:'var(--text)', border:'1px solid var(--border)', boxShadow:'var(--shadow-lg)' }}>
            💼 IT Graduate 2026
          </motion.div>

          {/* Photo */}
          <img src="/profile.jpg" alt={personal.name}
            style={{
              width:'100%', maxHeight:'68vh',
              objectFit:'cover', objectPosition:'top center',
              maskImage:'radial-gradient(ellipse 88% 92% at 50% 28%, black 20%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.18) 75%, transparent 100%)',
              WebkitMaskImage:'radial-gradient(ellipse 88% 92% at 50% 28%, black 20%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.18) 75%, transparent 100%)',
              filter:'brightness(0.96) contrast(1.04)',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color:'var(--text3)' }}>
        <div style={{ width:1, height:44, background:'linear-gradient(to bottom,var(--red),transparent)', animation:'scrollLine 2s infinite' }}/>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
