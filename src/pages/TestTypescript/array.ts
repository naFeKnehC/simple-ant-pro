// type Names = (string | number)[];
// type Name = Names[number];

// const arr = [0, 1] as const;

type NamedNums = [string, ...number[]];

const a: NamedNums = ['A', 1, 2];
const b: NamedNums = ['B', 1, 2, 3];
