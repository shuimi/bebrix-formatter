import { Button, Grid, Select, Stack, Text } from "@mantine/core";
import { TagRecord } from "../tag-record.component";
import { Plus } from "tabler-icons-react";
import React from "react";

export const NotationSettings = () => {

  return (
    <Grid columns={1}>
      <Grid.Col span={1}>
        <Text my={'md'}>Целевая нотация</Text>
        <Select
          placeholder='JSON'
          data={[
            { value: 'json', label: 'JSON' },
          ]}
        />
        <Text my={'md'}>Исходная нотация</Text>
        <Stack justify='space-between' spacing='xs' mb={'xl'}>
          <TagRecord field={'field123456789'} tag={'tag1'}/>
          <TagRecord field={'field'} tag={'tag'}/>
          <TagRecord field={'field'} tag={'tag1345678'}/>
          <TagRecord field={'fieldrtyuiofghjkvvbn567890oknbftyuik'} tag={'jkmnhuikmtag123456789023456'}/>
        </Stack>
        <Button variant={'subtle'}>
          <Plus strokeWidth={2} color={'#e8e8e8'}/>
        </Button>
      </Grid.Col>
    </Grid>
  )
}