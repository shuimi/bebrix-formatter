import React, { FC, useState } from "react";
import { Button, Card, Group, Modal, Text } from "@mantine/core";
import { Settings } from "tabler-icons-react";
import { NotationSettings } from "./settings.modal";
import { NotImplementedAlert } from "../../../../app.module/app.components/not-implemented.alert";

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
        <Text size={'xs'} style={{
          position: 'absolute',
          zIndex: '100',
          right: '1em',
          bottom: '1em'
        }}>© Vladimir Shustov 2022, v.1.0.0, license: MIT</Text>
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