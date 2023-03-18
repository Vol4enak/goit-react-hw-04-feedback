import styled from '@emotion/styled';

export const BtnFeed = styled.button`
  &::first-letter {
    text-transform: uppercase;
  }

  background-color: transparent;

  border-radius: 10px;
  &:active {
    background-color: orange;
  }
  background-color: ${function (props){
    // eslint-disable-next-line default-case
    switch (props.item) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'yellow';
      case 'bad':
        return 'red';
    }
  }};
  border: 1px solid black;
  padding: 5px 10px 5px 10px;
`;
