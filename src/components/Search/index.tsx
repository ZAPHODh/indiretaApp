import { useEffect, useState } from 'react';
import * as Styled from './styles';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { KeyboardComponent } from 'components/Keyboard';
import CloseIcon from '@mui/icons-material/Close';
export type SearchProps = {
  onSearch?: (searchTerm: string) => void;
};

export const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [layoutName, setLayoutName] = useState('default');

  const handleSubmit = (
    e: React.FormEvent | React.MouseEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
    setKeyboardVisible(false);
  };

  // close keyboard if the user click outside of keyboard
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const keyboardContainer = document.getElementById('keyboard-container');
      const keyboardIcon = document.getElementById('keyboard-icon');

      if (keyboardContainer && !keyboardContainer.contains(e.target as Node)) {
        if (keyboardIcon.contains(e.target as Node)) return;
        setKeyboardVisible(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleKeyboardIconClick = () => {
    setKeyboardVisible((setVisible) => !setVisible);
  };

  //controlls the keyboard input
  const handleKeyboardInput = (key: string) => {
    if (key === '{shift}' || key === '{lock}') {
      setLayoutName((layoutNmae) =>
        layoutNmae === 'default' ? 'shift' : 'default',
      );
      return;
    }
    if (key === '{enter}') {
      const submitEvent = new Event('submit');
      handleSubmit(submitEvent as unknown as React.FormEvent<HTMLFormElement>);
      return;
    }
    if (key === '{space}') {
      setSearchTerm(searchTerm + ' ');
      return;
    }
    if (key === '{bksp}') {
      setSearchTerm((term) => term.slice(0, -1));
      return;
    }
    setSearchTerm(searchTerm + key);
  };
  return (
    <>
      <Styled.Wrapper
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Styled.Input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></Styled.Input>
        <Tooltip title="Pesquisar">
          <Styled.Button>
            <SearchIcon fontSize="inherit"></SearchIcon>
          </Styled.Button>
        </Tooltip>
        <Tooltip title="Teclado">
          <Styled.KeyboardIcon
            id="keyboard-icon"
            onClick={() => {
              handleKeyboardIconClick();
            }}
          >
            <KeyboardIcon fontSize="inherit" />
          </Styled.KeyboardIcon>
        </Tooltip>
      </Styled.Wrapper>
      {keyboardVisible && (
        <Styled.KeyboardContainer>
          <Tooltip title="Fechar Teclado">
            <Styled.CloseKeyboard
              onClick={() => {
                setKeyboardVisible(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </Styled.CloseKeyboard>
          </Tooltip>
          <div id="keyboard-container">
            <KeyboardComponent
              onKeyPress={handleKeyboardInput}
              layoutName={layoutName}
            ></KeyboardComponent>
          </div>
        </Styled.KeyboardContainer>
      )}
    </>
  );
};
