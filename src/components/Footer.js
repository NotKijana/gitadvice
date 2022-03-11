import Logo from '../assets/sm-smile2.0.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="http://kijana.io" target="_blank" rel="noopener noreferrer">
      <img src={Logo} alt="AntiVillain Logo" />
      </a>
    </footer>
  )
}

export default Footer;

// git remote add origin https://github.com/NotKijana/gitadvice.git
// git branch -M main
// git push -u origin main