import { motion } from 'framer-motion';
import { TbLayoutSidebarRightCollapse } from 'react-icons/tb';
import styled from 'styled-components';

interface Props {
  open: () => void;
}

const whileHover = {
  right: -50,
  transition: {
    duration: 0.2,
    delay: 0,
  },
};

function OpenBar({ open }: Props) {
  return (
    <Wrapper
      onClick={open}
      whileHover={whileHover}
    >
      <TbLayoutSidebarRightCollapse />
    </Wrapper>
  );
}
export default OpenBar;

const Wrapper = styled(motion.div)`
  ${({ theme }) => theme.utils.dFlex()};

  position: absolute;
  right: -15px;
  top: 0;
  width: 50px;
  height: 100%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.hoverColor};
  cursor: pointer;
  opacity: 0;
  transition: 1s;

  &:hover {
    opacity: 0.8;
    transition: 1s;
  }
`;
