import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { Modal } from './modal';

describe('Modal', () => {
  it('should render Modal component with children', () => {
    render(
      <Modal open>
        <h1>Conteúdo do Modal</h1>
      </Modal>
    );

    expect(screen.getByText('Conteúdo do Modal')).toBeInTheDocument();
  });

  it('should apply custom classes', () => {
    const customClass = 'custom-class';
    render(
      <Modal open className={customClass}>
        <h1>Conteúdo do Modal</h1>
      </Modal>
    );

    const content = document.querySelector('.custom-class');
    expect(content).toBeInTheDocument();
  });

  it('should render modal overlay', () => {
    render(
      <Modal open>
        <h1>Conteúdo do Modal</h1>
      </Modal>
    );

    const overlay = document.querySelector('.backdrop-blur-\\[8px\\]');
    expect(overlay).toBeInTheDocument();
  });
});
