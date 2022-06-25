import { Button, ButtonProps, IconButton } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';

interface BackButtonProps extends ButtonProps {
  variant?: 'icon' | 'button';
}

export const BackButton: React.FC<BackButtonProps> = ({ variant, ...rest }) => {
  const router = useRouter();

  const StyledButton = () => (
    <Button
      aria-label='navigate back'
      variant='solid'
      colorScheme='teal'
      marginBottom='1rem'
      leftIcon={<BiArrowBack />}
      onClick={() => router.back()}
      {...rest}
    >
      Zurück
    </Button>
  );

  const StyledIconButton = () => (
    <IconButton
      icon={<BiArrowBack />}
      aria-label='navigate back'
      variant='outline'
      onClick={() => router.back()}
      {...rest}
    />
  );

  return variant === 'icon' ? <StyledIconButton /> : <StyledButton />;
};
