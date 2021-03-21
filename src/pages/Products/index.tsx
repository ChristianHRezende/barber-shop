import React, { ReactNode, useState } from 'react';
import { IconHairImage } from '../../components/Image';
import Card from '../../components/layout/Card';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Typography from '../../components/Typography';
import { StyledCardList } from './styles';

interface ProductsPageProps {
  children?: ReactNode;
}
interface Product {
  _id: number;
  name: string;
  description: string;
  img: string;
  price: string;
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const [products] = useState<Product[]>([
    {
      _id: 1544342424,
      name: 'hair1',
      description: 'Hair and Beard',
      img:
        'https://by3302files.storage.live.com/y4mUyEq2Nu1LGv0DMoO8grHPrqFvr17PQ5TY80UeuQw_vG_uCUKLlkFz5iazPq3806SzO5yek_gnXZnKElrMZQHJFx7QFK3GyabxYzsFHq-PRHzd-Bl4PP5_lTw48mgmFENwOmFmcKQzNytgFkkL4EBeQ3E40xi0N9fn2O5uES9zINDpGXB4Mm2xu-DurWcfyFc?width=263&height=409&cropmode=none',
      price: 'R$ 12:00',
    },
    {
      _id: 243215435,
      name: 'hair2',
      description: 'Hair and Beard',
      img:
        'https://by3302files.storage.live.com/y4mXJUU-yz16S7TEh0fa_AlFstQ6cFajyQzvtRb4qw0BI3TNSfdMEgNfr6XSHHsqUPvsQ7eIAXI5wGjI4NXECbKpwDBlQiXfhIz2WKPDr1LIzoYyoagxx68TNMq-P64yfTuKSmwOPCtIqU_LmWJgBXTW6r_oG8YnB0S68MR5OSg5oHuuH_YH4BqxinNLdBl2x1q?width=281&height=564&cropmode=none',
      price: 'R$ 12:00',
    },

    {
      _id: 342143215,
      name: 'hair3',
      description: 'Hair and Beard',
      img:
        'https://by3302files.storage.live.com/y4mwOOLUMu8Oyk215eFs7QGs152d3e5543rhBCeIxvg56BPGgWY-YXxoJ-6USWQh48Mi5tr46TYPMhX9u17KFrIDuUi7WewyawX8qMSXit39-dMwBNX8Ylqz1-xVhRD40mxOrClgxUrlOb0RuUd18BeRyKX5L9hlA-zTDTC3SJov_vyqwPV9aEOVVO-O-HVZWPr?width=297&height=497&cropmode=none',
      price: 'R$ 12:00',
    },

    {
      _id: 4421514432,
      name: 'hair4',
      description: 'Hair and Beard',
      img:
        'https://by3302files.storage.live.com/y4mkpUvGBRBkeCk3ui5dvlObsufLSP_QdpbHA54aEjs6K0RXyIWWTUwNNG8jk0HPi6tYU5tDd32CCSdAHl86cDWmuCn0YTuvacPKa6G4f2N1h28HVVvJEJZMc1rJkTRB9I4ayAWv5WD24VoInmydMEc0IKHfqQ3yMmPsPGxBuI4OJEdlztFgiQHVw2bxYkh0Fee?width=237&height=410&cropmode=none',
      price: 'R$ 12:00',
    },
  ]);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Typography type="h1">Our Products</Typography>
        <Typography type="h2">Hair Cuts</Typography>
        <StyledCardList>
          {products?.length > 0 &&
            products.map(item => (
              <Card key={item._id}>
                <IconHairImage src={item.img} alt={item.name} />
                <br />
                <Typography type="p">{item.name}</Typography>
                <Typography type="p">{item.description}</Typography>
                <Typography type="p">{item.price}</Typography>
              </Card>
            ))}
        </StyledCardList>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default ProductsPage;
