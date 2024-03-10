"use client"
import React, { ReactNode } from 'react';
import FooterSection from '../FooterSection';
import HeaderSection from '../HeaderSection';
import { useMain } from '@/app/hooks/main';
import { BlockProps } from '@/app/interfaces';

export default function Block({children}: BlockProps) {
  return (
      <main className="flex min-h-screen flex-col justify-between">
        <HeaderSection />
          <div className="flex-grow">{children}</div>
        <FooterSection />
      </main>
  );
}

