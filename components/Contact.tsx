'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
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
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        {/* 標題區 */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.title}>Let&#39;s Connect</h2>
          <p className={styles.subtitle}>
            Open for collaborations, opportunities, and music recommendations.
          </p>
        </div>

        {/* 主要內容區 */}
        <div className={styles.content}>
          {/* 左側 - 聯絡資訊 */}
          <div className={`${styles.infoCard} ${isVisible ? styles.visible : ''}`}>
            <h3>Ma Yu-Ting (Sharon)</h3>
            <p className={styles.location}>Based in Taipei, Taiwan</p>
            
            <div className={styles.contactList}>
              <a href="mailto:sharon051596@gmail.com" className={styles.contactItem}>
                <span className={styles.iconWrapper}>✉</span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>sharon051596@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+886925632525" className={styles.contactItem}>
                <span className={styles.iconWrapper}>☎</span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>(+886) 0925-632-525</span>
                </div>
              </a>
            </div>
          </div>

          {/* 右側 - 裝飾性內容 */}
          <div className={`${styles.decorCard} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.vinylDecor}>
              <div className={styles.vinyl}>
                <div className={styles.vinylGrooves}></div>
                <div className={styles.vinylLabel}>
                  <span>SIDE B</span>
                  <span className={styles.vinylBrand}>CONTACT</span>
                </div>
              </div>
            </div>
            <div className={styles.message}>
              <p>&quot;Every great collaboration starts with a simple hello.&quot;</p>
            </div>
            <div className={styles.availability}>
              <span className={styles.statusDot}></span>
              <span>Currently open to opportunities</span>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.footerLine}></div>
          <p>© 2025 Sharon Ma. All Rights Reserved.</p>
          <p className={styles.madeWith}>Crafted with passion, like a fine vinyl record.</p>
        </footer>
      </div>
    </section>
  )
}
