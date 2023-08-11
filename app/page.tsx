import '@/styles/globals.css'
import Link from 'next/link'
export default function Page(){
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <p class="font-bold text-red-300 text-5xl mt-3">☆♩♡青春再確認メーカー☆♩♡</p>
      <p class="font-bold text-blue-500 text-2xl mt-3">あるあるの青春の思い出を振り返って、青春度を診断してみよう！</p>
      <Link href="page" className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3'>思い出す！</Link>
    </div>
  )
}