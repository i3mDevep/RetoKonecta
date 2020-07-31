import styled from "styled-components";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  margin-bottom: 5px;
`;
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  height: 75px;
  width: 75px;
`;

export const Delete = styled.div`
 position: absolute;
 top: -10px;
 color: red;
`