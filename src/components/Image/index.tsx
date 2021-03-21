import React from 'react';
import {
  StyledBannerImage,
  StyledIconHeaderImage,
  StyledFloatLeftImage,
  StyledIconHairImage,
} from './styles';

interface ImageProps {
  src: string;
  alt: string;
  href?: string;
}

export const IconHeaderImage: React.FC<ImageProps> = ({
  src,
  alt,
  href = '#',
}) => {
  return (
    <a href={href}>
      <StyledIconHeaderImage src={src} alt={alt} />
    </a>
  );
};

export const BannerImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledBannerImage src={src} alt={alt} />;
};

export const FloatLeftImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledFloatLeftImage src={src} alt={alt} />;
};

export const IconHairImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledIconHairImage src={src} alt={alt} />;
};
