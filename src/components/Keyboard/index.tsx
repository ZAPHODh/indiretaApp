import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import * as Styled from './styles';
export type KeyboardComponentProps = {
  onChange?: (input: string) => void;
  onKeyPress: (key: unknown) => void;
  layoutName: string;
};

export const KeyboardComponent = ({
  onChange,
  onKeyPress,
  layoutName,
}: KeyboardComponentProps) => {
  return (
    <Keyboard
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};
