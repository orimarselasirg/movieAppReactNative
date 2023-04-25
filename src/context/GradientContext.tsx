import  React, {createContext, useState} from 'react';


interface imageColor {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: imageColor;
  prevColors: imageColor;
  setMainColor: (colorsState: imageColor) => void;
  setMainPrevColor: (colorsState: imageColor) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<imageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<imageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColor = (colorsState: imageColor) => {
    setColors(colorsState);
  };

  const setMainPrevColor = (colorsState: imageColor) => {
    setPrevColors(colorsState);
  };

  const value = {
    colors,
    prevColors,
    setMainColor,
    setMainPrevColor,
  };
  return (
    <GradientContext.Provider value={value}>
      {children}
    </GradientContext.Provider>
  );
};
