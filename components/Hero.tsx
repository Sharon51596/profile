'use client'

import { useEffect, useState } from 'react'
import Vinyl from './Vinyl'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Brand Activation & Event Operations Professional'

  useEffect(() => {
    setIsVisible(true)
    
    // Typewriter effect
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bgDecor}>
        {/* Floating notes */}
        <span className={styles.note} style={{ top: '15%', left: '8%' }}>♪</span>
        <span className={styles.note} style={{ top: '70%', left: '5%' }}>♫</span>
        <span className={styles.note} style={{ top: '25%', right: '10%' }}>♪</span>
        <span className={styles.note} style={{ top: '80%', right: '8%' }}>♫</span>
        
        {/* Circle decorations */}
        <div className={styles.circle} style={{ top: '10%', left: '15%' }}></div>
        <div className={styles.circle} style={{ bottom: '20%', right: '12%' }}></div>
        <div className={styles.circleOutline} style={{ top: '60%', left: '10%' }}></div>
        <div className={styles.circleOutline} style={{ top: '30%', right: '5%' }}></div>
        
        {/* Line decorations */}
        <div className={styles.line} style={{ top: '40%', left: '3%' }}></div>
        <div className={styles.line} style={{ bottom: '30%', right: '3%' }}></div>
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.particle} style={{ '--delay': `${i * 1.5}s`, '--x': `${10 + i * 12}%` } as React.CSSProperties} />
        ))}
      </div>

      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.playerContainer}>
          {/* Vinyl glow */}
          <div className={styles.vinylGlow}></div>
          <Vinyl isPlaying={true} label="Now Playing" profileImage="/images/profile.JPG" />
        </div>
        
        <div className={styles.info}>
          <span className={styles.label}>
            <span className={styles.dot}></span>
            Now Playing
          </span>
          <h1 className={styles.title}>
            {'MA YU-TING'.split('').map((char, i) => (
              <span 
                key={i} 
                className={styles.titleChar}
                style={{ animationDelay: `${0.5 + i * 0.05}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>
            {typedText}
            <span className={styles.cursor}>|</span>
          </p>
          <div className={styles.description}>
             <p>Skilled in stakeholder communication, cross-team alignment, and fast-paced project execution.</p>
          </div>
          
          {/* Quick tags */}
          <div className={styles.quickTags}>
            <span>Marketing</span>
            <span>Events</span>
            <span>Project Management</span>
          </div>
          
          <div className={styles.cta}>
             <a href="#about" className={styles.button}>
               <span>Read Liner Notes</span>
             </a>
             <a href="#projects" className={styles.buttonSecondary}>
               <span>View Works</span>
             </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
      
      {/* Bottom wave */}
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="var(--bg-color)"/>
        </svg>
      </div>
    </section>
  )
}
