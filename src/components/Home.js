import React from 'react';
// import image from "../beach-01.jpg"
import image from "../parasailing8.png"

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="beach background" 
        className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          {/* <h1 className="text-6xl text-orange-500 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Scott!</h1> */}
          <h1 className="text-sm text-white font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Scott!</h1>
 
        </section>
    </main>
    )
}