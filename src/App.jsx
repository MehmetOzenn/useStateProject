import { useState } from 'react'

import './App.css'
import Course from './Course'

function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}


function App() {
  
  const [courses, setCourses] = useState([])
  
  const handClick = () => {
    setCourses([...courses, getRandomCourse()])
  }
  const courseList = courses.map((course,index)=>{
    return <Course key={index} courseName={course}/>;
  });

  return (
    <>
      <button className='appButton' onClick={handClick}>Kurs Ekle</button>
      <div className='courseArea'>
        {courseList}
      </div>
    </>
  )
}

export default App
