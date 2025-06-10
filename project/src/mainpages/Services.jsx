import React from 'react';
import Card from '../component/Card';
import image from '../image/image.jpg'
import image1 from '../image/profile-pic.png'
import grunchiez from '../Artist/Grunchiez.jpg';
import base2 from '../Artist/base2.png';
import sadaiba from '../Artist/Sadaiba release photo.jpg';
import untitledDesign from '../Artist/Copy of Untitled Design.jpg';
import a4Poster2 from '../Artist/A4 Poster 2.jpg';
import bannerMockup from '../Artist/02 Free S-Form Banner Stand Mockup.jpg';
import sushant from '../Artist/sushant kc.png';
import chalchitra from '../Artist/Chalchitra A4 poster.png';
import tickets from '../Artist/4 tickets.png';
import digitalInvitation from '../Artist/Digital Invitation.png';
import nepali from '../Event/Nepali 007.jpg';
import farmersMarket1 from '../Event/Farmers Market 004.jpg';
import birthday from '../Event/Birthday 004.jpg';
import farmersMarket2 from '../Event/Farmers Market 002.jpg';
import hereComesSun from '../Event/Here comes the sun.png';
import saveTheDate from '../Event/Save teh date.png';
import wonderland from '../Event/Wonderland Birthday.jpg';
import lanyard from '../Event/Lanyard.jpg';
import irlBoard from '../Event/IRL board.jpeg';
import physicalInvite from '../Event/physical invite.jpg';
import monogram1 from '../Logo/Monogram-01.png';
import ajayUsha from '../Logo/Ajay & Usha monogram.png';
import amberPooja from '../Logo/Amber & Pooja PNG.png';
import anmayStuti from '../Logo/Anmay & Stuti Monogram.png';
import cc from '../Logo/cc.jpg';
import omuyyv1 from '../Logo/OMUYYV1.jpg';
const logoDesignImages = [
  monogram1,
  ajayUsha,
  amberPooja,
  anmayStuti,
  cc,
  omuyyv1,
];

const eventDesignImages = [
  nepali,
  farmersMarket1,
  birthday,
  farmersMarket2,
  hereComesSun,
  saveTheDate,
  wonderland,
  lanyard,
  irlBoard,
  physicalInvite,
];




const artistPromoImages = [
  sushant,
  sadaiba,
  chalchitra,
  grunchiez,
  bannerMockup,
  untitledDesign,
  a4Poster2,
  base2,
  tickets,
  digitalInvitation,
];

  

function Services() {
  return (
    <div className="bg-[#212121] rounded-4xl px-6 py-10 mt-8">
      <section id="service">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row text-white md:gap-[375px] gap-6 md:items-start md:ml-[148px]">
        <h1 className="text-3xl font-sans font-medium">My portfolio</h1>
        <p className="md:mt-4 md:mr-20  text-base">
Bringing ideas to life through color, shape, and creativity — that's the power of a graphic designer.        </p>
      </div>

      {/* Horizontal Line */}
      <hr className=" md:ml-[150px] md:mr-[150px] mt-4 border-gray-300" />

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center mt-20 items-center">
        <Card title="Event-Designs" img={nepali} images={eventDesignImages} />
        <Card title="Promotional-Flyer" img={image} />
                <Card title="Logo design" img={monogram1} images={logoDesignImages}/>


        <Card title="Artist Promo Flyer" img={base2} images={artistPromoImages} />
        <Card title="Web design" img={image} />

      </div>
      </section>
    </div>
  );
}

export default Services;
