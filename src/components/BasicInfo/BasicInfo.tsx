import type { ReactNode } from 'react';
import { useLang } from '../../hooks/lang.tsx';
import { RealTimeAge } from '../RealTimeAge/RealTimeAge.tsx';
import classes from './BasicInfo.module.scss';

const BasicInfoItem = ({
  label,
  render,
}: { label: string; render: ReactNode }) => (
  <li className={classes.basicInfoItem}>
    <span>{label}</span>
    <span className={classes.value}>{render}</span>
  </li>
);

export const BasicInfo = () => {
  const { emailLabel, email, ageLabel, genderLabel, gender } = useLang();

  return (
    <ul className={classes.basicInfo}>
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
    </ul>
  );
};
