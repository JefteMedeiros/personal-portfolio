import { projects } from '../../data/projects';
import { SectionTitleUnderline } from '../../styles/Global/styles';
import { Container, SelectedWorkContainer } from './styles';
import { WorkCard } from './WorkCard';

interface RepoProps {
  repo: string;
}

export function MySelectedWork() {
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
