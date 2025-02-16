import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const FlexLogoWrapper = styled(Marquee)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  max-width: 300px;
  max-height: 500px;
  background-color: #ffffff';
`;
