import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BannerImage, IconHeaderImage } from './index';

it('Render BannerImage', () => {
  const imageSrc = '';
  const alt = 'Test Image';
  render(<BannerImage src={imageSrc} alt={alt} />);

  expect(screen.getByAltText('Test Image')).toBeTruthy();
});

it('Render IconHeaderImage', () => {
  const imageSrc = '';
  const alt = 'Test Image';
  render(<IconHeaderImage src={imageSrc} alt={alt} />);
  const element = screen.getByRole('img');
  fireEvent.click(element);
  console.log(element);
  expect(screen.getByAltText('Test Image')).toBeTruthy();
});
