import { Button, ButtonProps } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';

interface BackButtonProps extends ButtonProps {
  variant?: 'outline' | 'solid';
}

export const BackButton: React.FC<BackButtonProps> = ({ variant, ...rest }) => {
  const router = useRouter();

  const SolidButton = () => (
    <Button
      aria-label='navigate back'
      variant='solid'
      colorScheme='teal'
      leftIcon={<BiArrowBack />}
      onClick={() => router.back()}
      {...rest}
    >
      Zurück
    </Button>
  );

  const OutlinedButton = () => (
    <Button
      aria-label='navigate back'
      variant='outline'
      leftIcon={<BiArrowBack />}
      onClick={() => router.back()}
      margin='0'
      {...rest}
    >
      Zurück
    </Button>
  );

  return variant === 'outline' ? <OutlinedButton /> : <SolidButton />;
};
