/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Bod from '../components/bod';
const BoardAndManagement = () => {
  return (
    <div>
      <div
        className="w-auto bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/about/meet_the_team-bg.jpg)',
        }}
      >
        <div className="container py-44 md:py-60">
          <div className="w-full backdrop-blur-sm lg:px-6 lg:backdrop-blur-none">
            <h1 className="mb-8 text-center text-4xl font-semibold text-secondary lg:text-5xl">
              Meet the Team
            </h1>
          </div>
        </div>
      </div>
      <Bod />
    </div>
  );
};

export default BoardAndManagement;
