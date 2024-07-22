'use client'
import Button from './components/Button';
import Header from './components/Header';
export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center bg-black-800 w-[100vw] h-[100vh]">
      <Header />
      <div className="flex flex-col justify-center items-center w-[100vw]">
      <p className="text-pink-900 font-sans font-bold text-4xl">Fiap books</p>
      <div className="flex flex-1 flex-col border border-[#000] border-opacity-70 min-w-[996px] min-h-[355px] rounded-[25px] justify-center items-center">
        <p className="mt-1 mb-1 text-[#fff] font-sans text-base font-bold">Digite seu livro</p>
        <input className="mt-1 mb-1 w-[70%] border border-pink-900 bg-black-800 rounded-[25px] h-[65px] text-[#fff] p-2" type="text"/>        
        <div className='flex justify-around w-full'>
          <Button nameButton={"Listar livros"}/>
          <Button nameButton={"Cadastrar"}/>
        </div>        
      </div>
      </div>
    </main>
  );
}
