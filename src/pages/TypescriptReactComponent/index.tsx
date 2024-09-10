import React from 'react';

/**
 * react组件ts类型测试
 * @constructor
 */
const TypescriptReactComponent = () => {
  return (
    <div>
      test
      <ChildComponent status={'three'} address={'1'} />
    </div>
  );
};

export default TypescriptReactComponent;

type StatusOneChildComponent = {
  status?: true;
  name: string;
  age: never;
  address: never;
};

type StatusTwoChildComponent = {
  status: false;
  age: number;
  name: never;
  address: never;
};

type StatusThreeChildComponent = {
  status: 'three';
  address: string;
  name: never;
  age: never;
};

type ChildComponentProps =
  | StatusOneChildComponent
  | StatusTwoChildComponent
  | StatusThreeChildComponent;

const ChildComponent: React.FC<ChildComponentProps> = ({ status = true, name, age, address }) => {
  if (status === 'three') {
    console.log(age);
  }
  return (
    <div>
      {status}
      {name}
      {age}
      {address}
    </div>
  );
};
