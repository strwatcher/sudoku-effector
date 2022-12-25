export type FixedArray<
  T,
  L extends number,
  R extends T[] = []
> = number extends L
  ? T[]
  : R['length'] extends L
  ? R
  : FixedArray<T, L, [T, ...R]>
