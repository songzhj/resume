import { useLang } from '../../hooks/lang.tsx';
import { useRefreshByTimer } from '../../hooks/useRefreshByTimer.ts';
import classes from './RealTimeAge.module.scss';

const bornDate = new Date('1994/07/23');

export const RealTimeAge = () => {
  const { yearText, monthText, dayText, hourText, minuteText, secondText } =
    useLang();
  const nowDate = new Date();

  let year = nowDate.getFullYear() - bornDate.getFullYear();
  let month = nowDate.getMonth() - bornDate.getMonth();
  let day = nowDate.getDate() - bornDate.getDate();
  const hour = nowDate.getHours();
  const minute = nowDate.getMinutes();
  const second = nowDate.getSeconds();

  if (day < 0) {
    const lastMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 0);
    day += lastMonth.getDate();
    month -= 1;
  }

  if (month < 0) {
    year -= 1;
    month += 12;
  }

  useRefreshByTimer(1000);

  return (
    <span className={classes.age}>
      {year}
      {yearText}
      {month}
      {monthText}
      {day}
      {dayText}
      {hour}
      {hourText}
      {minute}
      {minuteText}
      {second}
      {secondText}
    </span>
  );
};
