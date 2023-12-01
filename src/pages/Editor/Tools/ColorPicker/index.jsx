import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';

export const Demo = ({ color, setColor }) => {
  return (
    <>
      <Chrome
        color={color}
        style={{ float: 'left' }}
        placement={GithubPlacement.Right}
        onChange={(color) => {
          // Update the color value using the setTextColor setter function.
          setColor(color.hexa);
        }}
      />

      {/* <div style={{ background: color, marginTop: 30, padding: 10 }}>
        {color}
      </div> */}
    </>
  );
};
