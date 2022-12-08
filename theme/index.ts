import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import Menu from './components/menu';

export const theme = extendTheme({
  colors,
  components: {
    Menu,
  },
});
