import React, { FC, useState } from "react";
import { ActionIcon, Button, Modal, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Settings, Sun } from "tabler-icons-react";
import { NotationSettings } from "./settings.modal";
import { NotImplementedAlert } from "../../../../app.module/app.components/not-implemented.alert";
import { PanelLayout } from "../../formatter.view.layouts/panel.layout";

export const SettingsPanel = () => {
  const [ notationSettingsModalOpened, setNotationSettingsModalOpened ] = useState(false);
  const [ jsonNotationOpened, setJsonNotationOpened ] = useState(false);
  const [ parserOptionsOpened, setParserOptionsOpened ] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const ColorSchemeActionIcon = () => <ActionIcon
    variant="outline"
    color={dark ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}
    title="Toggle color scheme"
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

  return (
    <>
      <Modals/>
      <OptionsPanel/>
    </>
  )
}
