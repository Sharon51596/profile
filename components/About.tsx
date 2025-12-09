'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Liner Notes</h2>
          <p className={styles.subtitle}>Side A: Professional / Side B: Personal</p>
        </div>
        
        <div className={styles.content}>
          <div className={`${styles.sideA} ${isVisible ? styles.visible : ''}`}>
            <h3>Side A: Professional</h3>
            <div className={styles.timeline}>
              <div className={styles.item}>
                <span className={styles.year}>2025</span>
                <h4>PM Assistant</h4>
                <p className={styles.company}>DBS Bank</p>
                <ul className={styles.bulletList}>
                  <li>Consolidated project and marketing data, improving targeting accuracy by ~15%</li>
                  <li>Analyzed 200+ customer feedback entries, reducing recurring issues by ~20%</li>
                  <li>Coordinated cross-team communication and documentation to streamline workflows</li>
                </ul>
              </div>
              <div className={styles.item}>
                <span className={styles.year}>2024</span>
                <h4>Account Executive</h4>
                <p className={styles.company}>Ogilvy</p>
                <ul className={styles.bulletList}>
                  <li>Supported Volkswagen Taiwan activation campaigns, managing timelines and asset delivery</li>
                  <li>Served as primary liaison to ensure alignment across clients, creative teams, and production</li>
                  <li>Coordinated logistics for multi-channel activations and prepared post-campaign evaluations</li>
                </ul>
              </div>
               <div className={styles.item}>
                <span className={styles.year}>2023-2024</span>
                <h4>MSc Marketing Management</h4>
                <p className={styles.company}>University of Southampton</p>
                <ul className={styles.bulletList}>
                  <li>Marketing Communications and Media Management</li>
                  <li>Digital Marketing Strategy</li>
                  <li>Measuring Marketing Effectiveness</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.sideB} ${isVisible ? styles.visible : ''}`}>
            <h3>Side B: Personal</h3>
            <div className={styles.personalTraits}>
              <div className={styles.trait}>
                <h4>🎧 The Listener</h4>
                <p>朋友口中的「穩定力量」。善於傾聽，並給予真誠的建議與陪伴。</p>
              </div>
              <div className={styles.trait}>
                <h4>✨ The Believer</h4>
                <p>相信凡事總有出路，沒有解決不了的問題。</p>
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
                留學期間走訪世界各國，從倫敦的霧都街巷到冰島的極光，
                深信世界之大，視野決定格局。
              </p>
            </div>
          </div>
        </div>

        {/* 技能區塊 */}
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
                <span>Tableau</span>
                <span>SalesForce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
