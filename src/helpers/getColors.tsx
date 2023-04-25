import ImageColors from 'react-native-image-colors';


export const getColor = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  let primary;
  let secondary;
  if (colors.platform === 'android') {
      primary = colors.vibrant;
      secondary = colors.average;
  }
  if (colors.platform === 'ios') {
      primary = colors.primary;
      secondary = colors.background;
  }
  return [primary, secondary];
};

