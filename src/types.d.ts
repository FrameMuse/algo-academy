export type URLType = `${"http" | "https"}://${string}`


export type URLData = `data:${string};${string}`
export type URLDataBase64 = `data:${string};base64,${string}`


export type OrderingType<U extends string> = U | `-${U}`

// https://stackoverflow.com/questions/50158272/what-is-the-type-of-an-enum-in-typescript
export type EnumType<E> = Record<keyof E, number | string> & { [k: number]: string }
export type ExtractArrayType<T> = T extends readonly (infer S)[] ? S : never

export type ValuesOf<T> = T[keyof T]
