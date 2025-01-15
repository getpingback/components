import { render, screen, fireEvent } from '@testing-library/react';
import { DrawerRoot, DrawerHeader, DrawerBody, DrawerFooter } from './drawer';
import * as React from 'react';

describe('Drawer', () => {
  const defaultProps = {
    open: true
  };

  it('should render drawer with title', () => {
    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" />
        <DrawerBody>
          <div>Drawer content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('should render drawer with description', () => {
    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" description="Test description" />
        <DrawerBody>
          <div>Drawer content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render drawer with prefix icon', () => {
    const TestIcon = () => <div data-testid="test-icon">Icon</div>;

    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" prefixIcon={<TestIcon />} />
        <DrawerBody>
          <div>Drawer content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should render drawer with divider when hasDivider is true', () => {
    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" />
        <DrawerBody hasDivider>
          <div>Drawer content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('should render drawer with footer content', () => {
    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" />
        <DrawerBody>
          <div>Drawer content</div>
        </DrawerBody>
        <DrawerFooter>
          <div>Footer content</div>
        </DrawerFooter>
      </DrawerRoot>
    );

    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should render children content', () => {
    render(
      <DrawerRoot {...defaultProps}>
        <DrawerHeader title="Test Drawer" />
        <DrawerBody>
          <div>Test children content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    expect(screen.getByText('Test children content')).toBeInTheDocument();
  });

  it('should close drawer when clicking close button', () => {
    const onOpenChange = jest.fn();

    render(
      <DrawerRoot {...defaultProps} onOpenChange={onOpenChange}>
        <DrawerHeader title="Test Drawer" />
        <DrawerBody>
          <div>Drawer content</div>
        </DrawerBody>
      </DrawerRoot>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
