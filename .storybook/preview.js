import '/src/normalize.css';
import '/src/base.css';
import '/src/layout.css';

const customViewports = {
  iPhone5: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhoneX: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPad2: {
    name: 'iPad2',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  Laptop2: {
    name: 'Laptop2',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen'
}