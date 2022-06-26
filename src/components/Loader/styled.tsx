import styled from "styled-components";

export const EmumbaLoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const EmumbaLoader = styled.div`
  border: 0.25rem solid #f3f3f3; /* Light grey */
  border-top: 0.25rem solid #3498db; /* Blue */
  border-radius: 50%;
  margin-left: 0.125rem;
  width: 1rem;
  height: 1rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
