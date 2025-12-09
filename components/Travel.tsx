'use client'

import { useState } from 'react'
import styles from './Travel.module.css'

export default function Travel() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const locations = [
    { id: 0, city: 'London', country: 'United Kingdom', quote: '漫步在歷史與現代交錯的霧都，每一條巷弄都有故事。' },
    { id: 1, city: 'Germany', country: 'Deutschland', quote: '嚴謹中的浪漫，如同黑膠唱片上精準的刻紋。' },
    { id: 2, city: 'Switzerland', country: 'Schweiz', quote: '阿爾卑斯山的寧靜，是心靈最純淨的背景音。' },
    { id: 3, city: 'France', country: 'République française', quote: '巴黎的街角，彷彿隨時都在上演一場老電影。' },
    { id: 4, city: 'Iceland', country: 'Ísland', quote: '在極光下，才真正感受到人類的渺小與宇宙的浩瀚。' },
    { id: 5, city: 'Greece', country: 'Ελλάδα', quote: '藍與白的交響曲，陽光灑落在愛琴海的波光粼粼。' },
    { id: 6, city: 'Netherlands', country: 'Nederland', quote: '運河旁的自行車鈴聲，是生活最輕快的節奏。' },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % locations.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + locations.length) % locations.length)
  }

  return (
    <section id="travel" className={styles.travel}>
      <div className={styles.container}>
        {/* 海報標題 */}
        <div className={styles.posterHeader}>
          <span className={styles.tourLabel}>SHARON MA</span>
          <h2 className={styles.title}>WORLD TOUR</h2>
          <span className={styles.yearLabel}>2022 — 2024</span>
        </div>

        {/* 唱片封套滑動區 */}
        <div className={styles.sliderContainer}>
          <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous">
            ‹
          </button>
          
          <div className={styles.slider}>
            {locations.map((loc, index) => {
              let position = index - activeIndex
              if (position < -3) position += locations.length
              if (position > 3) position -= locations.length
              
              return (
                <div
                  key={loc.id}
                  className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
                  style={{
                    transform: `translateX(${position * 120}%) scale(${index === activeIndex ? 1 : 0.8}) rotateY(${position * 5}deg)`,
                    zIndex: index === activeIndex ? 10 : 5 - Math.abs(position),
                    opacity: Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.3,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <span className={styles.stopNum}>STOP {String(index + 1).padStart(2, '0')}</span>
                      <span className={styles.countryName}>{loc.country}</span>
                    </div>
                    <h3 className={styles.cityName}>{loc.city}</h3>
                    <div className={styles.vinylIcon}>
                      <div className={styles.miniVinyl}></div>
                    </div>
                    {index === activeIndex && (
                      <p className={styles.quote}>"{loc.quote}"</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <button className={styles.navBtn} onClick={nextSlide} aria-label="Next">
            ›
          </button>
        </div>

        {/* 場次列表 */}
        <div className={styles.tourDates}>
          {locations.map((loc, index) => (
            <button
              key={loc.id}
              className={`${styles.dateBtn} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.dateNum}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.dateName}>{loc.city}</span>
            </button>
          ))}
        </div>

        {/* 底部裝飾 */}
        <div className={styles.footerDecor}>
          <span>✦ {locations.length} CITIES ✦ ENDLESS MEMORIES ✦</span>
        </div>
      </div>
    </section>
  )
}
