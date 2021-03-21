import React, { ReactNode } from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';

interface HomePageProps {
  children?: ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Banner />
        <AboutUs />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
