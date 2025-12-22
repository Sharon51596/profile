'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const [expandedSideB, setExpandedSideB] = useState<Set<number>>(new Set())
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

  const toggleSideB = (index: number) => {
    setExpandedSideB(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const sideBSections = [
    {
      title: 'Who I Am',
      tagline: 'Marketing professional across automotive, FMCG & technology.',
      content: [
        'I work across digital marketing, campaign execution, and cross-functional collaboration.',
        'My experience spans automotive, FMCG, and technology industries, where I support campaigns from planning to execution and post-campaign review.',
        'I\'m most comfortable in roles that require structure, coordination, and clarity—helping teams turn complex ideas into actionable plans and well-executed outcomes.'
      ]
    },
    {
      title: 'How I Work',
      tagline: 'Structure meets adaptability, powered by data and clear communication.',
      content: [
        'I approach projects with a balance of structure and adaptability.',
        'I regularly work with data and Excel to organize information, track performance, and support decision-making through clear documentation.',
        'At the same time, I value strong communication and alignment across teams. Whether collaborating with marketing, design, engineering, or external partners, I focus on keeping workflows clear, expectations aligned, and execution consistent across channels.'
      ]
    },
    {
      title: 'What I Care About',
      tagline: 'Turning challenges into routine, and problems into opportunities.',
      content: [
        'I believe good work happens when challenges become part of the routine—and problems become opportunities to build better solutions.',
        'I\'m drawn to projects that require thoughtful coordination, audience-centric thinking, and long-term consistency rather than one-off ideas.'
      ]
    }
  ]

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
            
            {sideBSections.map((section, index) => (
              <div 
                key={index}
                className={`${styles.sectionBlock} ${expandedSideB.has(index) ? styles.sectionExpanded : ''}`}
                onClick={() => toggleSideB(index)}
              >
                <div className={styles.sectionHeader2}>
                  <h4>{section.title}</h4>
                  <span className={styles.sectionToggle}>
                    {expandedSideB.has(index) ? '−' : '+'}
                  </span>
                </div>
                <p className={styles.tagline}>{section.tagline}</p>
                <div className={styles.sectionContent}>
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
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
