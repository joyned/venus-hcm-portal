function enumToJsonArray(enumObj: any): { name: string; value: string }[] {
  const jsonArray: { name: string; value: string }[] = [];
  Object.keys(enumObj).forEach((key) => {
    if (typeof enumObj[key] === 'string') {
      jsonArray.push({
        name: key,
        value: enumObj[key],
      });
    }
  });

  return jsonArray;
}

export { enumToJsonArray };
