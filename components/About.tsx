'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleItem = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const experiences = [
    {
      year: '2025',
      title: 'PM Assistant',
      company: 'DBS Bank',
      bullets: [
        'Consolidated project and marketing data, improving targeting accuracy by ~15%',
        'Analyzed 200+ customer feedback entries, reducing recurring issues by ~20%',
        'Coordinated cross-team communication and documentation to streamline workflows'
      ]
    },
    {
      year: '2024',
      title: 'Account Executive',
      company: 'Ogilvy',
      bullets: [
        'Supported Volkswagen Taiwan activation campaigns, managing timelines and asset delivery',
        'Served as primary liaison to ensure alignment across clients, creative teams, and production',
        'Coordinated logistics for multi-channel activations and prepared post-campaign evaluations'
      ]
    },
    {
      year: '2023-2024',
      title: 'MSc Marketing Management',
      company: 'University of Southampton',
      bullets: [
        'Marketing Communications and Media Management',
        'Digital Marketing Strategy',
        'Measuring Marketing Effectiveness'
      ]
    }
  ]

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Liner Notes</h2>
          <p className={styles.subtitle}>Side A: Professional / Side B: Personal</p>
          <p className={styles.quote}>&ldquo;Challenges sharpen the process. Problems accelerate the solution.&rdquo;</p>
        </div>
        
        <div className={styles.content}>
          <div className={`${styles.sideA} ${isVisible ? styles.visible : ''}`}>
            <h3>Side A: Professional</h3>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`${styles.item} ${expandedItems.has(index) ? styles.itemExpanded : ''}`}
                  onClick={() => toggleItem(index)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.year}>{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <p className={styles.company}>{exp.company}</p>
                    <span className={styles.expandHint}>
                      {expandedItems.has(index) ? '−' : '+'}
                    </span>
                  </div>
                  <div className={styles.itemDetails}>
                    <ul className={styles.bulletList}>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.sideB} ${isVisible ? styles.visible : ''}`}>
            <h3>Side B: Personal</h3>
            <div className={styles.personalTraits}>
              <div className={styles.trait}>
                <h4>🎧 The Listener</h4>
                <p>Known as a steady presence among friends. Great at listening and offering sincere advice and support.</p>
              </div>
              <div className={styles.trait}>
                <h4>✨ The Believer</h4>
                <p>Believes there is always a way out. No problem is too big to solve.</p>
              </div>
            </div>

            <div className={styles.music}>
              <h4>On Rotation 🎵</h4>
              <div className={styles.genres}>
                <span>Hip Hop</span>
                <span>Pop</span>
                <span>R&B</span>
              </div>
            </div>
            
            <div className={styles.worldView}>
              <h4>🌍 Global Perspective</h4>
              <p>
                Traveled across the world during my studies abroad — from the misty streets of London to the Northern Lights in Iceland. I believe the world is vast, and perspective shapes everything.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`${styles.skills} ${isVisible ? styles.visible : ''}`}>
          <h3>Core Skills</h3>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h4>Project Delivery</h4>
              <div className={styles.skillTags}>
                <span>Stakeholder Communication</span>
                <span>Cross-team Alignment</span>
                <span>Timeline Management</span>
                <span>Documentation</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h4>Event & Activation</h4>
              <div className={styles.skillTags}>
                <span>On-site Operations</span>
                <span>Logistics Coordination</span>
                <span>Partner Activation</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h4>Marketing Tools</h4>
              <div className={styles.skillTags}>
                <span>Google Analytics</span>
                <span>Meta Ads Manager</span>
                <span>Canva</span>
                <span>SalesForce</span>
                <span>Maconomy</span>
                <span>Microsoft Office (Excel, PowerPoint, Word, Outlook)</span>
                <span>Adobe Analytics</span>
                <span>Tableau</span>
                <span>LINE Official Account Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
