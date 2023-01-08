import { FC } from 'react';
import { Box } from '@mantine/core';

export const Blockquote: FC<any> = (props) => {
  return (
    <Box
      component="blockquote"
      sx={(theme) => ({
        borderLeft: `solid 8px ${theme.fn.rgba(
          theme.fn.darken(theme.colors.blue[7], 0.2),
          0.6,
        )}`,
        padding: '0.5rem 1rem',
        backgroundColor: theme.fn.rgba(theme.primaryColor, 0.05),
        borderRadius: '4px',
        margin: '3rem',
        '@media (max-width: 720px)': {
          margin: '1rem',
        },
      })}
      {...props}
    />
  );
};
