import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  convertResultState, jsonIndentState,
  notationState, partitionPointerState, splitterState,
  targetNotationState, targetNotationTypesSelector,
  textEditorState
} from "../../../formatter.state/formatter.state";
import { Button, Group, SimpleGrid } from "@mantine/core";
import React, { useEffect, useMemo } from "react";
import { parse } from "node-html-parser";
import { convert } from "../../../formatter.services/formatter-tools.service";
import { RichTextEditor } from "@mantine/rte";

export const EditorPanel = () => {

  const [ text, setText ] = useRecoilState(textEditorState);
  const setConvertResult = useSetRecoilState(convertResultState);
  const [ targetNotation, setTargetNotation ] = useRecoilState(targetNotationState);
  const [ notation, setNotation ] = useRecoilState(notationState);
  const [ splitter, setSplitter ] = useRecoilState(splitterState);
  const [ partitionPointer, setPartitionPointer ] = useRecoilState(partitionPointerState);
  const [ jsonIndent, setJsonIndent ] = useRecoilState(jsonIndentState);
  const targetNotationTypes = useRecoilValue(targetNotationTypesSelector);

  const onClearButtonClick = () => setText('');

  const ControlPanel = () => {
    return (
      <Group>
        <Button onClick={onClearButtonClick}>
          Очистить
        </Button>
      </Group>
    )
  }

  useEffect(() => {
    const root = parse(text);
    const data = root.querySelectorAll('p').map(p => p.text);
    const convertedData = convert(data, notation, splitter, partitionPointer, jsonIndent);
    setConvertResult(convertedData);
  }, [ text ])

  const mentionsConfig = () => ({
    allowedChars: /^[ЁёА-я]*$/,
    mentionDenotationChars: [ '@' ],
    source: (searchTerm: any, renderList: any, mentionChar: any) => {
      const includesSearchTerm = targetNotationTypes.filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      renderList(includesSearchTerm);
    },
  })

  const mentions = useMemo(mentionsConfig, []);

  return (
    <SimpleGrid>
      <ControlPanel/>
      <RichTextEditor
        styles={{ toolbar: { display: 'none' } }}
        value={text}
        onChange={setText}
        mentions={mentions}
      />
    </SimpleGrid>
  )
}
