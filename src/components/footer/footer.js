import portfolioInfo from '../../data/portfolio-info.json';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>Copyright © {new Date().getFullYear()} {portfolioInfo.name}. All rights reserved.</span>
        </div>
    );
}

export default Footer;