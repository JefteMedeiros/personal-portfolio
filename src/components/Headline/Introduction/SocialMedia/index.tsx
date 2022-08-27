import Link from 'next/link';
import { DiscordLogo, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { FollowMe, SocialMediaContainer, SocialMediaRow, SocialMediaSquareIcon } from './styles';

export function SocialMedia() {
  return (
    <SocialMediaContainer>
      <FollowMe>Follow me on</FollowMe>
      <SocialMediaRow>
        <li>
          <a target={'_blank'} href="https://github.com/JefteMedeiros">
            <SocialMediaSquareIcon>
              <GithubLogo size={20} />
            </SocialMediaSquareIcon>
          </a>
        </li>
        <li>
          <a target={'_blank'} href="https://www.linkedin.com/in/jeftemedeiros/">
            <SocialMediaSquareIcon>
              <LinkedinLogo size={20} weight="fill" />
            </SocialMediaSquareIcon>
          </a>
        </li>
        <li>
          <a target={'_blank'} href="https://twitter.com/_jeffmedeiros_">
            <SocialMediaSquareIcon>
              <TwitterLogo size={20} weight="fill" />
            </SocialMediaSquareIcon>
          </a>
        </li>
        <li>
          <a target={'_blank'} href="https://discordapp.com/users/303285711174631426">
            <SocialMediaSquareIcon>
              <DiscordLogo size={20} weight="bold" />
            </SocialMediaSquareIcon>
          </a>
        </li>
      </SocialMediaRow>
    </SocialMediaContainer>
  );
}
