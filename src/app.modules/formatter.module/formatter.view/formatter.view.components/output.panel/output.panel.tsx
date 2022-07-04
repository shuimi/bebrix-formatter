import { useRecoilState } from "recoil";
import { convertResultState } from "../../../formatter.state/formatter.state";
import { Button, Group, JsonInput, SimpleGrid } from "@mantine/core";
import React from "react";

export const OutputPanel = () => {

  const [ convertResult ] = useRecoilState(convertResultState);

  const ControlPanel = () => {
    return (
      <Group>
        <Button>
          Копировать
        </Button>
      </Group>
    )
  }

  return (
    <SimpleGrid>
      <ControlPanel/>
      <JsonInput
        minRows={28}
        placeholder={`{}`}
        value={convertResult}
        validationError='Неверный формат JSON'
        formatOnBlur
      />
    </SimpleGrid>
  )
}