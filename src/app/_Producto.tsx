'use client'
interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

interface ProductoProps {
  product: Producto;
}

const _Producto: React.FC<ProductoProps> = ({ product }) => {
  return (
    <div className="w-full max-w-xs bg-slate-700 shadow-lg rounded-lg m-2 text-white flex flex-col justify-evenly items-center">
      <img className="w-full h-80" src={product.imagen} alt={product.nombre} />
      <div className="p-2">
        <h2 className="text-white font-bold text-xl">{product.nombre}</h2>
        <p className="text-gray-100 text-sm">{product.descripcion}</p>
        <p className="text-gray-200 text-xl">${product.precio}</p>
      </div>
    </div>
  );
};

export default _Producto;
