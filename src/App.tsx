import React, {useState} from 'react';
import {useSwipeable} from 'react-swipeable';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handlers = useSwipeable({
    onSwipedDown: (_) => setIsShown(false),
    onSwipedUp: (_) => setIsShown(true),
  });

  const onToggle = () => setIsShown(!isShown);
  return (
    <div className="main">
      <Header />
      <Body
        isShown={isShown}
        handlers={handlers}
      />
      <Footer
        isShown={isShown}
        onToggle={onToggle}
      />
    </div>
  );
};

export default App;
