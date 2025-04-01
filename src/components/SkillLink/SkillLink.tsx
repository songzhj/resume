import type { FC, SVGProps } from 'react';

export const SkillLink = ({
  className,
  link,
  Icon,
}: { className?: string; link: string; Icon: FC<SVGProps<SVGSVGElement>> }) => (
  <a className={className} href={link} target="_blank" rel="noreferrer">
    <Icon className="size-36" xlinkTitle="1" />
  </a>
);
