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

export const EmumbaCard = styled.div`
  ${sharedBorderRadius}

  border: none;
  background: #ffffff;
  box-shadow: 0 0.375rem 1rem #edf3fd;
  margin-top: 1.25rem;
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexEnd = styled(Flex)`
  align-items: flex-end;
`;

export const FlexSpaceBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexColumn = styled(Flex)<{ col?: number }>`
  flex-direction: column;
`;

export const FlexRow = styled(Flex)``;
