import { useState } from 'react';
import { LangMap } from '../../constant/lang';
import { LangTypes } from '../../constant/lang/type.ts';
import { LangProvider, useLang } from '../../hooks/lang.tsx';
import { BasicInfo } from '../BasicInfo/BasicInfo.tsx';
import { Career } from '../Career/Career.tsx';
import { Divider } from '../Divider/Divider.tsx';
import { Education } from '../Education/Education.tsx';
import { Name } from '../Name/Name.tsx';
import { Project } from '../Project/Project.tsx';
import { ResumeSection } from '../ResumeSection/ResumeSection.tsx';
import classes from './Resume.module.scss';

export const Resume = () => {
  const [selectedLang, setSelectedLang] = useState<LangTypes>(LangTypes.zhHans);
  const { educationLabel, careerLabel, projectLabel } = useLang();

  // TODO: language select

  return (
    <LangProvider lang={LangMap[selectedLang]}>
      <div className={classes.resume}>
        <Name />
        <Divider />
        <BasicInfo />

        <ResumeSection title={educationLabel}>
          <Education />
        </ResumeSection>

        <ResumeSection title={careerLabel}>
          <Career />
        </ResumeSection>

        <ResumeSection title={projectLabel}>
          <Project />
        </ResumeSection>
      </div>
    </LangProvider>
  );
};
