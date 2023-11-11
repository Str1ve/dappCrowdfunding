import { setGlobalState, useGlobalState } from "../store"
import '../styles.css';

const Hero = () => {
  const [stats] = useGlobalState('stats')

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView()
  }

  return (
    <div className="bg-white text-gray-800 py-24 px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl md:text-7xl xl:text-8xl font-bold mb-12 mt-10 custom-font" style={{ animation: "fadeIn 2s" }}>
            <span style={{ lineHeight: '1.3' }}>Let's Come</span>
            <br />
            <span className="text-green-400" style={{ lineHeight: '1.3' }}>Be Part</span>
            <span style={{ margin: '10px 0' }}> of</span>
            <br />
            <span style={{ lineHeight: '1.3' }}>Changes</span>
            
            <div className="flex justify-center items-center space-x-4" style={{marginTop: '70px' }}>
              <button 
                type="button"
                className='inline-block px-14 py-4 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-[10px] shadow-md hover:bg-green-700'
                onClick={() => setGlobalState('createModal', 'scale-100')}
              >
                Add Project
              </button>
              
              <button 
                type="button"
                className='inline-block px-14 py-4 border border-green-600
              font-medium text-xs leading-tight uppercase text-green-600
              rounded-[10px] shadow-md bg-transparent hover:bg-green-700
              hover:text-white'
                onClick={scrollToProjects}
              >
                Back Projects
              </button>
            </div>
        </h1>
      </div>

        <div className="flex justify-center items-center mt-5 custom-font">
          <div
            className="flex flex-col justify-center items-center
            h-20 border shaodw-md w-full"
          >
            <span 
              className="text-lg font-bold text-green-900
              leading-5"
            >
              {stats?.totalProjects || 0}
            </span>
            <span>Projects</span>
          </div>
          <div
            className="flex flex-col justify-center items-center
            h-20 border shaodw-md w-full"
          >
            <span 
              className="text-lg font-bold text-green-900
              leading-5"
            >
              {stats?.totalBacking || 0}
            </span>
            <span>Backings</span>
          </div>
          <div
            className="flex flex-col justify-center items-center
            h-20 border shaodw-md w-full"
          >
            <span 
              className="text-lg font-bold text-green-900
              leading-5"
            >
              {stats?.totalDonations || 0} ETH
            </span>
            <span>Donated</span>
          </div>
        </div>
    </div>
  )
}

export default Hero
