import styled from 'styled-components';

const Styled = styled.aside`
  background: #CBC0D3;
  flex: 1 0 0;
  order: 3;
  position: fixed;
  min-height: 100vh;
  right: 0;
  top: 0;
  margin-top: 25px;
  width: 160px;
  @media all and (min-width: 800px) {
    order: 3;
  }
`;

export default Styled;
