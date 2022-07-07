import React, { ReactNode } from 'react';
import { Text, Group, Button, MantineTheme, useMantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, DropzoneProps } from '@mantine/dropzone';
import { CloudUpload } from 'tabler-icons-react';
import { useStyles } from "./dropzone.style";

export const getActiveColor = (status: DropzoneStatus, theme: MantineTheme) => {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
      ? theme.colors.red[6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black;
}

interface DropzoneLayoutProps extends Omit<DropzoneProps, 'children'> {
  description: ReactNode,
  title: ReactNode,
  selectCall: ReactNode,
  dropFilesCall: ReactNode,
  rejectedMessage: ReactNode,
}

export const DropzoneLayout = (props: DropzoneLayoutProps) => {

  const theme = useMantineTheme();
  const { classes } = useStyles();

  // @ts-ignore
  const onDropButtonClick = () => props.openRef?.current();

  const DropzoneContent = (status: DropzoneStatus) => {

    const Message = status.accepted
      ? props.dropFilesCall
      : status.rejected
        ? props.rejectedMessage
        : props.title;

    return <div style={{ pointerEvents: 'none' }}>
      <Group position='center'>
        <CloudUpload size={50} color={getActiveColor(status, theme)}/>
      </Group>
      <Text align='center' weight={700} size='lg' mt='xl' sx={{ color: getActiveColor(status, theme) }}>
        {Message}
      </Text>
      <Text align='center' size='sm' mt='xs' color='dimmed'>
        {props.description}
      </Text>
    </div>
  }

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={props.openRef}
        onDrop={props.onDrop}
        className={classes.dropzone}
        radius={'md'}
      >
        {DropzoneContent}
      </Dropzone>
      <Button
        onClick={onDropButtonClick}
        className={classes.control}
        radius={'xl'}
        color={'gray'}
      >
        {props.selectCall}
      </Button>
    </div>
  );
}
