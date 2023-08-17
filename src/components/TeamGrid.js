import React from 'react';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';
import avatar4 from '../assets/images/avatar4.png';
import avatar5 from '../assets/images/avatar5.png';

const team = [
  {
    name: 'MIGUEL MUÑOZ',
    role: 'MANAGING PARTNER',
    avatar: avatar1,
    nametag: 'team-goventuresmiguel-munoz',
  },
  {
    name: 'FREDDY ARÉVALO',
    role: 'GENERAL PARTNER',
    avatar: avatar3,
    nametag: 'team-goventuresfredy-arevalo',
  },
  {
    name: 'RENÉ MUÑOZ',
    role: 'GENERAL PARTNER',
    avatar: avatar4,
    nametag: 'team-goventuresrene-munoz',
  },
  {
    name: 'MAURICIO CEVALLOS',
    role: 'PRINCIPAL',
    avatar: avatar2,
    nametag: 'team-goventuresmauricio-cevallos',
  },
  {
    name: 'ROBERTO BERMEJO',
    role: 'LEGAL DIRECTOR',
    avatar: avatar5,
    nametag: 'team-goventuresroberto-bermejo',
  },
];
const TeamGrid = () => (
  <div className="team-grid md:px-5 lg:px-30 xl:px-40 ">
    {team.map((el) => (
      <div className="team-item items-center flex flex-col mr-1 ml-2 mt-4 md:mr-12 md:ml-12 ">
        <img
          className="w-24 md:w-32 lg:w-52"
          src={el.avatar}
          alt={el.nametag}
        />
        <div className="mt-4 ">
          <p className="little-text text-center text-blue-500	font-bold">
            {el.name}
          </p>
          <p className="little-text-xs text-center">{el.role}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TeamGrid;
