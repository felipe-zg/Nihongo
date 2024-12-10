type AnyFieldPath = (string | number | symbol)[];

export function setStateByFilePath<T extends AnyFieldPath>(
  fieldPath: T,
  value: any,
  setState: (update: (prev: any) => any) => void
) {
  setState((prev: any) => {
    const updatedState = { ...prev };
    let field: any = updatedState;

    fieldPath.slice(0, -1).forEach((key) => {
      field = field[key];
    });

    field[fieldPath[fieldPath.length - 1]] = value;
    return updatedState;
  });
}


export function checkEqualityByFilePath<T extends AnyFieldPath>(
  fieldPath: T,
  object1: Record<string, any>,
  object2: Record<string, any>
): boolean {
  const getValueByPath = (obj: Record<string, any>, path: T) => {
    return path.reduce<any>((acc, key) => acc[key], obj);
  };

  const value1 = getValueByPath(object1, fieldPath);
  const value2 = getValueByPath(object2, fieldPath);

  return value1 === value2;
}
