import type { ReactNode } from 'react';
import { Divider } from '../Divider/Divider.tsx';
import classes from './ResumeSection.module.scss';

export const ResumeSection = ({
  title,
  children,
}: { title: string; children: ReactNode }) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <Divider />
      <div>{children}</div>
    </section>
  );
};
