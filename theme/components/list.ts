import { ComponentStyleConfig } from '@chakra-ui/react';
import colors from '../foundations/colors';

const styles: ComponentStyleConfig = {
  variants: {
    cards: {
      item: {
        bgColor: 'white',
        boxShadow: 'md',
        outline: `1px solid ${colors.brand['200']}`,
        rounded: 'md',
        fontSize: '1.2rem',
        width: '100%',
        display: 'block',
        p: 6,
      },
    },
  },
};

export default styles;
