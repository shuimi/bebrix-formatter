import React, { FC, useState } from "react";
import { Button, Card, Group, Modal } from "@mantine/core";
import { Settings } from "tabler-icons-react";
import { NotationSettings } from "./settings.modal";

export const SettingsPanel = () => {
  const [ notationSettingsModalOpened, setNotationSettingsModalOpened ] = useState(false);
  const [ jsonNotationOpened, setJsonNotationOpened ] = useState(false);
  const [ parserOptionsOpened, setParserOptionsOpened ] = useState(false);

  const SettingsButton: FC<any> = ({ icon, onClick, children }: {
    icon: any,
    onClick: any,
    children: any
  }) => <Button style={{ background: '#2f2f36', fontWeight: 'normal', }} leftIcon={icon} onClick={onClick}>
    {children}
  </Button>

  const OptionsPanel = () => {
    return (
      <Card my={'md'}>
        <Group>
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
        </Group>
      </Card>
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
          title='Настройки нотации'
        >
          TEST
        </Modal>
        <Modal
          opened={parserOptionsOpened}
          onClose={() => setParserOptionsOpened(false)}
          title='Настройки нотации'
        >
          TEST
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