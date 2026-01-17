import React from 'react'
import { Canvas,useThree } from '@react-three/fiber'  // useThree can only be used inside canvas element wrap this element in canvas to use this hook here     // the dom element returned by rendered in three.js
import { OrbitControls ,useGLTF, useTexture} from '@react-three/drei'
import { BoxGeometry, DirectionalLight } from 'three'
import { normalMap } from 'three/tsl'

const Model = () => {
    const dogmodel = useGLTF('/models/dog.drc.glb')
   useThree(({camera,scene,gl})=>{      // gl is renderer 
    console.log(camera.position)
    camera.position.z = 0.75
   })
   const textures = useTexture({normalMap:"/models/dog_normals.jpg"})
   dogmodel.scene.traverse((child)=>{      // traverse each element(object) of the dogmodel like leaves , steams , dog itself 
     // console.log(child)
   })
  return (
    <>
     
      <primitive scale={[1,1,1]} position={[0.16,-0.5,0]} rotation={[0,Math.PI/3.7,0]} object={dogmodel.scene} />
      <directionalLight color={0xffffff} intensity={10} position={[0,5,5]}></directionalLight>
      {/* <OrbitControls></OrbitControls> */}
    </>
  )
}

export default Model
