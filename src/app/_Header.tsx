'use client'
import React, {useEffect} from 'react'
import Image from "next/image";

function _Header() {
  
  return (
    <div className='w-full flex flex-col sm:flex-row justify-around'>
      <div className='w-80 h-80 relative' >
      <Image
        src={"https://drive.google.com/uc?export=view&id=1LLvV_x0finqReaUAm5L204iuYa2vZeQ8"}
        alt="Imagotipo(logo) de Mueblecin"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Mueblecin</h1>
        <p>Carpintería estándar y a medida.</p>
      </div>
    </div>
  )
}

export default _Header
