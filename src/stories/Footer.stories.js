import { Footer } from './Footer';

export default {
    title: 'Example/Footer',
    component: Footer,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
      tags: ['autodocs'],
      // More on argTypes: https://storybook.js.org/docs/api/argtypes
      argTypes: {
        backgroundColor: { control: 'color' },
      },
  };

  export const Mainfooter = {
    args: {
      primary: true,
      label: 'Copyright © 2024 by STEMCELL Technologies. All rights reserved.        ',
    },
  };
  export const SecondFooter = {
    args: {
      primary: true,
      label: 'Scientists Helping Scientists™',
    },
  };
  