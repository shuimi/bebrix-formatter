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

export const EditorPanel = (props: { controlPanel?: boolean }) => {

  const [ text, setText ] = useRecoilState(textEditorState);
  const setConvertResult = useSetRecoilState(convertResultState);
  const [ targetNotation, setTargetNotation ] = useRecoilState(targetNotationState);
  const [ notation, setNotation ] = useRecoilState(notationState);
  const [ splitter, setSplitter ] = useRecoilState(splitterState);
  const [ partitionPointer, setPartitionPointer ] = useRecoilState(partitionPointerState);
  const [ jsonIndent, setJsonIndent ] = useRecoilState(jsonIndentState);
  const targetNotationTypes = useRecoilValue(targetNotationTypesSelector);

  const onClearButtonClick = () => {
    setText('');
  };

  const ControlPanel = () => {
    return (
      <Group>
        <Button onClick={onClearButtonClick} color={'gray'}>
          Очистить
        </Button>
      </Group>
    )
  }

  useEffect(() => {
    const savedText = text;
    setText(() => '\n');
    setText(() => savedText);
  }, [ notation ])

  useEffect(() => {
    const root = parse(text);
    const data = root.querySelectorAll('p').map(p => p.text);
    const convertedData = convert(data, notation, splitter, partitionPointer, jsonIndent);
    setConvertResult(convertedData);
  }, [ text, notation ])

  const mentionsMiddleware = (searchTerm: any, renderList: any, mentionChar: any) => {
    const includesSearchTerm = targetNotationTypes.filter((item) =>
      item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderList(includesSearchTerm);
  }

  const mentionsConfig = () => ({
    allowedChars: /^[ЁёА-я]*$/,
    mentionDenotationChars: [ '@' ],
    source: mentionsMiddleware,
  });

  const mentions = useMemo(mentionsConfig, [notation]);

  const modules = useMemo(
    () => ({
      history: { delay: 400, userOnly: true },
    }),
    []
  );

  return (
    <SimpleGrid>
      {
        props.controlPanel && <ControlPanel/>
      }
      <RichTextEditor
        styles={{ toolbar: { display: 'none' } }}
        value={text}
        onChange={setText}
        mentions={mentions}
        modules={modules}
      />
    </SimpleGrid>
  )
}
