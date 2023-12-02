const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#000',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#0f0726',
    link: '#3110b3',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#000',
    heading: '#3110b3',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

export { lightTheme, darkTheme };

