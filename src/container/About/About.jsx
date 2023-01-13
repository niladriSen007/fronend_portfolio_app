import React,{useState,useEffect} from 'react'
import "./About.scss"
import {motion} from "framer-motion";
import {images} from "../../constants"
import { urlFor,client } from '../../client';

// const abouts = [
//   {
//     title:"Frontend Development",
//     description:"I am a good frontend developer",
//     imageURL:images.about01
//   },
//   {
//     title:"Backend Development",
//     description:"I am a good dackend developer",
//     imageURL:images.about02
//   },
//   {
//     title:"Full Stack Development",
//     description:"I am a good full stack developer",
//     imageURL:images.about03
//   },
//   {
//     title:"Programming",
//     description:"I am a good programmer",
//     imageURL:images.about04
//   },
// ]

const About = () => {

  const [abouts,setAbouts] = useState([]);


  const getUsers = async() =>{
    try{
            const query = '*[_type == "abouts"]';
            const response = await client.fetch(query);
            const jsonData = await response.json();
            setAbouts(jsonData)
    }
   catch(error)
   {
    console.log("Hi");
    console.log(error)
   }
}

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data)=>setAbouts(data));
  }, [])
  
  
    
    // .then((data)=> setAbouts(data));

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Dev</span>
        <br/>
        means <span>Good Business</span>
        </h2>

        <div className="app__profiles">
            {
              abouts.map((about,index)=>(
                <motion.div
                whileInView={{opacity:1}}
                whileHover={{scale:1.15}}
                transition={{duration:.5,type:"tween"}}
                className="app__profile-item"
                key={about.title+index}
                >
                      <img src={urlFor(about.imgUrl)} alt={about.title} />
                      <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
                      <p className="p-text" style={{marginTop:10}}>{about.description}</p>
                </motion.div>
              ))
            }
        </div>
    
    </>
  )
}

export default About