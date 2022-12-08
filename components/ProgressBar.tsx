import { Box } from '@chakra-ui/react';
import { delay } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const ProgressBar: React.FC = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const startLoadingAnimation = () => {
    if (ref.current) {
      ref.current.style.opacity = '1';
      ref.current.style.width = '99%';
      ref.current.style.transition = 'width 10s cubic-bezier(0.1, 0.05, 0, 1)';
    }
  };

  const finishLoadingAnimation = () => {
    if (ref.current) {
      ref.current.style.width = '100%';
      ref.current.style.opacity = '0';
      ref.current.style.transition =
        'width 0.1s ease-out, opacity 0.5s ease 0.2s';

      delay(() => {
        if (ref.current) {
          ref.current.style.width = '0%';
        }
      }, 500);
    }
  };

  useEffect(() => {
    router.events.on('routeChangeStart', startLoadingAnimation);
    router.events.on('routeChangeComplete', finishLoadingAnimation);
    router.events.on('routeChangeError', finishLoadingAnimation);

    return () => {
      router.events.off('routeChangeStart', startLoadingAnimation);
      router.events.off('routeChangeComplete', finishLoadingAnimation);
      router.events.off('routeChangeError', finishLoadingAnimation);
    };
  }, [router]);

  return <Box h='0.2rem' bgColor='#ff9f1c' w='0%' ref={ref} />;
};
