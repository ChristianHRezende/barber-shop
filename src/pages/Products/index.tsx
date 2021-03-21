import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconHairImage } from '../../components/Image';
import Card from '../../components/layout/Card';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Typography from '../../components/Typography';
import { loadProductsRequest } from '../../redux/action';
import { StoreState } from '../../redux/types';
import { StyledCardList } from './styles';

interface ProductsPageProps {
  children?: ReactNode;
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const { data } = useSelector((state: StoreState) => state.products);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(loadProductsRequest());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Typography type="h1">Our Products</Typography>
        <Typography type="h2">Hair Cuts</Typography>
        <StyledCardList>
          {data &&
            data?.length > 0 &&
            data.map(item => (
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
