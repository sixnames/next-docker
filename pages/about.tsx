import React from 'react';
import Link from 'next/link';

interface AboutInterface {

}

const About: React.FC = () => {
  return (
    <div>
      Alias consequatur dignissimos earum eum ex facere incidunt, iure, minima minus nostrum perferendis porro quasi quisquam repellendus tenetur! Assumenda ipsa quasi totam.
      <div>
        <img src="/images/about.jpeg" alt=""/>
      </div>
      <div><Link href={'/'}>Home</Link></div>
    </div>
  );
};

export default About;
