import './App.css'
import StudentCard from './components/StudentCard/StudentCard'

import Image1 from './assets/Image1.svg'
import Image2 from './assets/Image2.svg'
import Image3 from './assets/Image3.svg'

function App() {

  const userData = [
    {
     username: 'Dhruv',
     userDescription: 'Teacher, coder etc',
     image: Image1,
    },
    {
     username: 'Mahima',
     userDescription: 'Like Pottery, Harry Potter and Magic',
     image: Image2,
    },
    {
     username: 'Dushyant',
     userDescription: 'Artist, Coder, very handsome',
     image: Image3,
    },
    {
     username: 'Chotta Bheem',
     userDescription: 'Artist, Coder, very handsome',
     image: Image3
    }
    
]


  return (
    <>
     <StudentCard {...userData} ></StudentCard>
    </>
  )
}

export default App
