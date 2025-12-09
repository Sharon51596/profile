import styles from './Vinyl.module.css'

interface VinylProps {
  isPlaying?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  profileImage?: string;
}

export default function Vinyl({ isPlaying = true, size = 'large', label = 'Side A', profileImage }: VinylProps) {
  return (
    <div className={`${styles.vinylWrapper} ${styles[size]}`}>
      {/* 外圈旋轉 */}
      <div className={`${styles.vinylOuter} ${isPlaying ? styles.spinning : ''}`}>
        <div className={styles.grooves}></div>
      </div>
      
      {/* 中心照片/標籤 - 固定不動 */}
      <div 
        className={styles.label}
        style={profileImage ? { 
          backgroundImage: `url(${profileImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'calc(50% + 5px) -30px'
        } : {}}
      >
        {!profileImage && (
          <div className={styles.labelText}>
            <span>{label}</span>
            <span className={styles.brand}>SHARON</span>
          </div>
        )}
      </div>

      {/* 唱針 - 調整位置 */}
      <div className={`${styles.tonearm} ${isPlaying ? styles.playing : ''}`}>
        <div className={styles.pivot}></div>
        <div className={styles.arm}></div>
        <div className={styles.headshell}></div>
      </div>
    </div>
  )
}
