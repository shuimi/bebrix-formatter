import { ActionIcon, Group, Input, Paper } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import React from "react";

export const TagRecord = (props: {
  tag: string,
  field: string,
  onTagChange?: () => void,
  onFieldChange?: () => void,
  onDelete?: () => void,
}) => {
  return (
    <Group>
      <Paper shadow='sm' radius='md' p='sm' withBorder style={{
        background: '#212125',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Input placeholder='Тег' value={props.tag} onChange={props.onTagChange} style={{
          padding: '0.4em',
        }}/>
        <Input placeholder='Поле' value={props.field} onChange={props.onFieldChange} style={{
          padding: '0.4em',
          paddingLeft: 0,
        }}/>
        <ActionIcon variant='transparent' onClick={props.onDelete} style={{
          paddingLeft: '0.4em',
          marginRight: '0.8em',
        }}>
          <Trash size={20} strokeWidth={2} color={'#e8e8e8'}/>
        </ActionIcon>
      </Paper>
    </Group>
  )
}