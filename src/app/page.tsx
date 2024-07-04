import _Header from "./_Header";
import _Productos from "./_Productos";
import _Footer from "./_Footer";
import { AsyncLocalStorage } from "async_hooks";

export default async function Home() {  
  return (
    <div className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <_Header />
      <_Productos />
      <_Footer />
    </div>
  );
}
