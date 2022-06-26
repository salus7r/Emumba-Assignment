import React from "react";
import { EmumbaLoadingWrapper, EmumbaLoader } from "./styled";

type Props = {
  loading: boolean;
};

export default function index({ loading }: Props) {
  return loading ? (
    <EmumbaLoadingWrapper>
      Loading... <EmumbaLoader />
    </EmumbaLoadingWrapper>
  ) : (
    <></>
  );
}
