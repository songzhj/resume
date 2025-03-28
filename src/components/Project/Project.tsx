import type { ProjectType } from '../../constant/lang/type.ts';
import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';
import classes from './Project.module.scss';

const ProjectItem = ({ project }: { project: ProjectType }) => (
  <div className={classes.project}>
    <p className="text-[17px] font-[600]">
      <span>{project.duration}</span>
      <span className="ml-16">{project.name}</span>
    </p>
    <p className="mt-12 text-justify">{project.description}</p>
    <List>
      {project.highlights.map((_) => (
        <List.Item key={_}>{_}</List.Item>
      ))}
    </List>
  </div>
);

export const Project = () => {
  const { project } = useLang();

  return (
    <div>
      {project.map((_) => (
        <ProjectItem key={_.duration} project={_} />
      ))}
    </div>
  );
};
