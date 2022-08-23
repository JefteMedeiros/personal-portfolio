import { DiscordLogo, GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import {
  FollowMe,
  SocialMediaContainer,
  SocialMediaRow,
  SocialMediaSquareIcon,
} from "./styles";

export function SocialMedia() {
  return (
    <SocialMediaContainer>
      <FollowMe>Follow me on</FollowMe>
      <SocialMediaRow>
        <li>
          <SocialMediaSquareIcon>
            <GithubLogo size={20} />
          </SocialMediaSquareIcon>
        </li>
        <li>
          <SocialMediaSquareIcon>
            <LinkedinLogo size={20} weight="fill" />
          </SocialMediaSquareIcon>
        </li>

        <li>
          <SocialMediaSquareIcon>
            <TwitterLogo size={20} weight="fill" />
          </SocialMediaSquareIcon>
        </li>
        <li>
          <SocialMediaSquareIcon>
            <DiscordLogo size={20} weight="bold" />
          </SocialMediaSquareIcon>
        </li>
      </SocialMediaRow>
    </SocialMediaContainer>
  );
}
