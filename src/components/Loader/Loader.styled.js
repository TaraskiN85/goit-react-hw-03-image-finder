import styled from 'styled-components';

export const Loading = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 45%;
  top: 25%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #ff3d00;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;