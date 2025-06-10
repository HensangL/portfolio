import React from 'react';
import Card from '../component/Card';
import image from '../image/image.jpg'
import image1 from '../image/profile-pic.png'
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
        <Card title="Event-Designs" img={image} />
<Card 
img={image}
  img2={image}
  img1={image1}
  title="Project Name" 
  onClick={() => {
    console.log("Clicked! Show modal or navigate here.");
    // setModalOpen(true);
    // or navigate(`/project/1`);
  }}
/>
        <Card title="Promotional-Flyer" img={image} />
        <Card title="Artist Promo Dlyer" img={image} />
        <Card title="Web design" img={image} />

      </div>
      </section>
    </div>
  );
}

export default Services;
