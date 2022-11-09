import { useEffect, useState } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Stack from 'react-bootstrap/Stack';
import Work from './components/work/work';

import './portfolio.css';

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="portfolio" className="portfolio-container">
      <Header scrollPosition={scrollPosition} />
      <Stack direction="vertical" gap={3}>
        <Home />
        <Container>
          <About />
          <Work />
          <Contact />
        </Container>
        <Footer />
      </Stack>
    </div>
  );
}

export default Portfolio;
