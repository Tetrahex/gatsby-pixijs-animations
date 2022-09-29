import styled from "styled-components";
import backgroundImage from "../../images/cloud.webp";

export const Main = styled.div`
  background-color: #007dc1;
  height: 1000px;
`;

export const BGImage = styled.div`
  background-image: url(${backgroundImage});
  height: 1000px;
  width: auto;
  background-size: 100% 100%;
`;
