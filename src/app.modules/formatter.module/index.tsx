import React, {} from 'react';
import { Container } from '@mantine/core';
import { SettingsPanel, TwoSideEditorLayout } from './formatter.view';
import { EditorPanel, OutputPanel } from "./formatter.view";

export const Formatter = () => {
  return (
    <Container>
      <SettingsPanel/>
      <TwoSideEditorLayout
        leftSlot={<EditorPanel/>}
        rightSlot={<OutputPanel/>}
      />
    </Container>
  )
}