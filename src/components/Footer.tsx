import React from 'react';

type Props = {
  isShown: boolean;
  onToggle: () => void;
};
const Footer = ({
  isShown,
  onToggle,
}: Props) => {
  const arrowClass = isShown ? 'down' : 'up';
  return (
    <footer>
      <div className="left-first">
        <address>
          <p>The Conservatory, 2nd Floor, 13 Baker Street,</p>
          <p>Rosebank, 2196</p>
        </address>
      </div>
      <span className="pulse">
        <span className={`arrow ${arrowClass}`} onClick={onToggle}/>
      </span>
      <div className="right-first">
        Part of the <a href="https://www.brandhalo.co.za/" target="_blank" rel="noopener noreferrer"/> group.
      </div>
    </footer>
  );
};

export default Footer;
