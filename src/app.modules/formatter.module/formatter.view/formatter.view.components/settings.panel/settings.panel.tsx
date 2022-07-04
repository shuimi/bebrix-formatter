import React, { useState } from "react";
import { Button, Card, Modal } from "@mantine/core";
import { Settings } from "tabler-icons-react";
import { NotationSettings } from "./settings.modal";

export const SettingsPanel = () => {
  const [ opened, setOpened ] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Настройки нотации'
      >
        <NotationSettings/>
      </Modal>
      <Card my={'md'}>
        <Button
          style={{
            background: '#2f2f36',
            fontWeight: 'normal',
          }}
          leftIcon={
            <Settings
              strokeWidth={2}
              color={'#FFFFFF'}
            />
          }
          onClick={() => setOpened(true)}
        >
          Настройки нотации
        </Button>
      </Card>
    </>
  )
}