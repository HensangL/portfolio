import React from 'react';
import Card from '../component/Card';
import image from '../image/image.jpg'
function Services() {
  return (
    <div className="bg-[#212121] rounded-4xl px-6 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row text-white md:gap-[375px] gap-6 md:items-start md:ml-[148px]">
        <h1 className="text-3xl font-sans font-medium">My services</h1>
        <p className="md:mt-4 md:mr-20  text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minima mollitia atque reprehenderit !
        </p>
      </div>

      {/* Horizontal Line */}
      <hr className=" md:ml-[150px] md:mr-[150px] mt-4 border-gray-300" />

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center mt-20 items-center">
        <Card title="Web design" img={image} />
              <Card title="Web design" img={image} />
        <Card title="Web design" img={image} />

      </div>
    </div>
  );
}

export default Services;
