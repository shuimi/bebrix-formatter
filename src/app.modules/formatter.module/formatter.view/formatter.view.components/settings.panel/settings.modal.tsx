import { Button, Center, Grid, Select, Stack, Text } from "@mantine/core";
import { TagRecord } from "../tag-record.component";
import { Plus } from "tabler-icons-react";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { notationState, targetNotationState } from "../../../formatter.state/formatter.state";
import { AvailableNotations } from "../../../formatter.contracts/formatter.contract";
import { v4 as uuidv4 } from 'uuid';

export const NotationSettings = () => {

  const [ targetNotation, setTargetNotation ] = useRecoilState(targetNotationState);
  const [ notation, setNotation ] = useRecoilState(notationState);

  const onNotationSelect = (notation: AvailableNotations) => setTargetNotation(notation);

  const onTagDelete = (field: string) => () => setNotation(
    Object
      .entries(notation)
      .filter(([ key, ]) => key !== field)
      .reduce(
        (notation: Record<string, string>, [ key, value ]) => {
          notation[key] = value;
          return notation;
        }, {}
      )
  )

  const onTagChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const tag = event.target.value;
    setNotation(
      Object
        .entries(notation)
        .map(([ key, value ]) => {
          if (key === field) {
            return [ key, tag ];
          }
          return [ key, value ];
        })
        .reduce(
          (notation: Record<string, string>, [ key, value ]) => {
            notation[key] = value;
            return notation;
          }, {}
        )
    )
  }

  const onFieldChange = (previousField: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.value;
    setNotation(
      Object
        .entries(notation)
        .map(([ key, value ]) => {
          if (key === previousField) {
            return [ field, value ];
          }
          return [ key, value ];
        })
        .reduce(
          (notation: Record<string, string>, [ key, value ]) => {
            notation[key] = value;
            return notation;
          }, {}
        )
    )
  }

  const onRecordAdd = () => {
    const uuid = uuidv4();
    setNotation({
      ...notation,
      [uuid]: '',
    });
  }

  const EmptyListMessage = <Center><Text size={'xs'}>Ничего нет</Text></Center>;

  const RecordsList = Object
    .entries(notation)
    .map(([ field, tag ]) =>
      <TagRecord
        field={field}
        tag={tag}
        onDelete={onTagDelete(field)}
        onTagChange={onTagChange(field)}
        onFieldChange={onFieldChange(field)}
      />
  );

  const ListToRender = Object.entries(notation).length === 0
    ? EmptyListMessage
    : RecordsList;

  return (
    <Grid columns={1}>
      <Grid.Col span={1}>
        <Text my={'md'}>Целевая нотация</Text>
        <Select
          placeholder='JSON'
          data={[ { value: AvailableNotations.JSON, label: AvailableNotations.JSON } ]}
          value={targetNotation}
          onChange={onNotationSelect}
        />
        <Text my={'md'}>Исходная нотация</Text>
        <Stack justify='space-between' spacing='xs' mb={'xl'}>
          {ListToRender}
        </Stack>
        <Button variant={'default'} style={{ width: '100%' }} onClick={onRecordAdd}>
          <Plus strokeWidth={2} color={'#e8e8e8'}/>
        </Button>
      </Grid.Col>
    </Grid>
  )
}