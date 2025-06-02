import { useToken } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from './Link';

export interface ListItemProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  href,
  children,
  onClick,
}) => {
  const [colorBrand200] = useToken('colors', ['brand.200']);

  return (
    <Link
      href={href}
      onClick={onClick}
      bgColor='white'
      boxShadow='md'
      rounded='md'
      outline={`1px solid ${colorBrand200}`}
      fontSize='1.2rem'
      p={6}
      w='100%'
      textAlign='center'
    >
      {children}
    </Link>
  );
};
