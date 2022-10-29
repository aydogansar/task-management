import styled from 'styled-components';

function Sidebar() {
  return <Wrapper>sidebar</Wrapper>;
}

export default Sidebar;

const Wrapper = styled.div`
  ${({ theme }) => theme.utils.dFlex()};
  width: 300px;
`;
