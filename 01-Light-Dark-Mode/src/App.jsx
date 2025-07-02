import Hero from './components/Hero'
import { TbMoon, TbSun} from 'react-icons/tb'

const App = () => {
  return ( 
    <div className='min-h-screen bg-light relative'>
      <button 
        className='fixed top-3 lg:top-4 right-3 lg:right-4 w-9 lg:w-10 h-9 lg:h-10 flex justify-center items-center rounded-full text-[#fffcfa] bg-[#008080] shadow-lg hover:bg-[#2e5252] hover-transition cursor-pointer'
      >
        <TbMoon className='text-lg lg:text-xl' />
      </button>
      <Hero />
    </div>
  )
}
 
export default App