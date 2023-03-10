import { Meta, Story } from '@storybook/react/types-6-0';
import { Search, SearchProps } from '.';

export default {
  title: 'Search',
  component: Search,
} as Meta<SearchProps>;

export const Template: Story<SearchProps> = (args) => {
  return (
    <div>
      <Search {...args} />
    </div>
  );
};
