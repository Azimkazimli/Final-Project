import Link from "next/link";
import "./footer.css";
import TopWavy from "../WavyLine/TopWaveLine";

const Footer = () => {
  return (
//?{//?----------------------- FOOTER -----------------------} 
    <footer>
      <div className="footer-container">
        <div className="footer-bottom">
          <p>
            Copyright © Caffeine X | Designed by
            <Link href="">BRIX Templates</Link> - Powered by
            <Link href="">Webflow</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
