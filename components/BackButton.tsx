import { IconButton } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';

export const BackButton: React.FC<{}> = ({ children }) => {
  const router = useRouter();

  return (
    <IconButton
      icon={<BiArrowBack />}
      aria-label='navigate back'
      variant='outline'
      onClick={() => router.back()}
    />
  );
};
