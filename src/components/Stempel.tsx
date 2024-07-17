import './Stempel.css';
import React, { ReactNode } from 'react';

interface StempelProps {
  children?: ReactNode;
}

const Stempel: React.FC<StempelProps> = ({ children }) => (
  <div id="center">
    <div id="right_column">
      <div className="right_column_front">
        <div className="right_content">
          <img src="./images/portrait.jpg" alt="Сергей Мавроди" />
          <div className="rc_text">
            Мир плох?<br />
            Что ж, сделай его лучше!
          </div>
          <a href="https://sergey-mavrodi.com/contacts" target="_blank" rel="noopener noreferrer">
            <button data-type="vier">КОНТАКТЫ</button>
          </a>
        </div>
      </div>
    </div>

    <div id="left_column">
      <div className="left_column">
        <div className="left_column_top">
          <div className="left_column_bot_back">
            <div className="left_column_bot_front"></div>
          </div>
        </div>

        <div className="left_content">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Stempel;
