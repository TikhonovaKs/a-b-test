import { useEffect, useState } from 'react';
import './App.css';
import Lead from './components/Lead';
import More from './components/More';
import Header from './components/Header';

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const randomizeVisitors = Math.random();

    if (randomizeVisitors > 0.5) {
      setVisitors(1);
    }
  }, []);

  const handleClick = () => {
    console.log({
      event: 'ctaClick',
      cta: 'button',
      variant: visitors === 0 ? 'Current version' : 'VariantA version',
    });
  };

  return (
    <div className="App">
      {visitors === 0 ? (
        <>
          <Header />
          <Lead />
          <More handleClick={handleClick} />
        </>
      ) : (
        <>
        <Header />
        <More handleClick={handleClick} />
        <Lead />
        </>
      )}
    </div>
  );
}

export default App;

