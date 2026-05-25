'use client'
import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0, raf

    const move = e => { mx = e.clientX; my = e.clientY; dot.style.left = mx+'px'; dot.style.top = my+'px' }
    const tick = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      ring.style.left = rx+'px'; ring.style.top = ry+'px'
      raf = requestAnimationFrame(tick)
    }
    const grow = () => { dot.style.width='14px';dot.style.height='14px';ring.style.width='50px';ring.style.height='50px';ring.style.opacity='0.8' }
    const shrink = () => { dot.style.width='8px';dot.style.height='8px';ring.style.width='34px';ring.style.height='34px';ring.style.opacity='0.5' }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[role=button]').forEach(el => {
      el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink)
    })
    raf = requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return <><div id="cursor-dot"/><div id="cursor-ring"/></>
}
