'use client'
import React from 'react'
import Image from "next/image";

function _Header() {
  return (
    <div className='flex flex-col lg:flex-row w-full'>
      <div className='h-80 relative'>
        <Image src={"https://drive.google.com/uc?export=view&id=1LLvV_x0finqReaUAm5L204iuYa2vZeQ8"} alt={"Imagotipo(logo) de Mueblecin"} fill={true}/>
      </div>
      <div>
        <h1>Mueblecin</h1>
        <p>Carpintería estándar y a medida.</p>
      </div>
    </div>
  )
}

export default _Header
