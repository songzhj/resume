import cx from 'classnames';
import classes from './Divider.module.scss';

export const Divider = ({ className }: { className?: string }) => (
  <div className={cx(classes.divider, className)} />
);
