'use client'
import { useEffect, useState } from 'react';
import _Producto from './_Producto';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

const Products = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const csv = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSe9wtG89XGgp-uxHymZxFTpEC8vbYPvnGb11wOW4InmeAweF_B4PkVgJ_g82GO2zP5Wf6RRL8LSpG_/pub?output=tsv")
        .then((res) => res.text());

      const productos: Producto[] = csv
        .split('\n')
        .slice(1)
        .map((producto) => {
          const [id, nombre, descripcion, precio, stock, imagen] = producto.split('\t');
          return {
            id: Number(id),
            nombre,
            descripcion,
            precio: Number(precio),
            stock: Number(stock),
            imagen,
          };
        });

      setProductos(productos);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full grid grid-cols-3">
      {productos.map((producto, key) => (
        <div key={producto.id} className='flex flex-col justify-evenly items-center'>
            <_Producto product={producto} />
        </div>
      ))}
    </div>
  );
};

export default Products;