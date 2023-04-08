import { React, Component, useState } from "react";

function Home() {
  const links = [
    {
      id: 1,
      head: "Tiktok Account",
      link: "https://www.tiktok.com/@mallexibra",
      paragraf: "Content Programming on TikTok",
    },
    {
      id: 2,
      head: "Youtube Channel",
      link: "https://www.youtube.com/@mallexibra/",
      paragraf: "Content Programming on Youtube",
    },
    {
      id: 3,
      head: "Group Telegram",
      link: "https://t.me/Mallexibra",
      paragraf: "I have a Group Telegram for Sharing Coding and Technology",
    },
  ];
  return (
    <div className='link-app font-poppins'>
      {links.map((link) => {
        return (
          <a
            className='flex justify-center flex-col items-center p-2 bg-violet-600 rounded-md m-5 hover:shadow-md transition-all hover:duration-300 ease-in-out hover:shadow-violet-500'
            key={link.id}
            href={link.link}
          >
            <h3 className='text-base font-extrabold'>{link.head}</h3>
            <p className='text-xs text-center'>{link.paragraf}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Home;
