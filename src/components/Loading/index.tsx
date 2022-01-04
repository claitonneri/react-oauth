import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const Loading: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <PacmanLoader size={32} color={colors.tertiary} />
    </Container>
  );
}

export default Loading;