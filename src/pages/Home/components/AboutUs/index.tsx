import React, { ReactNode } from 'react';
import { FloatLeftImage } from '../../../../components/Image';
import Typography from '../../../../components/Typography';
import { SectionDetailContainer } from './styles';

import chairImage from '../../../../assets/img/barber_about.jpg';

interface AboutUsProps {
  childre?: ReactNode;
}

const AboutUs: React.FC<AboutUsProps> = () => {
  const altText = 'Chair';

  return (
    <section>
      <Typography type={'h1'}>About us</Typography>
      <SectionDetailContainer>
        <FloatLeftImage src={chairImage} alt={altText} />
        <Typography type={'p-inline'}>
          We are a new custom barber shop.
        </Typography>
        <Typography type={'p-inline'}>
          We have many types of cuts to make you style great.
        </Typography>
        <Typography type={'p-inline'}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia
          iusto voluptas porro, tempora quidem consectetur at corrupti aliquam
          neque maiores vel? In ad adipisci deserunt, provident nesciunt cum
          doloribus!
        </Typography>
        <Typography type={'p-inline'}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia
          iusto voluptas porro, tempora quidem consectetur at corrupti aliquam
          neque maiores vel? In ad adipisci deserunt, provident nesciunt cum
          doloribus!
        </Typography>
        <Typography type={'p-inline'}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia
          iusto voluptas porro, tempora quidem consectetur at corrupti aliquam
          neque maiores vel? In ad adipisci deserunt, provident nesciunt cum
          doloribus!
        </Typography>
      </SectionDetailContainer>
    </section>
  );
};

export default AboutUs;
