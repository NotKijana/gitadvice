import Logo from './logo.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <a className={styles.link}
      href="http://kijana.io" 
      target="_blank" 
      rel="noopener noreferrer">
      
      <img src={Logo} 
        alt="kijana logo clouds" 
        className={styles.logo}
      />
      </a>
    </>
  )
}

export default Footer;