import React from 'react';

interface ObjectLiteral {
  [key: string]: any;
}

type Props = {
  isShown: boolean;
  handlers: ObjectLiteral;
}

const Body = ({
  isShown,
  handlers,
}: Props) => {
  return (
    <div className="body">
      <div className="top">
        <p><a href="tel:+27112681294">+27 11 268 1294</a></p>
        <p><a href="mailto:info@andpartner.co.za">info@andpartner.co.za</a></p>
      </div>
      <div className="bottom" {...handlers}>
        <div className="push-right">
          <img src={require('../assets/&Partner_Logo.svg')}/>
          <ul>
            <li>a product,</li>
            <li>services and</li>
            <li>revenue design</li>
            <li>consultancy.</li>
          </ul>
          <div
            className="more-details-overlay"
            style={{
              height: isShown ? '100%' : '0%',
              opacity: isShown ? 1 : 0,
            }}>
            <p>
              <a href="tel:+27112681294">+27 11 268 1294</a>
            </p>
            <p>
              <a href="mailto:info@andpartner.co.za">info@andpartner.co.za</a>
            </p>
            <address>
              <p>The Conservatory,</p>
              <p>2nd Floor,</p>
              <p>13 Baker Street,</p>
              <p>Rosebank, 2196</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
