import { useHover } from '@mantine/hooks';
import cx from 'classnames';
import { LangTypes } from '../../constant/lang/type.ts';
import { isNotNil } from '../../util/type.ts';
import classes from './LanguageSelector.module.scss';

const LangOptions = [
  { label: '简中', value: LangTypes.zhHans },
  { label: 'En', value: LangTypes.enUS },
];

interface Props {
  className?: string;

  selectedLang: LangTypes;

  onChange: (lang: LangTypes) => void;
}

export const LanguageSelector = ({
  className,
  selectedLang,
  onChange,
}: Props) => {
  const options = [
    LangOptions.find((option) => option.value === selectedLang),
    ...LangOptions.filter((option) => option.value !== selectedLang),
  ].filter(isNotNil);

  const { ref, hovered } = useHover();

  return (
    <ul ref={ref} className={cx(classes.langSwitcher, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 100 ${LangOptions.length * 100}`}
      >
        <title>language switcher (use Enter to switch)</title>
        <defs>
          <filter id="goo-effect" width="110%" height="215%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo-effect"
            />
            <feBlend in="SourceGraphic" in2="goo-effect" />
          </filter>
        </defs>
        <g filter="url(#goo-effect)">
          {options.map((_, index) => (
            <circle
              // circle is only decoration, order is not important
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={classes.option}
              style={
                index > 0 && hovered
                  ? { transform: `translateY(${98 * index}px)` }
                  : undefined
              }
              cx="50"
              cy="50"
              r="45"
            />
          ))}
        </g>
      </svg>

      {options.map(({ label, value }, index) => (
        <li
          key={value}
          className={classes.optionText}
          style={{
            transition: 'opacity 0.2s linear 0.3s',
            top: `${index * 49}px`,
            opacity: index === 0 || hovered ? 1 : 0,
          }}
        >
          <button
            type="button"
            aria-label={`switch language to ${label}`}
            onClick={() => {
              if (index === 0) {
                return;
              }
              ref.current?.blur?.();
              onChange(value);
            }}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
