import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import colors from '../foundations/colors';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    bgColor: colors.brand[100],
    shadow: 'md',
  },
  item: {
    fontSize: '1.1rem',
    py: 3,
    svg: {
      boxSize: '1.2rem',
    },
  },
});

const theme = defineMultiStyleConfig({ baseStyle });

export default theme;
