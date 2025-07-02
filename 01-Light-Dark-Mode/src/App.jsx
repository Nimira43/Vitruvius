import Hero from './components/Hero'

const App = () => {
  return ( 
    <div className='min-h-screen bg-light relative'>
      <button 
        className='fixed top-3 lg:top-4 right-3 lg:right-4 w-9 lg:w-10 h-9 lg:h-10 flex justify-center items-center rounded-full bg-support shadow-lg hover:bg-dark hover-transition cursor-pointer'
      
      >

      </button>
      <Hero />
    </div>
  )
}
 
export default App