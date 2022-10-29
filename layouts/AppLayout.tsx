import { ReactNode } from 'react';

import styled from 'styled-components';

import { Sidebar } from 'modules';
import { PageConfigs } from 'types';

interface Props extends PageConfigs {
  children: ReactNode;
}

function AppLayout({ children, sidebar }: Props) {
  return (
    <Wrapper>
      {sidebar && <Sidebar />}
      {children}
    </Wrapper>
  );
}
export default AppLayout;

const Wrapper = styled.div`
  ${({ theme }) => theme.utils.dFlex('flex-start', 'flex-start')}
`;
