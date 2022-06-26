import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const SearchOptionsWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 0.375rem 1rem #edf3fd;
  position: absolute;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
`;

export const Option = styled.div`
  cursor: pointer;
  font-size: 1.125rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid #f3f3f3;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #edf3fd;
  }
`;
