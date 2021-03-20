import React from 'react';
import {
  StyledBannerImage,
  StyledIconHeaderImage,
  StyledFloatLeftImage,
} from './styles';

interface ImageProps {
  src: string;
  alt: string;
}

export const IconHeaderImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledIconHeaderImage src={src} alt={alt} />;
};

export const BannerImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledBannerImage src={src} alt={alt} />;
};

export const FloatLeftImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledFloatLeftImage src={src} alt={alt} />;
};
