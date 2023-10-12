import React from 'react';
import Navbar from '../../react-bricks/bricks/layout/Navbar';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

interface TeamProps {
  teamMembers: TeamMember[];
}

const Team: React.FC = () => {
  // return (
  //   <div>
  //     <h1>Our Team</h1>
  //     {teamMembers.map((member) => (
  //       <div key={member.name}>
  //         <img src={member.imageUrl} alt={member.name} />
  //         <h2>{member.name}</h2>
  //         <h3>{member.title}</h3>
  //         <p>{member.bio}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div style={{width: '100%'}}>
      Team Page
    </div>
  )
};

export default Team;
