import React, { ReactNode } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import barberIcon from '../../assets/img/logo.png';

interface HomePageProps {
  children?: ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  const headerOptions = [
    {
      value: 'Home',
      href: '#',
    },
    {
      value: 'About us',
      href: '#',
    },
    {
      value: 'Contact Us',
      href: '#',
    },
  ];
  return (
    <div>
      <Header image={barberIcon} options={headerOptions} />
      <main>
        <section>
          <img
            className="banner"
            src="./assets/img/banner.jpg"
            alt="Barber shop image"
          />
        </section>

        <section>
          <h1 className="section-title">Photos</h1>
          <div className="section-cards-container">
            <div className="photo-card">
              <img
                className="banner"
                src="./assets/img/barber_about.jpg"
                alt="chair"
              />
              <p>We are a new custom barber shop.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
