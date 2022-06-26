import { device } from "@utils/responsive";
import styled, { css } from "styled-components";

const shared = () => css`
  border: none;
  color: #97a0af;
  background-color: #edf3fd;
`;

const sharedBorderRadius = () => css`
  border-radius: 0.75rem;
`;

const sharedDarkAndBoldText = () => css`
  color: #172b4d;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const EmumbaButton = styled.button<{ $primary?: true }>`
  ${shared};
  ${sharedBorderRadius};
  ${sharedDarkAndBoldText};

  color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
  background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

  height: auto;
  padding: 1rem 1.25rem;
`;

export const EmumbaInput = styled.input`
  ${shared};
  ${sharedBorderRadius};

  width: 100%;
  color: black;
  padding: 1.5rem;

  &:disabled {
    background: #dddddd;
    cursor: not-allowed;
  }
`;

export const EmumbaSelect = styled.select<{ $primary?: true }>`
  ${shared};
  ${sharedBorderRadius};
  ${sharedDarkAndBoldText};

  color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
  background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

  cursor: pointer;
  padding: 1.5rem;
  width: 20rem;
`;

export const EmumbaCard = styled.div<{ $height?: string; $width?: string }>`
  ${sharedBorderRadius}

  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  border: none;
  background: #ffffff;
  box-shadow: 0 0.375rem 1rem #edf3fd;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const FlexEnd = styled(Flex)`
  align-items: flex-end;
`;

export const FlexSpaceBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexCenterBetween = styled(FlexSpaceBetween)`
  align-items: center;
`;

export const FlexColumn = styled(Flex)<{ $width?: string }>`
  flex-direction: column;
  margin: 0 0.5rem;

  /* width: ${({ $width }) => $width || "auto"}; */

  @media ${device.mobileS} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: ${({ $width }) => $width || "auto"};
  }
`;

export const FlexRow = styled(Flex)`
  width: 100%;
  /* margin: 0 -0.5rem; */
  justify-content: space-between;
`;

export const OverFlowSlide = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: -webkit-box;
  padding-bottom: 1rem;
`;
