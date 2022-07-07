import React, { FC, useRef, useState } from 'react';
import { ActionIcon, Button, Drawer, Modal, useMantineColorScheme } from '@mantine/core';
import { MoonStars, Settings, Sun, Upload } from 'tabler-icons-react';
import { NotationSettings } from './settings.modal';
import { NotImplementedAlert } from '../../../../app.module/app.components/not-implemented.alert';
import { PanelLayout, DropzoneLayout } from '../../formatter.view.layouts';

export const SettingsPanel = () => {

  const openRef = useRef<any>();

  const [ notationSettingsModalOpened, setNotationSettingsModalOpened ] = useState(false);
  const [ jsonNotationOpened, setJsonNotationOpened ] = useState(false);
  const [ parserOptionsOpened, setParserOptionsOpened ] = useState(false);

  const [drawerOpened, setDrawerOpened] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const ColorSchemeActionIcon = () => <ActionIcon
    variant='outline'
    color={dark ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}
    title='Toggle color scheme'
  >
    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
  </ActionIcon>;

  const SettingsButton: FC<any> = ({ icon, onClick, children }: {
    icon: any,
    onClick: any,
    children: any
  }) => <Button style={{ background: '#2f2f36', fontWeight: 'normal', }} leftIcon={icon} onClick={onClick}>
    {children}
  </Button>

  const UploadDrawer = () => {
    return (
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title='Загрузить файл'
        padding='xl'
        size='xl'
      >
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
      </Drawer>
    )
  }

  const OptionsPanel = () => {
    return (
      <PanelLayout withCopyright>
        <SettingsButton
          onClick={() => setNotationSettingsModalOpened(true)}
          icon={<Settings strokeWidth={2} color={'#FFFFFF'}/>}
        >
          Настройки нотации
        </SettingsButton>
        <SettingsButton
          onClick={() => setJsonNotationOpened(true)}
          icon={<Settings strokeWidth={2} color={'#FFFFFF'}/>}
        >
          Параметры парсера
        </SettingsButton>
        <SettingsButton
          onClick={() => setParserOptionsOpened(true)}
          icon={<Settings strokeWidth={2} color={'#FFFFFF'}/>}
        >
          Параметры JSON
        </SettingsButton>
        <ColorSchemeActionIcon/>
      </PanelLayout>
    )
  }

  const Modals = () => {
    return (
      <>
        <Modal
          opened={notationSettingsModalOpened}
          onClose={() => setNotationSettingsModalOpened(false)}
          title='Настройки нотации'
        >
          <NotationSettings/>
        </Modal>
        <Modal
          opened={jsonNotationOpened}
          onClose={() => setJsonNotationOpened(false)}
          title='Not implemented'
        >
          <NotImplementedAlert title={'Будет реализовано позднее'}>
            Данная функциональность будет реализована позднее
          </NotImplementedAlert>
        </Modal>
        <Modal
          opened={parserOptionsOpened}
          onClose={() => setParserOptionsOpened(false)}
          title='Not implemented'
        >
          <NotImplementedAlert title={'Будет реализовано позднее'}>
            Данная функциональность будет реализована позднее
          </NotImplementedAlert>
        </Modal>
      </>
    )
  }

  const Drawers = () => {
    return (
      <UploadDrawer/>
    )
  }

  return (
    <>
      <Modals/>
      <SettingsButton
        onClick={() => setDrawerOpened(true)}
        icon={<Upload strokeWidth={2} color={'#FFFFFF'}/>}
      >
        Загрузить файл
      </SettingsButton>
      <Drawers/>
      <OptionsPanel/>
    </>
  )
}
