import React, { FC, ReactNode } from "react";
import { Card, Text, Group, GroupProps } from '@mantine/core';
import { COPYRIGHT_TEXT } from "../../../app.module/app.assets/texts.asset";

const CopyrightTextStyle: Record<string, string | number> = {
  position: 'absolute',
  zIndex: '100',
  right: '1em',
  bottom: '1em',
}

interface PanelLayoutProps extends GroupProps {
  children: ReactNode,
  withCopyright: boolean
}

export const PanelLayout: FC<any> = (props: PanelLayoutProps) => {

  const Copyright = () =>
    <Text size={'xs'} style={CopyrightTextStyle}>
      {COPYRIGHT_TEXT}
    </Text>

  return (
    <Card my={'md'}>
      {props.withCopyright && <Copyright/>}
      <Group>
        {props.children}
      </Group>
    </Card>
  )
}
