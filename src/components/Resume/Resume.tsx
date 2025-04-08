import cx from 'classnames';
import { useState } from 'react';
import { LangMap } from '../../constant/lang';
import { LangTypes } from '../../constant/lang/type.ts';
import { LangProvider, useLang } from '../../hooks/lang.tsx';
import { BasicInfo } from '../BasicInfo/BasicInfo.tsx';
import { Career } from '../Career/Career.tsx';
import { Divider } from '../Divider/Divider.tsx';
import { Education } from '../Education/Education.tsx';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector.tsx';
import { Name } from '../Name/Name.tsx';
import { Project } from '../Project/Project.tsx';
import { ResumeSection } from '../ResumeSection/ResumeSection.tsx';
import classes from './Resume.module.scss';
import { Skill } from '../Skill/Skill.tsx';

export const Resume = () => {
  const [selectedLang, setSelectedLang] = useState<LangTypes>(LangTypes.zhHans);
  const { educationLabel, careerLabel, projectLabel, skillLabel } = useLang();

  return (
    <>
      <LanguageSelector
        className="absolute top-16 right-16"
        selectedLang={selectedLang}
        onChange={setSelectedLang}
      />
      <LangProvider lang={LangMap[selectedLang]}>
        <div className={cx(classes.resume, 'pb-16')}>
          <Name />
          <Divider />
          <BasicInfo />

          <ResumeSection title={skillLabel}>
            <Skill />
          </ResumeSection>

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
    </>
  );
};
