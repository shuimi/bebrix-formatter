import React from 'react';
import { Container, Grid } from '@mantine/core';
import {
  SettingsPanel,
  TwoSideEditorLayout,
  EditorPanel,
  OutputPanel,
  TableOfContents,
} from './formatter.view';

export const Formatter = () => {

  return (
    <Container>
      <Grid columns={16}>
        <Grid.Col span={3}>
          <TableOfContents active={'Редактор'} links={[
            { label: 'Редактор', link: 'editor', order: 1 },
            { label: 'Загузить файл', link: 'editor/upload', order: 2 },
            { label: 'Настройки', link: 'options', order: 1 },
            { label: 'Нотация', link: 'options/notation', order: 2 },
            { label: 'Парсер', link: 'options/parser', order: 2 },
            { label: 'Статистика', link: 'stats', order: 1 },
          ]}/>
        </Grid.Col>
        <Grid.Col span={13}>
          <SettingsPanel/>
          <TwoSideEditorLayout
            leftSlot={<EditorPanel/>}
            rightSlot={<OutputPanel/>}
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}