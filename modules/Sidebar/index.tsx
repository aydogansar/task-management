import { motion } from 'framer-motion';
import styled from 'styled-components';

import Header from './Header';
import OpenBar from './OpenBar';
import useSidebar from './useSidebar';

const variants = {
  show: {
    marginLeft: 0,
  },
  hide: {
    marginLeft: -300,
  },
};

function Sidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <Wrapper
      variants={variants}
      initial={open ? 'show' : 'hide'}
      animate={open ? 'show' : 'hide'}
    >
      <Header close={() => setOpen(false)} />
      <Content>sidebar</Content>
      {!open && <OpenBar open={() => setOpen(true)} />}
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled(motion.div)`
  ${({ theme }) => theme.utils.dFlex('space-between')};
  flex-direction: column;

  position: relative;
  background: ${({ theme }) => theme.colors.bgColor};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: ${({ theme }) => theme.shadows.sidebar};
  height: 100vh;
  width: 300px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
