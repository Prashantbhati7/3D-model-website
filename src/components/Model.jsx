
import { Canvas,useThree } from '@react-three/fiber'  // useThree can only be used inside canvas element wrap this element in canvas to use this hook here     // the dom element returned by rendered in three.js
import { OrbitControls ,useAnimations,useGLTF, useTexture} from '@react-three/drei'
import { BoxGeometry, DirectionalLight } from 'three'
import * as THREE from 'three'
import {  useEffect,useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Model = () => {
   gsap.registerPlugin(useGSAP())
    gsap.registerPlugin(ScrollTrigger)
    const dogmodel = useGLTF('/models/dog.drc.glb')
    const cameraRef = useRef(null)
   useThree(({camera,scene,gl})=>{      // gl is renderer 
    camera.position.z = 0.55       // by default gl(i.e renderer) shows the dull image 
     gl.toneMapping = THREE.ReinhardToneMapping
     gl.outputColorSpace = THREE.SRGBColorSpace
     cameraRef.current = camera;
     console.log("camera ref ",cameraRef.current);
   })

//    const {normalMap,sampleMatcap} = useTexture({normalMap:"/models/dog_normals.jpg",sampleMatcap:'/matcapmaterial/mat-2.png'})
//    normalMap.flipY = false ;
//    sampleMatcap.colorSpace = THREE.SRGBColorSpace;

    const  {actions}  =  useAnimations(dogmodel.animations,dogmodel.scene)
    useEffect(()=>{
        actions['Take 001'].play()
    },[actions])
    const [normalMap] = (useTexture(['/models/dog_normals.jpg'])).map((texture)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        return texture
    })
    const [branchMap,branchNoramalMap] = (useTexture(['/models/branches_diffuse.jpeg','/models/branches_normals.jpeg'])).map((texture)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    })
    
    const [mat1,mat2,mat3,mat4,mat5,mat6,mat7,mat8,mat9,mat10,mat11,mat12,mat13,mat14,mat15,mat16,mat17,mat18,mat19,mat20] = (useTexture([
      "/matcapmaterial/mat-1.png",
      "/matcapmaterial/mat-2.png",
      "/matcapmaterial/mat-3.png",
      "/matcapmaterial/mat-4.png",
      "/matcapmaterial/mat-5.png",
      "/matcapmaterial/mat-6.png",
      "/matcapmaterial/mat-7.png",
      "/matcapmaterial/mat-8.png",
      "/matcapmaterial/mat-9.png",
      "/matcapmaterial/mat-10.png",
      "/matcapmaterial/mat-11.png",
      "/matcapmaterial/mat-12.png",
      "/matcapmaterial/mat-13.png",
      "/matcapmaterial/mat-14.png",
      "/matcapmaterial/mat-15.png",
      "/matcapmaterial/mat-16.png",
      "/matcapmaterial/mat-17.png",
      "/matcapmaterial/mat-18.png",
      "/matcapmaterial/mat-19.png",
      "/matcapmaterial/mat-20.png",
    ])).map((texture)=>{
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.flipY = false;
      return texture;
    })
    
    
    const material = useRef({
        uMatcap1: { value: mat2 },
        uMatcap2: { value: mat2 },
        uProgress: { value: 1.0}
    })
    // textures.normalMap.flipY = false ;
    //  texture.normalMap.flipY = false ;
    const materialReq = new THREE.MeshMatcapMaterial({normalMap:normalMap,matcap:mat2});

    const BranchMaterial = new THREE.MeshMatcapMaterial({normalMap:branchNoramalMap,matcap:branchMap})


    function onBeforeCompile(shader) {
        shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
        shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
        shader.uniforms.uProgress = material.current.uProgress

        // Store reference to shader uniforms for GSAP animation

        shader.fragmentShader = shader.fragmentShader.replace(
            "void main() {",
            `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
        )

        shader.fragmentShader = shader.fragmentShader.replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
        )
    }

   materialReq.onBeforeCompile = onBeforeCompile

    dogmodel.scene.traverse((child)=>{      // traverse each element(object) of the dogmodel like leaves , steams , dog itself 
     // console.log(child)
     if (child.name.split('_')[0] == 'DOGSTUDIO' ){
        //  console.log(child.name);
          // each child is also a mesh  and mesh is made up of geometry and material
        // creating material for each element seperately 
        //child.material = new THREE.MeshMatcapMaterial({normalMap:normalMap,matcap:sampleMatcap})    // Mesh Standard material need light to be visible where as meshbaisc or meshmatcap doesn't need and react with light 
        child.material = materialReq;      // only one material is used for this childs now 
     }
     else {
        child.material = BranchMaterial;
     }
   })
 
   const modelref = useRef(dogmodel);
   useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:'#sec1',
          start:'top top',
          endTrigger:'#sec4',
          end:'bottom top',
          scrub:true,
          
        }
      });
      console.log("dog is ",modelref.current);
      tl.to(modelref.current.scene.position,{z:"-0.7"})
     .to(modelref.current.scene.rotation,{x:`+=${Math.PI/9}`,y:`+=${Math.PI/10}`})
     .to(modelref.current.scene.rotation,{y:`-=${Math.PI/0.8}`},"third")
     .to(modelref.current.position,{x:`+=${10}`},"third")
     .to(cameraRef.current.position,{z:`+=${5}`})
    // .to(cameraRef.current.rotation,{y:`${2}`})
     // .to(cameraRef.current.position,{y:`${0.5}`})
      
   },[])

  //  useEffect(()=>{
  //   document.querySelector('#hire').addEventListener('mouseenter',()=>{
  //     // console.log(e);
  //     material.current.uMatcap1.value = mat19;
  //     gsap.to(material.current.uProgress,{value:0.0,duration:1})
  //     })
  //     document.querySelector('#hire').addEventListener('mouseleave',()=>{
  //       gsap.to(material.current.uProgress,{value:1.0,duration:1})
  //       //material.current.uMatcap1.value = mat2;
  //     })
  //     document.querySelector("#becomewalker").addEventListener('mouseenter',()=>{
  //       material.current.uMatcap1.value = mat8;
  //       gsap.to(material.current.uProgress,{value:0.0,duration:2})
  //     })
  //     document.querySelector("#becomewalker").addEventListener('mouseleave',()=>{
  //       gsap.to(material.current.uProgress,{value:1.0,duration:2})
  //       //material.current.uMatcap1.value = mat2;
  //     })
  //     document.querySelector('#train').addEventListener('mouseenter',()=>{
  //       material.current.uMatcap1.value = mat18;
  //       gsap.to(material.current.uProgress,{value:0.0,duration:2})
  //     })
  //     document.querySelector('#train').addEventListener('mouseleave',()=>{
  //       gsap.to(material.current.uProgress,{value:1.0,duration:2})

  //     })
  //   },[])
    useEffect(() => {
        document.querySelector(`#hire`).addEventListener("mouseenter", () => {
            material.current.uMatcap1.value = mat19
           // back.style.opacity = 1;
            const tl = gsap.timeline({
              onComplete: () => {
                material.current.uMatcap2.value = material.current.uMatcap1.value
                material.current.uProgress.value = 1.0
              }
            });

            tl.to(material.current.uProgress, {
              value: 0.0,
              duration: 0.3,
            }, 0) //  start at same time
        })

        document.querySelector(`#becomewalker`).addEventListener("mouseenter", () => {

            material.current.uMatcap1.value = mat8
            
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })
        document.querySelector(`#train`).addEventListener("mouseenter", () => {

            material.current.uMatcap1.value = mat9
            
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })
        document.querySelector(`#petsitting`).addEventListener("mouseenter", () => {

            material.current.uMatcap1.value = mat12
            
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })
        document.querySelector(`#browse`).addEventListener("mouseenter", () => {

            material.current.uMatcap1.value = mat10
            
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })
        document.querySelector(`#become-Petsitter`).addEventListener("mouseenter", () => {

            material.current.uMatcap1.value = mat8
            
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })
        
        document.querySelector(`.titles`).addEventListener("mouseleave", () => {

            material.current.uMatcap1.value = mat2
            console.log("leaving the titles section");
            gsap.to(material.current.uProgress, {
                value: 0.0,
                duration: 0.3,
                onComplete: () => {
                    material.current.uMatcap2.value = material.current.uMatcap1.value
                    material.current.uProgress.value = 1.0
                }
            })
        })

    }, [])

  return (
    <>
      <primitive scale={[1,1,1]} position={[0.16,-0.55,0]} rotation={[0,Math.PI/4.7,0]} object={dogmodel.scene} />
      <directionalLight position={[ 0, 5, 5 ]} color={0xFFFFFF} intensity={10} />
      {/* <directionalLight color={'green'} intensity={2} position={[5,0,5]}></directionalLight> */}
      {/* { <OrbitControls></OrbitControls> } */}
    </>
  )
}

export default Model
