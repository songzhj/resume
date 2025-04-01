import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';
import { SkillLink } from '../SkillLink/SkillLink.tsx';
import JSIcon from '../../assets/skills/js.svg?react';
import TSICon from '../../assets/skills/ts.svg?react';
import ReactICon from '../../assets/skills/react.svg?react';
import RxJSICon from '../../assets/skills/rxjs.svg?react';
import VueIcon from '../../assets/skills/vue.svg?react';
import AngularIcon from '../../assets/skills/angular.svg?react';
import ElectronIcon from '../../assets/skills/electron.svg?react';
import NodeJSIcon from '../../assets/skills/nodejs.svg?react';
import AstroIcon from '../../assets/skills/astro.svg?react';
import HTMLIcon from '../../assets/skills/html.svg?react';
import CSSIcon from '../../assets/skills/css.svg?react';
import TailwindcssIcon from '../../assets/skills/tailwindcss.svg?react';
import SassIcon from '../../assets/skills/sass.svg?react';
import NginxIcon from '../../assets/skills/nginx.svg?react';

const SkillLinkList = [
  {
    link: 'https://www.typescriptlang.org/',
    Icon: TSICon,
  },
  {
    link: 'https://reactjs.org/',
    Icon: ReactICon,
  },
  {
    link: 'https://rxjs.dev/',
    Icon: RxJSICon,
  },
  {
    link: 'https://anagular.dev/',
    Icon: AngularIcon,
  },
  {
    link: 'https://vuejs.org/',
    Icon: VueIcon,
  },
  {
    link: 'https://www.electronjs.org/',
    Icon: ElectronIcon,
  },
  {
    link: 'https://nodejs.org/en/',
    Icon: NodeJSIcon,
  },
  {
    link: 'https://astro.build/',
    Icon: AstroIcon,
  },
  {
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    Icon: JSIcon,
  },
  {
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    Icon: HTMLIcon,
  },
  {
    link: 'https://www.w3.org/TR/CSS/#css',
    Icon: CSSIcon,
  },
  {
    link: 'https://tailwindcss.com/',
    Icon: TailwindcssIcon,
  },
  {
    link: 'https://sass-lang.com/',
    Icon: SassIcon,
  },
  {
    link: 'https://nginx.org/',
    Icon: NginxIcon,
  },
];

export const Skill = () => {
  const { skillDescription } = useLang();

  return (
    <div>
      <p className="flex mt-16">
        {SkillLinkList.map((_) => (
          <SkillLink key={_.link} link={_.link} Icon={_.Icon} />
        ))}
      </p>
      <List className="mt-16">
        {skillDescription.map((_) => (
          <List.Item key={_}>{_}</List.Item>
        ))}
      </List>
    </div>
  );
};
