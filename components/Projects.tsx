'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Darlie Campaign',
      role: 'Script & Copywriting',
      bullets: [
        'Led script planning and copywriting for social media content',
        'Ensured brand voice alignment across all deliverables'
      ],
      year: '2025',
      track: 'Track 01',
      tags: ['Copywriting', 'Content Strategy', 'Social Media'],
      image: '/images/projects/Darlie.png',
      link: 'https://www.facebook.com/share/v/1D1qY1ocXU/',
      linkText: 'View Post'
    },
    {
      id: 2,
      title: 'Volkswagen Taiwan',
      role: 'Activation Campaign',
      bullets: [
        'Supported activation campaigns by managing timelines and asset delivery',
        'Coordinated logistics for multi-channel activations',
        'Prepared post-campaign evaluations'
      ],
      year: '2025',
      track: 'Track 02',
      tags: ['Timeline Management', 'Asset Delivery', 'Multi-channel'],
      image: '/images/projects/Volkswagen.png',
      link: 'https://youtu.be/PLVMRNURy8E?si=kTX0ZUXuH-GIvL5g',
      linkText: 'Watch Video'
    },
    {
      id: 3,
      title: 'Trend Micro AI Face-Swap Scam Detection',
      role: 'Product Launch Support',
      bullets: [
        'Supported the full product launch workflow—from ideation to post-campaign analysis—improving overall project efficiency',
        'Coordinated with animation studios, engineers, designers, and clients to align deliverables and ensure timely execution',
        'Developed social content and an interactive web game, achieving 50% above-benchmark view-through rates and 3% higher CTR'
      ],
      year: '2024',
      track: 'Track 03',
      tags: ['Product Launch', 'Cross-functional', 'Social Content'],
      image: '/images/projects/Trendmicro.png',
      link: 'https://www.facebook.com/share/v/1BkyE6iCSf/',
      linkText: 'View Post'
    },
    {
      id: 4,
      title: 'UK Senior Dating Market',
      role: 'Research Team Leader',
      bullets: [
        'Conducted consumer analysis for the UK market',
        'Designed strategic recommendations to improve user engagement',
        'Led research planning and coordinated team deliverables'
      ],
      year: '2024',
      track: 'Track 04',
      tags: ['Market Research', 'Consumer Analysis', 'Strategy'],
      image: '/images/projects/UK-market.png',
      link: null,
      linkText: null
    },
    {
      id: 5,
      title: 'Fu Jen 61st Anniversary',
      role: 'Event General Coordinator',
      bullets: [
        'Coordinated logistics and scheduling for a multi-day university event',
        'Managed manpower allocation across multiple teams',
        'Ensured smooth execution through on-site coordination'
      ],
      year: '2022',
      track: 'Track 05',
      tags: ['Event Management', 'On-site Operations', 'Team Leadership'],
      image: '/images/projects/FJU.PNG',
      link: null,
      linkText: null
    },
    {
      id: 6,
      title: '60th Anniversary Permanent Exhibition',
      role: 'Planning Team Lead',
      bullets: [
        'As a tour guide, introduced the university\'s 60-year history to 10 teams in a multi-faceted way',
        'Developed the creative concept and programmed the traffic flow of the exhibition',
        'Communicated effectively with other groups and managed team workload and project schedule'
      ],
      year: '2021',
      track: 'Track 06',
      tags: ['Exhibition Planning', 'Creative Direction', 'Project Coordination'],
      image: '/images/projects/FJU-60th.png',
      link: null,
      linkText: null
    },
  ]

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Discography</h2>
          <p className={styles.subtitle}>Selected Works & Projects</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.album} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className={styles.cover}>
                <div className={styles.vinylDisk}>
                  <div className={styles.vinylCenter}></div>
                </div>
                <div 
                  className={styles.coverArt}
                  style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                >
                  {!project.image && (
                    <>
                      <span className={styles.trackNum}>{project.track}</span>
                      <h3>{project.title}</h3>
                    </>
                  )}
                  {project.image && (
                    <div className={styles.overlay}>
                      <span className={styles.trackNum}>{project.track}</span>
                      <h3>{project.title}</h3>
                    </div>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.playBtn}
                      aria-label={project.linkText || 'View'}
                    >
                      <span className={styles.playIcon}>▶</span>
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.year}>{project.year}</span>
                  <span className={styles.role}>{project.role}</span>
                </div>
                <ul className={styles.bulletList}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.videoLink}
                  >
                    ▶ {project.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
