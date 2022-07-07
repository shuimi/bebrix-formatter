import React, { useRef } from 'react';
import { Container, Grid } from '@mantine/core';
import {
  SettingsPanel,
  TwoSideEditorLayout,
  EditorPanel,
  OutputPanel,
  PanelLayout,
  DropzoneLayout, TableOfContents,
} from './formatter.view';

export const Formatter = () => {

  const openRef = useRef<any>();

  return (
    <Container>
      <Grid columns={16}>
        <Grid.Col span={3}>
          <TableOfContents active={'Редактор'} links={[
            { label: 'Редактор', link: 'editor', order: 1 },
            { label: 'Настройки', link: 'options', order: 1 },
          ]}/>
        </Grid.Col>
        <Grid.Col span={13}>
          <SettingsPanel/>
          <PanelLayout>
            <DropzoneLayout
              openRef={openRef}
              onDrop={() => {
              }}
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
        </Grid.Col>
      </Grid>
    </Container>
  )
}