import { Meta, Story, Args } from '@storybook/react';
import { FooterDefaultIcon, LinkedInIcon, GithubIcon, MyLogoIcon } from './FooterIcon';

export default {
  title: '/Components/Atoms/FooterIcon',
  component: FooterDefaultIcon,
  subcomponents: { LinkedInIcon, GithubIcon, MyLogoIcon },
} as Meta;

export const LinkedIn: Story = (args: Args) => (
  <FooterDefaultIcon goTo="" {...args}>
    <LinkedInIcon {...args} />
  </FooterDefaultIcon>
);

export const Github: Story = (args: Args) => (
  <FooterDefaultIcon goTo="" {...args}>
    <GithubIcon {...args} />
  </FooterDefaultIcon>
);

export const MyLogo: Story = (args: Args) => (
  <FooterDefaultIcon goTo="" {...args}>
    <MyLogoIcon {...args} />
  </FooterDefaultIcon>
);
