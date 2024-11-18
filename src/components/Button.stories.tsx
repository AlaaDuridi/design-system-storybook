import {Meta, StoryFn} from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: {action: 'clicked'},
    },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    size: 'medium',
    color: 'blue',
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    size: 'medium',
    color: 'green',
    children: 'Secondary Button',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    size: 'medium',
    color: 'red',
    children: 'Text Button',
};
