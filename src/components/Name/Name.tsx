import { useLang } from '../../hooks/lang.tsx';
import classes from './Name.module.scss';

export const Name = () => {
  const { name } = useLang();
  return <h1 className={classes.name}>{name}</h1>;
};
