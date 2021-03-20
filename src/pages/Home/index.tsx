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
  return (
    <div>
      <Header />
      <Main>
        <Banner />
        <AboutUs />
      </Main>
      <Footer />
    </div>
  );
};

export default HomePage;
