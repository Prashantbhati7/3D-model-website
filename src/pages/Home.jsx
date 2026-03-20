import { Canvas } from "@react-three/fiber";
import Model from "../components/model";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const Home = ()=>{
    return (
        <>
        <main style={{position:'relative'}} className="top-0 ">
                   
                 <Canvas id="canvas" style={{ position:'fixed',height:'100%',width:'100%' ,zIndex:'-1',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                 <Model></Model>
                 </Canvas >
             
               <Section1> </Section1>
       
               <Section2/>
       
               <Section3/>
               <Section4/>
              </main>
        </>
    )
}

export default Home;