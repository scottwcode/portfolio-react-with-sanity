import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-purple-600">
    {/* <header className="bg-red-600"> */}
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" 
          exact 
          activeClassName="text-white"
          // className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
          className="inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest">
            Scott
          </NavLink>
          <NavLink 
            to="/post" 
            // className="inline-fle items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            className="inline-fle items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-gray-800"
            // activeClassName="text-red-100 bg-red-700"
            activeClassName="text-purple-100 bg-purple-700"
            >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project" 
            // className="inline-fle items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            className="inline-fle items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-gray-800"
            // activeClassName="text-red-100 bg-red-700"
            activeClassName="text-purple-100 bg-purple-700"
            >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            // className="inline-fle items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            className="inline-fle items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-gray-800"
            // activeClassName="text-red-100 bg-red-700"
            activeClassName="text-purple-100 bg-purple-700"
            >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/scott-walters-720991111/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://codepen.io/your-work" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://github.com/scottwcode" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />

        </div>
      </div>
    </header>
  )
}