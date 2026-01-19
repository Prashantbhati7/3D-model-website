import Model from "./components/model"
import { Canvas } from "@react-three/fiber"
import NavBar from "./components/NavBar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"

function App() {
  
  return (
       <>
       <main style={{position:'relative'}} className="top-0 ">
          <Canvas id="canvas" style={{ position:'fixed',height:'100%',width:'100%' ,zIndex:'-1',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
          <Model></Model>
          </Canvas >
      
        <Section1> </Section1>

        <Section2/>

        <Section3/>

       
        <section id="sec4" className="border-2 min-h-screen border-blue-300"></section>
       </main>
      </>
  )
}

export default App
