import { Meta, Story } from '@storybook/react/types-6-0';
import { KeyboardComponent, KeyboardComponentProps } from '.';

export default {
  title: 'KeyboardComponent',
  component: KeyboardComponent,
} as Meta<KeyboardComponentProps>;

export const Template: Story<KeyboardComponentProps> = (args) => {
  return (
    <div>
      <KeyboardComponent {...args} />
    </div>
  );
};
