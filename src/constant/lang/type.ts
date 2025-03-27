export interface LangType {
  name: string;
  emailLabel: string;
  email: string;
  ageLabel: string;
  genderLabel: string;
  gender: string;
  yearText: string;
  monthText: string;
  dayText: string;
  hourText: string;
  minuteText: string;
  secondText: string;
  educationLabel: string;
  educationDuration: string;
  educationContent: string;
  careerLabel: string;
  career: ReadonlyArray<CareerType>;
}

export interface CareerType {
  duration: string;
  companyAndTitle: string;
  description: ReadonlyArray<string>;
}

export enum LangTypes {
  zhHans = 'zh-hans',
}
