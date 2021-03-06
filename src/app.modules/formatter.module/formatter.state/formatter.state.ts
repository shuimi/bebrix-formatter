import { atom, selector } from "recoil";
import { AvailableNotations } from "../formatter.contracts/formatter.contract";

const localStorageEffect = (key: any) => ({setSelf, onSet}: {setSelf: any, onSet: any}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: any, _: any, isReset: any) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const convertResultState = atom<string>({
  key: 'CONVERT_RESULT',
  default: '',
});

export const textEditorState = atom<string>({
  key: 'TEXT_EDITOR',
  default: '',
  effects: [
    localStorageEffect('TEXT_EDITOR'),
  ],
});

export const targetNotationState = atom<AvailableNotations>({
  key: 'TARGET_NOTATION',
  default: AvailableNotations.JSON,
  effects: [
    localStorageEffect('TARGET_NOTATION'),
  ],
});

export const notationState = atom<Record<string, string>>({
  key: 'NOTATION',
  default: {
    text: 'Текст',
    name: 'Имя',
    positives: 'Плюсы',
    negatives: 'Минусы',
    summary: 'Характер',
  },
  effects: [
    localStorageEffect('NOTATION'),
  ],
});

export const targetNotationTypesSelector = selector({
  key: 'TARGET_NOTATION_SELECTOR',
  get: ({ get }) => {
    const notation = get(notationState);
    const targetTypes: {id: number, value: string}[] = []

    let iteration: number = 1;

    for (let [, tagName ] of Object.entries(notation)) {
      targetTypes.push({id: iteration, value: tagName })
      iteration++;
    }

    return targetTypes;
  }
});

export const splitterState = atom<string>({
  key: 'SPLITTER',
  default: ' ',
});

export const partitionPointerState = atom<string>({
  key: 'PARTITION_POINTER',
  default: 'Текст',
});

export const jsonIndentState = atom<number>({
  key: 'JSON_INDENT',
  default: 4,
});
