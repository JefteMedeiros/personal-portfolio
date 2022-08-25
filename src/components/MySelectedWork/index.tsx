import axios from "axios";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { query } from "../../services";
import { SectionTitleUnderline } from "../../styles/Global/styles";
import { Container, SelectedWorkContainer } from "./styles";
import { WorkCard } from "./WorkCard";

export function MySelectedWork() {
  const [repos, setRepos] = useState<any>();

  useEffect(() => {
    const retrievePinnedRepos = async () => {
      const response = await axios.post(
        "https://api.github.com/graphql",
        { query: query },
        {
          headers: {
            Authorization: "bearer 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",
          },
        }
      );
      const data = await response;
      setRepos(data);
    };
  });

  return (
    <Container>
      <SectionTitleUnderline>My Selected Work</SectionTitleUnderline>
      <SelectedWorkContainer>
        {projects.map((project, key) => {
          return <WorkCard key={key} name={project.name} image={project.logo} />;
        })}
      </SelectedWorkContainer>
    </Container>
  );
}
