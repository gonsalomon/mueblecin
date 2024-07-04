import _Header from "./_Header";
import _Producto from "./_Producto";
import _Footer from "./_Footer";
import Producto from "@/api";

export default async function Home() {
  const csv = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSe9wtG89XGgp-uxHymZxFTpEC8vbYPvnGb11wOW4InmeAweF_B4PkVgJ_g82GO2zP5Wf6RRL8LSpG_/pub?output=tsv")
  .then((res) => res.text())

  const productos = csv
  .split('\n')
  .slice(1)
  .map((producto)=>{
    const [id, nombre, descripcion, precio, stock, imagen] = producto.split('\t')
    return {id: Number(id), nombre, descripcion, precio: Number(precio), stock: Number(stock), imagen}
  })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <_Header/>

        <_Footer/>
      </div>
    </main>
  );
}
