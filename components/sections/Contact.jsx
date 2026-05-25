'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader, Github, Linkedin, Facebook } from 'lucide-react'
import { personal } from '../../lib/data'

// 👉 Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
const FORMSPREE = 'https://formspree.io/f/mqejdyob'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })

  const onChange = e => setForm({...form, [e.target.name]:e.target.value})

  const onSubmit = async e => {
    e.preventDefault(); setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({name:'',email:'',subject:'',message:''}) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle = {
    background:'var(--bg2)', border:'1.5px solid var(--border2)', color:'var(--text)',
    fontFamily:'inherit', outline:'none', borderRadius:'12px',
    padding:'0.85rem 1.1rem', fontSize:'0.9rem', width:'100%', transition:'border-color .2s',
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10 relative z-10" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="section-tag">07 — Contact</div>
          <h2 className="section-heading">Let's Work Together</h2>
          <div className="section-line"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Info */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color:'var(--text)' }}>Open to Opportunities</h3>
            <p className="text-sm leading-loose mb-8" style={{ color:'var(--text2)' }}>
              Whether you need a developer, designer, virtual assistant, or a versatile team member — I'd love to connect. Based in Nueva Ecija, Philippines. Available remotely worldwide.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon:Mail, label:personal.email, href:`mailto:${personal.email}` },
                { icon:Phone, label:personal.phone, href:`tel:${personal.phone.replace(/-/g,'')}` },
                { icon:MapPin, label:personal.location, href:null },
              ].map(({ icon:Icon, label, href }) => (
                <a key={label} href={href||undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl text-sm transition-all duration-200"
                  style={{ background:'var(--bg)', border:'1px solid var(--border2)', color:'var(--text2)', cursor:href?'pointer':'default' }}
                  onMouseEnter={e=>{ if(href){e.currentTarget.style.borderColor='var(--red)';e.currentTarget.style.color='var(--red)';e.currentTarget.style.transform='translateX(5px)'} }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border2)';e.currentTarget.style.color='var(--text2)';e.currentTarget.style.transform='none' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background:'var(--red-soft)', border:'1px solid rgba(230,51,41,0.18)' }}>
                    <Icon size={15} style={{ color:'var(--red)' }}/>
                  </div>
                  {label}
                </a>
              ))}
            </div>

            {/* Social */}
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color:'var(--text3)' }}>Social</p>
            <div className="flex gap-3">
              {[
                { icon:Github, href:personal.social.github },
                { icon:Linkedin, href:personal.social.linkedin },
                { icon:Facebook, href:personal.social.facebook },
              ].map(({ icon:Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ background:'var(--bg)', border:'1px solid var(--border2)', color:'var(--text3)' }}
                  onMouseEnter={e=>{ e.currentTarget.style.background='var(--red)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='var(--red)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--text3)'; e.currentTarget.style.borderColor='var(--border2)' }}>
                  <Icon size={16}/>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <AnimatePresence mode="wait">
              {status==='success' ? (
                <motion.div key="success" initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                  style={{ background:'var(--bg)', border:'1.5px solid var(--border)' }}>
                  <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', stiffness:200, delay:0.1 }}>
                    <CheckCircle size={52} style={{ color:'var(--red)' }} className="mb-4 mx-auto"/>
                  </motion.div>
                  <h4 className="font-display text-xl font-bold mb-2" style={{ color:'var(--text)' }}>Message Sent!</h4>
                  <p className="text-sm mb-6" style={{ color:'var(--text2)' }}>I'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs px-6 py-2">Send Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[{l:'Your Name',t:'text',n:'name',p:'John Smith'},{l:'Email Address',t:'email',n:'email',p:'john@example.com'}].map(f=>(
                      <div key={f.n} className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-semibold" style={{ color:'var(--red)' }}>{f.l}</label>
                        <input type={f.t} name={f.n} value={form[f.n]} onChange={onChange} placeholder={f.p}
                          required disabled={status==='sending'} style={inputStyle}
                          onFocus={e=>e.target.style.borderColor='var(--red)'}
                          onBlur={e=>e.target.style.borderColor='var(--border2)'}/>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color:'var(--red)' }}>Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={onChange}
                      placeholder="Job opportunity / Project inquiry / Collaboration"
                      required disabled={status==='sending'} style={inputStyle}
                      onFocus={e=>e.target.style.borderColor='var(--red)'}
                      onBlur={e=>e.target.style.borderColor='var(--border2)'}/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color:'var(--red)' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={5}
                      placeholder="Tell me about the role, project, or how I can help..."
                      required disabled={status==='sending'}
                      style={{ ...inputStyle, resize:'vertical' }}
                      onFocus={e=>e.target.style.borderColor='var(--red)'}
                      onBlur={e=>e.target.style.borderColor='var(--border2)'}/>
                  </div>
                  {status==='error' && (
                    <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                      style={{ background:'rgba(230,51,41,0.07)', border:'1px solid rgba(230,51,41,0.2)', color:'var(--red)' }}>
                      <AlertCircle size={15}/> Something went wrong. Please email me directly.
                    </motion.div>
                  )}
                  <button type="submit" disabled={status==='sending'} className="btn-primary w-full justify-center disabled:opacity-60">
                    {status==='sending' ? <><Loader size={14} className="animate-spin"/>Sending...</> : <><Send size={14}/>Send Message</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
