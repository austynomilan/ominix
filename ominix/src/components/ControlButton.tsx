import { useState } from 'react';

function ControlButton() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    'Overview', 
    'Goals & KPIs', 
    'Segments', 
    'Plays', 
    'Campaigns', 
    'Assets'
  ];

  return (
    <div className="w-[20%] p-6">
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => setActiveIndex(index)}>
            <span 
              className={`flex gap-2 rounded h-[48px] ${activeIndex === index ? 'bg-[#9797FB]' : ''}`}
            >
              <p 
                className={`border-l-8 my-1 pl-4 text-2xl ${activeIndex === index ? 'border-[#1D1D62]' : 'border-white'}`}
              >
                {item}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ControlButton;