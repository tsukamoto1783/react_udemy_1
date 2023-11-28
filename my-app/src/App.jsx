import { useEffect, useState } from 'react';
import { ColorfulMessages } from './components/ColorfulMessages';

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);

  const onClickCountUp = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };


  // // ①第二引数に何も指定しないと、再レンダリングの度に実行される
  // useEffect(() => {
  //   // ...処理
  //   console.log('useEffect!');
  // });

  // // ②第二引数にから配列を指定すると、初回レンダリング時のみ実行される
  // useEffect(() => {
  //   // ...処理
  //   console.log('useEffect!');
  // }, []);

  // // ③第二引数に変数を指定すると、「初回レンダリング時+指定した変数に変更があった時」に実行される
  // useEffect(() => {
  //   // ...処理
  //   console.log('useEffect!');
  // }, [num]);

  useEffect(() => {
    // ...処理
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);


  return (
    <>
      <h1>Hello, world!</h1>
      <ColorfulMessages color='blue'>Hello</ColorfulMessages>
      <ColorfulMessages color='green'>World</ColorfulMessages>
      <button onClick={onClickCountUp}>Click</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^_^)</p>}
    </>
  );
}
