import React, { ReactNode, useState } from 'react';
import Hair1Image from '../../assets/img/hairs/hair1.png';
import Hair2Image from '../../assets/img/hairs/hair2.png';
import Hair3Image from '../../assets/img/hairs/hair3.png';
import Hair4Image from '../../assets/img/hairs/hair4.png';
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
      img: Hair1Image,
      price: 'R$ 12:00',
    },
    {
      _id: 243215435,
      name: 'hair2',
      description: 'Hair and Beard',
      img: Hair2Image,
      price: 'R$ 12:00',
    },

    {
      _id: 342143215,
      name: 'hair3',
      description: 'Hair and Beard',
      img: Hair3Image,
      price: 'R$ 12:00',
    },

    {
      _id: 4421514432,
      name: 'hair4',
      description: 'Hair and Beard',
      img: Hair4Image,
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
