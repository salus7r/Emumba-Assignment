import styled from "styled-components";
import { device } from "@utils/responsive";

export const AppContainer = styled.div`
  padding: 2rem;
`;

export const AppMainLayout = styled.div`
  height: 100%;
  background: transparent;
`;

export const AppHeading = styled.div`
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  background-color: #4c9aff;
  padding: 3rem 1rem;

  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const AppBodyLayout = styled.div`
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background-color: #f8fbff;
  min-height: 65vh;
`;

export const AppSearchBarWrapper = styled.div`
  background: transparent;
  height: initial;
  line-height: initial;
  padding: 1rem 2rem;
`;

export const AppContentWrapper = styled.div`
  padding: 0 1.875rem 1.875rem;

  @media ${device.tablet} {
    padding: 0 2.5rem 1.875rem !important;
  }

  @media ${device.desktop} {
    padding: 0 3.75rem 1.875rem !important;
  }

  @media ${device.desktopXL} {
    padding: 0 6.25rem 1.875rem !important;
  }
`;
