import { device } from "@utils/responsive";
import styled, { css } from "styled-components";

const shared = () => css`
  border: none;
  color: #97a0af;
  background-color: #edf3fd;
`;

const sharedBorderRadius = () => css`
  border-radius: 12px;
`;

const sharedDarkAndBoldText = () => css`
  color: #172b4d;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const EmumbaButton = styled.button<{ $primary?: true }>`
  ${shared};
  ${sharedBorderRadius};
  ${sharedDarkAndBoldText};

  color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
  background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

  height: auto;
  padding: 15px 20px;
`;

export const EmumbaInput = styled.input`
  ${shared};
  ${sharedBorderRadius};

  padding: 10px 20px;

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.desktop} {
    padding: 15px 30px;
  }

  @media ${device.desktopXL} {
    padding: 20px 40px;
  }
`;

export const EmumbaSelect = styled.select<{ $primary?: true }>`
  ${shared};
  ${sharedBorderRadius};
  ${sharedDarkAndBoldText};

  color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
  background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

  padding: 10px 20px;
  padding: 5px 15px 3px;

  @media ${device.tablet} {
    padding: 5px 15px 3px;
  }

  @media ${device.desktop} {
    padding: 10px 25px 5px;
  }

  @media ${device.desktopXL} {
    padding: 15px 35px 10px;
  }
`;

export const EmumbaLanguageSelect = styled(EmumbaSelect)`
  border-radius: 50px;
`;

export const EmumbaCard = styled.div`
  ${sharedBorderRadius}

  border: none;
  background: #ffffff;
  box-shadow: 0px 6px 16px #edf3fd;
  margin-top: 20px;
`;
