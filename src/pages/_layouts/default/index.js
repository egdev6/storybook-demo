import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
