import styled from 'styled-components';

const Styled = styled.nav`
  background: #8E9AAF;
  overflow: hidden;
  flex-direction: column;
  text-align: left;
  flex: 1 0 0;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 15px;
  width: 160px;
  overflow: hidden;
  order: 1;
`;

Styled.list = styled.ul`
  list-style-type: none;
`

export default Styled;
