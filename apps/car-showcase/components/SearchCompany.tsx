'use client';
import React from 'react';
import { SearchCompanyProps } from '../types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
const SearchCompany: React.FC<SearchCompanyProps> = ({
  company,
  setCompany,
}) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={'absolute top-[14px]'}>
            <Image
              src={'/assets/car-logo.svg'}
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCompany;
