import React from 'react';
//import { ThemeProvider } from 'styled-components';
import Header from './component/Header';
import Feed from './component/Feed';
import Story from './component/Story';
import Bottom from './component/Bottom';
//import { lightTheme, darkTheme } from './theme';
//import Button from './Button'

const App = () => {
  // const [isDarkMode, setIsDarkMode] = React.useState(false);
  // const theme = isDarkMode === false ? lightTheme : darkTheme;

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    // <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Story/>
        <Feed/>
        <Bottom/>
        {/* //<div style={{ textAlign: 'center', margin: '10px 0' }}>
          //<Button onClick={toggleTheme}>
            //Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          //</Button> }
        </div> */}
      </div>
    //</ThemeProvider>
  );
};

export default App;
