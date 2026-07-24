
export type RemoveAllSpaces<T extends string> = T extends `${infer Left} ${infer Right}` ? RemoveAllSpaces<`${Left}${Right}`> : T;
export const removeAllSpaces = (str: string) => str.replace(/\s+/g, '') as RemoveAllSpaces<typeof str>;
