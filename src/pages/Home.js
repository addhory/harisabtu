import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import EmailInput from '../components/EmailInput';

const Home = () => {
  // const [email, setEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState(false);
  // const [users, setUsers] = useState([]);

  // const emailRef = useRef();

  // const emailInputHandler = (event) => {
  //   if (event.target.value.includes('@')) {
  //     setEmailIsValid(true);
  //   } else {
  //     setEmailIsValid(false);
  //   }
  //   setEmail(event.target.value);
  // };

  // const submitHandler = useCallback(() => {
  //   if (!emailRef.current.value.includes('@')) {
  //     emailRef.current.focus();
  //   }
  // }, []);

  // let content;

  // if (emailIsValid) {
  //   content = <p>Valid</p>;
  // }

  // const fetchUsers = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const dataJson = await response.json();
  //   setUsers(dataJson);
  // };

  // useEffect(() => {
  //   // fetching data
  //   fetchUsers();
  // }, []);
  const [counter, setCounter] = useState(0);

  const tambahHandler = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const minusHandler = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <PageTitle />
      </header>
      <main>
        <div>{counter}</div>
        <MinusButton minusHandler={minusHandler} />
        <PlusButton tambahHandler={tambahHandler} />
      </main>
    </div>
  );
};

export default Home;

const MinusButton = memo((props) => {
  console.log('minusButton re-evaluated');
  return <button onClick={props.minusHandler}>Minus Button</button>;
});

const PlusButton = memo((props) => {
  console.log('plusButton re-evaluated');

  return <button onClick={props.tambahHandler}>Plus Button</button>;
});

const PageTitle = () => {
  console.log('PageTitle re-evaluated');

  return <h1>Hello World</h1>;
};
