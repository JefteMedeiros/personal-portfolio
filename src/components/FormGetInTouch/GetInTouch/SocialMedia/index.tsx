import { DiscordLogo, InstagramLogo, RedditLogo, TelegramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';
import { Container, SocialMediaCircle } from './styles';

export function SocialMedia() {
  return (
    <Container>
      <li>
        <SocialMediaCircle>
          <YoutubeLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
      <li>
        <SocialMediaCircle>
          <InstagramLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
      <li>
        <SocialMediaCircle>
          <TwitterLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
      <li>
        <SocialMediaCircle>
          <RedditLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
      <li>
        <SocialMediaCircle>
          <DiscordLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
      <li>
        <SocialMediaCircle>
          <TelegramLogo size={20} weight="fill" />
        </SocialMediaCircle>
      </li>
    </Container>
  );
}
