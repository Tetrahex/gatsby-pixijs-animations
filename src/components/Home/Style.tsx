import styled from "styled-components";
import backgroundImage from "../../images/cloud.webp";
import redBanner from "../../images/redBanner.webp";
import greenBanner from "../../images/greenBanner.webp";
import blueBanner from "../../images/blueBanner.webp";

export const Main = styled.div`
  background-color: #007dc1;
`;

export const BGImage = styled.div`
  background-image: url(${backgroundImage});
  height: 1100px;
  width: auto;
  background-size: 100% 100%;
`;

export const BannerImage = styled.img`
  width: 540px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 140px;
`;

export const SecondComponent = styled.div`
  background-color: #007dc1;
  display: flex;
  padding: 100px 130px;
`;

export const RedBanner = styled.div`
  background-image: url(${redBanner});
  height: 458px;
  width: 410px;
  background-size: 100% 100%;
  margin: 0px 20px;
`;

export const GreenBanner = styled.div`
  background-image: url(${greenBanner});
  height: 458px;
  width: 410px;
  background-size: 100% 100%;
  margin: 0px 20px;
`;

export const BlueBanner = styled.div`
  background-image: url(${blueBanner});
  height: 458px;
  width: 410px;
  background-size: 100% 100%;
`;
