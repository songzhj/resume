import type { ReactNode } from 'react';
import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';
import { RealTimeAge } from '../RealTimeAge/RealTimeAge.tsx';
import classes from './BasicInfo.module.scss';

const BasicInfoItem = ({
  label,
  render,
}: { label: string; render: ReactNode }) => (
  <List.Item>
    <span>{label}</span>
    <span>{render}</span>
  </List.Item>
);

export const BasicInfo = () => {
  const { emailLabel, email, ageLabel, genderLabel, gender } = useLang();

  return (
    <List>
      <BasicInfoItem
        label={emailLabel}
        render={
          <a className={classes.emailLink} href={`mailto:${email}`}>
            {email}
          </a>
        }
      />
      <BasicInfoItem label={genderLabel} render={gender} />
      <BasicInfoItem label={ageLabel} render={<RealTimeAge />} />
    </List>
  );
};
