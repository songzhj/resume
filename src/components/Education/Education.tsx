import { useLang } from '../../hooks/lang.tsx';
import { List } from '../List/List.tsx';

export const Education = () => {
  const { educationDuration, educationContent } = useLang();

  return (
    <List>
      <List.Item>
        <span>{educationDuration}</span>
        <span className="ml-16">{educationContent}</span>
      </List.Item>
    </List>
  );
};
