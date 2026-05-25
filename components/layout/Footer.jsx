'use client'
import { Heart, Github, Linkedin, Facebook, Mail } from 'lucide-react'
import { personal } from '../../lib/data'

export default function Footer() {
  const NAV = ['About','Skills','Experience','Projects','Education','Contact']
  return (
    <footer className="relative z-10 py-12 px-6 md:px-10" style={{ background:'var(--bg2)', borderTop:'1px solid var(--border2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl mb-2" style={{ color:'var(--red)' }}>{personal.initials}</div>
            <p className="text-sm mb-1 font-semibold" style={{ color:'var(--text)' }}>{personal.name}</p>
            <p className="text-xs mb-4" style={{ color:'var(--text3)' }}>{personal.tagline}</p>
            <p className="text-xs" style={{ color:'var(--text3)' }}>{personal.location}</p>
          </div>
          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color:'var(--red)' }}>Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`}
                  className="text-xs transition-colors" style={{ color:'var(--text3)' }}
                  onMouseEnter={e=>e.target.style.color='var(--red)'}
                  onMouseLeave={e=>e.target.style.color='var(--text3)'}>
                  {n}
                </a>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color:'var(--red)' }}>Connect</p>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Github, href: personal.social.github, label:'GitHub' },
                { icon: Linkedin, href: personal.social.linkedin, label:'LinkedIn' },
                { icon: Facebook, href: personal.social.facebook, label:'Facebook' },
                { icon: Mail, href: `mailto:${personal.email}`, label:'Email' },
              ].map(({ icon:Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{ background:'var(--bg3)', border:'1px solid var(--border2)', color:'var(--text3)' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='var(--red)';e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='var(--red)'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='var(--bg3)';e.currentTarget.style.color='var(--text3)';e.currentTarget.style.borderColor='var(--border2)'}}>
                  <Icon size={15}/>
                </a>
              ))}
            </div>
            <a href={`mailto:${personal.email}`} className="text-xs transition-colors" style={{ color:'var(--text3)' }}
              onMouseEnter={e=>e.target.style.color='var(--red)'} onMouseLeave={e=>e.target.style.color='var(--text3)'}>
              {personal.email}
            </a>
          </div>
        </div>
        <div className="pt-6 flex items-center justify-between flex-wrap gap-3" style={{ borderTop:'1px solid var(--border2)' }}>
          <p className="text-xs" style={{ color:'var(--text3)' }}>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="text-xs flex items-center gap-1.5" style={{ color:'var(--text3)' }}>
            Built with <Heart size={11} style={{ color:'var(--red)' }} fill="currentColor"/> in the Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
