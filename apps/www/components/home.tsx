"use client";
import {  useState } from 'react';
import {  ArrowUpRight, Menu, X } from 'lucide-react';


export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <div className="min-h-screen bg-white text-black">
      
  <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-24">
    <div className="text-2xl tracking-tight">
      Missing Studio
    </div>
    
    <div className="hidden md:flex space-x-12  text-sm">
      <a href="mailto:praveen.yadav@missing.studio" className="hover:opacity-60 transition-opacity">Contact</a>
    </div>
    
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(true)} className="p-1">
        <Menu size={24} strokeWidth={1.5} />
      </button>
    </div>
  </nav>
  
  {/* Mobile Menu Overlay */}
  {isMenuOpen && (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
      <div className="flex justify-between items-center">
        <div className=" text-2xl tracking-tight">
          Missing Studio
        </div>
        <button onClick={() => setIsMenuOpen(false)} className="p-1">
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex flex-col space-y-8 mt-24  text-lg">
        <a href="mailto:praveen.yadav@missing.studio" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
    </div>
  )}
  
  {/* Hero Section */}
  <section className="px-6 pt-20 pb-32 md:px-12 lg:px-24 md:pt-32 md:pb-48">
    <div className="max-w-4xl">
      <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-10">
        In-house factory for building exceptional AI products
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12">
        We create high-quality, slick AI products from India to transform how people work and create.
      </p>
    </div>
  </section>
  
  
  
  {/* Current Projects Section */}
  <section className="px-6 py-24 md:px-12 lg:px-24 bg-gray-50">
    <h2 className=" text-3xl md:text-4xl mb-24 max-w-xl">
      Our current projects
    </h2>
    
    {/* Project 1 */}
    <div className="mb-32 flex flex-col md:flex-row">
      
      <div className="md:w-1/2">
        <h3 className=" text-2xl md:text-3xl mb-6">Telipot</h3>
        <p className=" text-gray-700 mb-6">
          A general AI agent that turns your thoughts into actions, delivering tangible results across a broad range of tasks.
        </p>
        <a 
          href="https://github.com/missingstudio/telipot" 
          target='_blank'
          className="inline-flex items-center  text-sm hover:underline" rel="noreferrer"
        >
          Learn more
          <ArrowUpRight size={16} className="ml-2" strokeWidth={1.5} />
        </a>
      </div>
    </div>
    
    {/* Project 2 */}
    <div className="flex flex-col md:flex-row">
      
      <div className="md:w-1/2">
        <h3 className=" text-2xl md:text-3xl mb-6">Inklate</h3>
        <p className=" text-gray-700 mb-6">
          An Infinite AI canvas - Transform your creative vision into scalable workflows.
        </p>
        <a 
          href="https://github.com/missingstudio/Inklate" 
          target='_blank'
          className="inline-flex items-center  text-sm hover:underline" rel="noreferrer"
        >
          Learn more
          <ArrowUpRight size={16} className="ml-2" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  </section>
  
  {/* Footer */}
  <footer className="px-6 py-24 md:px-12 lg:px-24">
    <div className=" text-2xl tracking-tight mb-16">
      Missing Studio
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h4 className=" text-sm uppercase tracking-wider mb-6">Location</h4>
        <p className=" text-gray-700">India</p>
      </div>
      <div>
        <h4 className=" text-sm uppercase tracking-wider mb-6">Social</h4>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/company/96342656" target='_blank' className="hover:opacity-60 transition-opacity" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://x.com/_missingstudio" target='_blank' className="hover:opacity-60 transition-opacity" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
         
        </div>
      </div>
    </div>
    <div className="mt-24 pt-6 border-t border-gray-200">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Missing Studio. All rights reserved.
      </p>
    </div>
  </footer>
</div>
}

export default Home;
