import React from 'react';
import '../../style/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.png';
import search from '../../images/Search.png';

export default function Navbar() {
  const mobile_icon = document.getElementById('mobile-icon');
  const mobile_menu = document.getElementById('mobile-menu');
  const hamburger_icon = document.querySelector("#mobile-icon i");
  
  function openCloseMenu() {
    mobile_menu.classList.toggle('block');
    mobile_menu.classList.toggle('active');
  }
  
  function changeIcon(icon) {
    icon.classList.toggle("fa-xmark");
  }
  
  mobile_icon?.addEventListener('click', openCloseMenu);
  
  return (
    <nav class="relative px-2 py-8">
      
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <img className='imagelogo' src={logo} alt="Images" />
        <span className='logoname'>JUICEDAILAY</span>
      </div>
      

        <ul class="hidden md:flex space-x-12">
          <li><a href="#">BROWSE</a></li>
          <li><a href="#">TRENDING</a></li>
          
          <li><a href="#">CONTRIBUTOR</a></li>
          <li><a href="#">COMMUNITY</a></li>
        </ul>

        <a href="#" class="bg-red-400 px-5 py-12  hover:bg-red-500 text-white hidden md:flex" role="button"><img className='imagelogo' src={search} alt="Images" /></a>
      
      <button id="mobile-icon" class="md:hidden">
        <i onclick="changeIcon(this)" class="fa-solid fa-bars"></i>
        Men
      </button>
      
      </div>
    
    <div class="md:hidden flex justify-center mt-3 w-full">
      <div id="mobile-menu" class="mobile-menu absolute top-23 w-full"> 
        <ul class="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
          <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="https://google.com" class="block pl-7">Home</a></li>
          <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" class="block pl-7">News</a></li>
          <li class="border-b-2 border-white hover:bg-red-400 hover:text-white">
            <a href="#" class="block pl-11">Services <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i></a> 
            
            <ul class="bg-white text-gray-800 w-full">
              <li class="text-sm leading-8 font-normal hover:bg-slate-200"><a class="block pl-16" href="#">Webdesign</a></li>
              <li class="text-sm leading-8 font-normal hover:bg-slate-200"><a class="block pl-16" href="#">Digital marketing</a></li>
              <li class="text-sm leading-8 font-normal hover:bg-slate-200"><a class="block pl-16" href="#">SEO</a></li>
              <li class="text-sm leading-8 font-normal hover:bg-slate-200"><a class="block pl-16" href="#">Ad campaigns</a></li>
              <li class="text-sm leading-8 font-normal hover:bg-slate-200"><a class="block pl-16" href="#">UX Design</a></li>
            </ul>
          </li>
          <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" class="block pl-7">About</a></li>
          <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" class="block pl-7">Contact</a></li>
        </ul>
        </div>
    </div>

  </nav>

  )
}
