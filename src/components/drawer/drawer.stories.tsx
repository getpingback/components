import React, { useState } from 'react';
import { DrawerRoot, DrawerHeader, DrawerBody, DrawerFooter } from './drawer';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeftIcon } from '@stash-ui/light-icons';
import { Button } from '../button/button';

const meta = {
  title: 'Components/Drawer',
  component: DrawerRoot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  }
} satisfies Meta<typeof DrawerRoot>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <DrawerHeader
          title="Drawer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          prefixIcon={<ArrowLeftIcon />}
        />
        <DrawerBody hasDivider>
          <div className="flex flex-col gap-4">
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
            <div>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <div className="flex gap-4">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
            <Button variant="solid" className="w-full">
              Save
            </Button>
          </div>
        </DrawerFooter>
      </>
    )
  }
};

export const Behavior: Story = {
  args: {
    children: (
      <>
        <DrawerHeader title="Drawer" />
        <DrawerBody>
          <div>Drawer Content</div>
        </DrawerBody>
      </>
    )
  },
  render: ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="solid" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <DrawerRoot open={open} onOpenChange={setOpen}>
          {children}
        </DrawerRoot>
      </>
    );
  }
};
