import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  align-content: center;
  height: 24px;
  border: 2px solid #cecefb;
  outline: 2px solid black;
  background-color: #ffffff;
  padding-left: 5px;

  span {
    line-height: 28px;
    font-size: 16px;
    padding: 0 8px 0 8px;
  }
`;

export const SpanButSpecial = styled.span`
  float: right;
`;
