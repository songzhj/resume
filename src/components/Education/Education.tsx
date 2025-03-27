import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';
import classes from './Education.module.scss';

export const Education = () => {
  const { educationDuration, educationContent } = useLang();

  return (
    <List>
      <List.Item>
        <span>{educationDuration}</span>
        <span className={classes.content}>{educationContent}</span>
      </List.Item>
    </List>
  );
};
