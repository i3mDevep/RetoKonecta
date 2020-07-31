import styled,{css} from 'styled-components';
import { fadeIn } from '../../style/animation1';

export const List = styled.ul`
  display: flex;
  overflow: auto;
  max-width: 400px;
  ${props => props.fixed && css`
    ${fadeIn({time : '.6s'}) }
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    z-index: 1;
    transform: scale(.5);
    left: 0;
    right: 0;
    top: -20px;
  `}
`
export const Item = styled.li`
  padding: 0 8px;
  list-style: none;
`