import { type ReactNode, createContext, useContext } from 'react';
import type { LangType } from '../constant/lang/type.ts';
import { ZhHans } from '../constant/lang/zh-hans.ts';

const LangContext = createContext<LangType>(ZhHans);

export const useLang = () => {
  return useContext(LangContext);
};

export const LangProvider = ({
  children,
  lang,
}: { children: ReactNode; lang: LangType }) => (
  <LangContext.Provider value={lang}>{children}</LangContext.Provider>
);
