import {useState} from "react"
import './App.css';
import pic from './pic.jpg'



function App() {
  const [file,setFile] = useState(null);
  const [val,setVal] = useState(1);
  const [contrast,setContrast] = useState(1);
  const [saturate,setSaturate] = useState(1);
  const [sepia,setSepia] = useState(0)
  const [imgData, setImgData] = useState(null);


  const handleChange =(e) =>{
    e.preventDefault()
    // setFile(e.target.file[0])
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div className='container'>

      <div className='interface'>
        <img style={{
          
            filter: `contrast(${contrast}) 
                     saturate(${saturate}) 
                     brightness(${val})
                     sepia(${sepia})`

        
        }} src={imgData} alt='img'/>

      </div>

      <div className="controls">
        <div>
          <input type="file" onChange={handleChange} />
        </div>
        <div>
          <label>Brightness</label>
          <input type="range" min='0' max='10' value={val}  step='0.1' onChange={(e)=>{setVal(e.target.value)}} />
        </div>

        <div>
          <label>Contrast</label>
          <input type="range" min='0' max='10' value={contrast}  step='0.1' onChange={(e)=>{setContrast(e.target.value)}} />
        </div>

        <div>
          <label>Saturation</label>
          <input type="range" min='0' max='10' value={saturate}  step='0.1' onChange={(e)=>{setSaturate(e.target.value)}} />
        </div>

        <div>
          <label>Sepia</label>
          <input type="range" min='0' max='10' value={sepia}  step='0.1' onChange={(e)=>{setSepia(e.target.value)}} />
        </div>
        
      </div>
    
      
    </div>
  );
}

export default App;
