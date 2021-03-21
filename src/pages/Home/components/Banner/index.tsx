import React, { ReactNode } from 'react';
import { BannerImage } from '../../../../components/Image';
import bannerImage from '../../../../assets/img/banner.jpg';

interface BannerProps {
  childre?: ReactNode;
}

const Banner: React.FC<BannerProps> = () => {
  const altText = 'Barber shop image';

  return (
    <section>
      <BannerImage src={bannerImage} alt={altText} />
    </section>
  );
};

export default Banner;
