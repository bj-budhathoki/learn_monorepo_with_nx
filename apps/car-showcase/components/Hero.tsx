'use client'
import React from 'react'
import Image from 'next/image'
import CSButton from './CSButton'

const Hero = () => {
  const handleScroll = () => null
  return (
    <div className="overflow-hidden hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CSButton
          title="Explore Cars"
          btnStyles="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/assets/hero.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
