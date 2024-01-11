import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TagsInput, TagsInputProps } from './index';

export default {
  title: 'Components/Test',
  component: TagsInput,
} as Meta<TagsInputProps>;

const Template: Story<TagsInputProps> = (args) => <TagsInput {...args} />;

export const Default: Story<TagsInputProps> = Template.bind({});
Default.args = {
  style: {
    width: '100%',
    maxWidth: '280px',
  },
  focusStyle: {
    borderColor: 'blue',
  },
  hoverStyle: {
    borderColor: 'black',
  },
  disableStyle: {
    cursor: 'not-allowed',
    background: 'rgab(0,0,0,.1)',
  },
  value: ['hashir', 'enipx'],
  placeholder: 'Add tags...',
};

export const Disabled: Story<TagsInputProps> = Template.bind({});
Disabled.args = {
  style: {
    width: '100%',
    maxWidth: '280px',
  },
  focusStyle: {
    borderColor: 'blue',
  },
  hoverStyle: {
    borderColor: 'black',
  },
  disableStyle: {
    background: 'rgba(0,0,0,.05)',
  },
  disabled: true,
  value: ['hashir', 'enipx'],
};
