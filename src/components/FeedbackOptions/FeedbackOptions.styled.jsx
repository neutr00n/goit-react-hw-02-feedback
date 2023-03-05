import styled from '@emotion/styled';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  background: #f5f4fa;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
