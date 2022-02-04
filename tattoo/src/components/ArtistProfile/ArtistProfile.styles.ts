import styled from 'styled-components';
import { screenSize } from '../../theme/theme';

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardBackground.primaryLight};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 150px;
`;

export const DescriptionContainer = styled.div`
  padding: 20px;
  @media ${screenSize.tablet} {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${screenSize.tablet} {
    flex-direction: column;
  }
`;

export const ArtistName = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.textColors.titleColor};
`;

export const ItemWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DescWrapper = styled.span`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.textColors.primary};
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
  line-height: 16px;
`;

export const ErrorLabel = styled.label`
  font-weight: 400;
  color: ${(props) => props.theme.error};
  font-size: 9px;
  padding-left: 2px;
  padding-top: 2px;
`;
