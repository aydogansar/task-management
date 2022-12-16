import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
import styled from 'styled-components';

import { Title } from 'components';

interface Props {
  close: () => void;
}

function SidebarHeader({ close }: Props) {
  return (
    <Wrapper>
      <Title level={1}>Taskman</Title>
      <Close onClick={close}>
        <TbLayoutSidebarLeftCollapse />
      </Close>
    </Wrapper>
  );
}
export default SidebarHeader;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  ${({ theme }) => theme.utils.dFlex('space-between')};
`;

const Close = styled.div`
  font-size: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.hoverColor};
  }
`;
