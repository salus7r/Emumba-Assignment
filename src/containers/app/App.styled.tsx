import styled from "styled-components";
import { device } from "@utils/responsive";

export const AppContainer = styled.div`
  padding: 25px;
`;

export const AppMainLayout = styled.div`
  height: 100%;
  background: transparent;
`;

export const AppBodyLayout = styled.div`
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #f8fbff;
`;

export const AppSiderWrapper = styled.div`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #4c9aff;
  padding: 64px 14px;

  @media ${device.desktop} {
    min-width: 250px !important;
  }

  @media ${device.desktopL} {
    min-width: 300px !important;
  }

  @media ${device.desktopXL} {
    min-width: 384px !important;
  }
`;

export const AppHeaderWrapper = styled.div`
  background: transparent;
  height: initial;
  line-height: initial;
  padding: 20px 30px;

  @media ${device.tablet} {
    padding: 30px 40px !important;
  }

  @media ${device.desktop} {
    padding: 40px 60px !important;
  }

  @media ${device.desktopXL} {
    padding: 70px 100px !important;
  }
`;

export const AppContentWrapper = styled.div`
  padding: 0 30px 30px;

  @media ${device.tablet} {
    padding: 0 40px 30px !important;
  }

  @media ${device.desktop} {
    padding: 0 60px 30px !important;
  }

  @media ${device.desktopXL} {
    padding: 0 100px 30px !important;
  }
`;
