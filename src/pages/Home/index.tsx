import React, { ReactNode } from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import barberIcon from '../../assets/img/logo.png';
import Main from '../../components/layout/Main';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';

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
      <Main>
        <Banner />
        <AboutUs />
      </Main>
      <Footer />
    </div>
  );
};

export default HomePage;
