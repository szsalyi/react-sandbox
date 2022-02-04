import React from 'react';
import { ArtistLinks } from '../../api/datahooks/useSearchArtist';
import { Card } from '../Card/Card';
import { GenericButton } from '../GenericButton/GenericButton';
import {
  ProfileContainer,
  ImageContainer,
  DescriptionContainer,
  Image,
  ArtistName,
  ItemWrapper,
  DescWrapper,
  InfoTitle,
  Link,
  Wrapper,
  ErrorLabel,
} from './ArtistProfile.styles';

export interface ArtistProfileProps {
  imageUrl: string;
  name: string;
  facebookUrl: string;
  onClick: () => void;
  links?: ArtistLinks[];
  error?: string;
}

export const ArtistProfile: React.FC<ArtistProfileProps> = (props) => {
  return (
    <Card title="Artist Profile">
      <ProfileContainer>
        <ItemWrapper>
          <ArtistName>{props.name}</ArtistName>
        </ItemWrapper>
        <Wrapper>
          <ImageContainer>
            <Image src={props.imageUrl} />
          </ImageContainer>
          <DescriptionContainer>
            <DescWrapper>
              <InfoTitle>More information:</InfoTitle>
              {props.links &&
                props.links.map((link, index) => (
                  <Link
                    key={`link_${index}`}
                    href={link.url}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.type}
                  </Link>
                ))}
            </DescWrapper>
          </DescriptionContainer>
        </Wrapper>
        <ItemWrapper>
          <GenericButton title="Search events" onClick={props.onClick} />
          {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
        </ItemWrapper>
      </ProfileContainer>
    </Card>
  );
};
