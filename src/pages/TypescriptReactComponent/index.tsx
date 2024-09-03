import React from 'react';

/**
 * react组件ts类型测试
 * @constructor
 */
const TypescriptReactComponent = () => {
  return (
    <div>
      test
      <ChildComponent name={'1'} />
    </div>
  );
};

export default TypescriptReactComponent;

type   StatusOneChildComponent = {
  status?: true;
  name: string;
};

type      StatusTwoChildComponent = {
  status: false;
  age: number;
};

type      StatusThreeChildComponent = {
  status: 'three';
  address: string;
};

type    ChildComponentProps =
  | StatusOneChildComponent
  | StatusTwoChildComponent
  | StatusThreeChildComponent;

const ChildComponent: React.FC<ChildComponentProps> = ({ status = true, name, age, address }) => {
  return <div></div>;
};
