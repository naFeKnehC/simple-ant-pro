type Params = {
  a?: string;
  b?: number;
  c?: boolean;
};

type Output = {
  a?: string;
  b?: number;
  x?: boolean;
  y?: string[];
};

const state: Params | Output = {};

const setState = (params: Params | Output) => {};
