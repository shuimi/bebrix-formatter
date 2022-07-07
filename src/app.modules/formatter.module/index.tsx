import React, { useRef } from 'react';
import { Container } from '@mantine/core';
import { SettingsPanel, TwoSideEditorLayout } from './formatter.view';
import { EditorPanel, OutputPanel } from "./formatter.view";
import { PanelLayout } from "./formatter.view/formatter.view.layouts/panel.layout";
import { DropzoneLayout } from "./formatter.view/formatter.view.layouts/dropzone.layout";

export const Formatter = () => {

  const openRef = useRef<any>();

  return (
    <Container>
      <SettingsPanel/>
      <PanelLayout>
        <DropzoneLayout
          openRef={openRef}
          onDrop={() => {}}
          maxSize={500 * 1024 ** 2}
          description={'Загрузите сюда файл в формате .json или .txt, файл должен быть не более 500Mb'}
          dropFilesCall={'Перетащите файл сюда'}
          rejectedMessage={'Файл слишком большой'}
          selectCall={'Выберите файл'}
          title={'Загрузить файл'}
        />
      </PanelLayout>
      <TwoSideEditorLayout
        leftSlot={<EditorPanel/>}
        rightSlot={<OutputPanel/>}
      />
    </Container>
  )
}