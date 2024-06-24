import React from 'react';

// Define the props type for Card
interface CardProps {
  logo: string;
  text: string;
  user: {
    avatar: string;
    name: string;
    role: string;
  };
}

const Card: React.FC<CardProps> = ({ logo, text, user }) => {
  const { avatar, name, role } = user;

  return (
    <div className="flex flex-col gap-6 p-6 w-[100%] h-[80%] bg-primary rounded-2xl text-white ">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <p className="text">{text}</p>
      <div className="user-container flex items-center gap-4 mt-4">
        <span className='avatar-container w-[64px] h-[64px] rounded-full overflow-hidden'>
          <img src={avatar} alt="User Avatar" className="avatar w-full h-full object-cover" />
        </span>
        <span className="user-info">
          <p className='name text-lg text-[#CBD6D8]'>{name}</p>
          <p className='role text-lg text-[#CBD6D8] font-semibold'>{role}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;