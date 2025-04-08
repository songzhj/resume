import { EnUS } from './en-us.ts';
import { LangTypes } from './type.ts';
import { ZhHans } from './zh-hans.ts';

export const LangMap = {
  [LangTypes.zhHans]: ZhHans,

  [LangTypes.enUS]: EnUS,
};
