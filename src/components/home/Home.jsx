import { useEffect } from 'react';
import "./home.css";
import Social from './Social';
import Data from "./Data";

function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home Section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social/>
          <div className="home__img"></div>
          <Data/>
        </div>
      </div>
    </section>
  );
}

export default Home;
