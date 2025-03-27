import type { CareerType } from '../../constant/lang/type.ts';
import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';
import classes from './Career.module.scss';

const CareerItem = ({ career }: { career: CareerType }) => {
  return (
    <div className={classes.career}>
      <p>
        <span>{career.duration}</span>
        <span className={classes.company}>{career.companyAndTitle}</span>
      </p>
      <List>
        {career.description.map((_) => (
          <List.Item key={_}>{_}</List.Item>
        ))}
      </List>
    </div>
  );
};

export const Career = () => {
  const { career } = useLang();

  return (
    <>
      {career.map((_) => (
        <CareerItem key={_.duration} career={_} />
      ))}
    </>
  );
};
