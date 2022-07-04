import { useRecoilState } from "recoil";
import { convertResultState } from "../../../formatter.state/formatter.state";
import { Button, Group, SimpleGrid } from "@mantine/core";
import React, { useDeferredValue } from "react";
import { Prism } from "@mantine/prism";

export const OutputPanel = (props: { controlPanel?: boolean }) => {

  const [ convertResult ] = useRecoilState(convertResultState);
  const deferredConvertResult = useDeferredValue(convertResult);

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
      {
        props.controlPanel && <ControlPanel/>
      }
      <Prism
        language={'json'}
        copyLabel={'Копировать'}
        copiedLabel={'Скопировано'}
        withLineNumbers
        trim
      >
        {deferredConvertResult}
      </Prism>
    </SimpleGrid>
  )
}