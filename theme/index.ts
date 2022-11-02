import { extendTheme } from '@chakra-ui/react';
import List from './components/list';
import colors from './foundations/colors';

export const theme = extendTheme({
  colors,
  components: {
    List,
  },
});
