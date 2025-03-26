import { useState } from 'react';
import { LangMap } from '../../constant/lang';
import { LangTypes } from '../../constant/lang/type.ts';
import { LangProvider } from '../../hooks/lang.tsx';
import { BasicInfo } from '../BasicInfo/BasicInfo.tsx';
import { Divider } from '../Divider/Divider.tsx';
import { Name } from '../Name/Name.tsx';
import classes from './Resume.module.scss';

export const Resume = () => {
  const [selectedLang, setSelectedLang] = useState<LangTypes>(LangTypes.zhHans);

  // TODO: language select

  return (
    <LangProvider lang={LangMap[selectedLang]}>
      <div className={classes.resume}>
        <Name />
        <Divider />
        <BasicInfo />
      </div>
    </LangProvider>
  );
};
