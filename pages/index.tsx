import styled from 'styled-components';

import { Tasks } from 'modules';
import { Page } from 'types';

const Home: Page = () => {
  return (
    <Wrapper>
      <Tasks />
    </Wrapper>
  );
};

Home.configs = {
  sidebar: true,
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;
