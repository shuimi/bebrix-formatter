export const merge = (data: string[], partitionPointers: Record<string, string>, splitter: string) => {
  const mergedData: string[] = [];

  data.forEach(record => {

    let isTaggedToken = false;

    for (let tagName of Object.values(partitionPointers)) {
      if (record.includes(tagName)) {
        mergedData.push(record);
        isTaggedToken = true;
        break;
      }
    }
    if (!isTaggedToken) {
      const last = mergedData.pop();
      mergedData.push(last + splitter + record);
    }
  });

  return mergedData;
}

export const partition = (data: string[], partitionPointer: string) => {
  const partitions: string[][] = [];
  let currentPartition: string[] = [];

  data.forEach(record => {
    if (record.includes(partitionPointer)) {
      partitions.push(currentPartition);
      currentPartition = [];
      currentPartition.push(record);
    } else {
      currentPartition.push(record);
    }
  });
  partitions.push(currentPartition);

  return partitions.filter(partition => partition.length !== 0);
}

export const build = (data: string[], notation: Record<string, string>) => {
  const dataObject: Record<string, string> = {};

  data.forEach(record => {
    for (let [ propertyName, tagName ] of Object.entries(notation)) {
      if (record.includes(tagName)) {
        const cleanRecord = record.replace(tagName, '').trim();
        dataObject[propertyName] = cleanRecord;
        break;
      }
    }
  });

  return dataObject;
}

export const isolate = (data: string[]) => {
  return data.filter(record => !!record)
}

export const mapBuild = (data: string[][], notation: Record<string, string>) => {
  return data.map(record => build(record, notation));
}

export const prepareJson = (dataObjects: Object[], space: number) => {
  return JSON.stringify(dataObjects, null, space);
}

export const convert = (
  data: string[],
  notation: Record<string, string>,
  splitter: string,
  partitionPointer: string,
  jsonIndent: number
) => prepareJson(
  mapBuild(
    partition(
      merge(
        isolate(data),
        notation,
        splitter
      ),
      partitionPointer
    ),
    notation
  ),
  jsonIndent
)