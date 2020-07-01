/** @jsx jsx */
import { useThemeUI, IconButton, jsx } from 'theme-ui';

const ToggleMode = props => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
      {...props}
    >
      <div
        sx={
          colorMode === 'default'
            ? {
              width: 20,
              height: 20,
              backgroundColor: 'transparent',
              borderRadius: '50%',
              boxShadow: '7px 0px 0px 0px #404b69',
              marginLeft: -12,
            }
            : {
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#ffeccf',
              boxShadow: '0px 0px 4px 2px #ffbb52',
            }
        }
      />
    </IconButton>
  );
};

export default ToggleMode;
