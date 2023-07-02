/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
interface CarCardProps {
  car: any
}

const CarCard = ({ car }: CarCardProps) => {
  const { make, model } = car

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
    </div>
  )
}

export default CarCard
