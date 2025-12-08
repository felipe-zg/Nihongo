export const updateArray = (arrSetter: React.Dispatch<React.SetStateAction<any[]>>, idx: number, value: string) =>
    arrSetter(prev => prev.map((v, i) => (i === idx ? value : v)));

export const addArrayItem = (arrSetter: React.Dispatch<React.SetStateAction<any[]>>, defaultValue = "") =>
    arrSetter(prev => [...prev, defaultValue]);

export const removeArrayItem = (arrSetter: React.Dispatch<React.SetStateAction<any[]>>, idx: number) =>
    arrSetter(prev => prev.filter((_, i) => i !== idx));