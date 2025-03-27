import cx from 'classnames';
import type { ReactNode } from 'react';
import classes from './List.module.scss';

const Item = ({
  className,
  children,
}: { className?: string; children: ReactNode }) => (
  <li className={cx(classes.li, className)}>{children}</li>
);

const List = ({
  className,
  children,
}: { className?: string; children: ReactNode }) => (
  <ul className={cx(classes.ul, className)}>{children}</ul>
);

List.Item = Item;

export { List };
