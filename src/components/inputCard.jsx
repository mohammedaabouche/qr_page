import '../index.css'
import OutputCard from './outputCard'
import { useState } from 'react'
const InputCard=()=> {
   const [qrValue, setQrValue] = useState([]);



  
   const handleformat=(id)=>{
      console.log(id+"-input")
      let element=document.getElementById(id+"-input")
      element.classList.add("active")
      let element2=document.getElementById(id)
      element2.classList.add("active")
      let elements=document.getElementsByClassName("grid-item")
      for(let i=0;i<elements.length;i++){
         if(elements[i].id!==id ){
            elements[i].classList.remove("active")
            let element3=document.getElementById(elements[i].id+"-input")
            element3.classList.remove("active")
         }
      }
   
   
   }
   const generateQRCode=()=>{
      let type=document.getElementsByClassName("active")[0].id
      console.log(type)
      if(type==="url"){
         let value=document.getElementById("url-input").value
         setQrValue([{'id':"website",'value':value}])
      }
      else if(type==="vcard"){
         let elements = document.getElementsByClassName("vcard")
         let values=[]
         for(let i=0;i<elements.length;i++){
            values.push({'id':elements[i].id,'value':elements[i].value})
         }
         console.log(values)
         setQrValue(values)
         console.log(qrValue)
         
         }
      else if(type==="text"){
         let value=document.getElementById("text-input").value
         setQrValue([{'id':"text",'value':value}])
      }
      else if(type==="email"){
         let elements = document.getElementsByClassName("email")
         let values=[]
         for(let i=0;i<elements.length;i++){
            values.push({'id':elements[i].id,'value':elements[i].value})
         }
         console.log(values)
         setQrValue(values)
         console.log(qrValue)
      }
      else if(type==="sms"){
         let elements = document.getElementsByClassName("sms")
         let values=[]
         for(let i=0;i<elements.length;i++){
            values.push({'id':elements[i].id,'value':elements[i].value})
         }
         console.log(values)
         setQrValue(values)
         console.log(qrValue)
      }
      else if(type==="wifi"){
         let elements = document.getElementsByClassName("wifi")
         let values=[]
         for(let i=0;i<elements.length;i++){
            values.push({'id':elements[i].id,'value':elements[i].value})
         }
         console.log(values)
         setQrValue(values)
         console.log(qrValue)
      }
      
      


   }
   const [checked, setChecked] = useState(false);
   const handleChange = (event) => {
      const checkbox = event.target;
      setChecked(checkbox.checked);
    };
    return (
      <div id ="container" className='grid gap-4 grid-cols-2 capitalize'>
       <div className="card-input mb-5">
          <ul className='grid gap-4 grid-cols-3  md:grid-cols-4 lg:grid-cols-5 font-mono uppercase font-bold cursor-pointer '>
            <li><span onClick={()=>{handleformat("url")}} id="url" className='grid-item hover:text-cyan-500 active' >url</span></li>
            <li><span onClick={()=>{handleformat("vcard")}} id="vcard" className='grid-item hover:text-cyan-500'>vcard</span> </li>
            <li><span onClick={()=>{handleformat("text")}} id="text" className='grid-item hover:text-cyan-500'>text</span> </li>
            <li><span onClick={()=>{handleformat("email")}} id="email" className='grid-item hover:text-cyan-500'>e-mail</span> </li>
            <li><span onClick={()=>{handleformat("sms")}} id="sms" className='grid-item hover:text-cyan-500'>sms</span> </li>
            <li><span onClick={()=>{handleformat("wifi")}} id="wifi" className='grid-item hover:text-cyan-500'>wifi</span> </li>
            {/* <li><span onClick={()=>{handleformat("bitcoin")}} id="bitcoin" className='grid-item hover:text-cyan-500'>bitcoin</span> </li>
            <li><span onClick={()=>{handleformat("twitter")}} id="twitter" className='grid-item hover:text-cyan-500'>twitter</span> </li> */}
            {/* <li><span id="facebook" className='grid-item hover:text-cyan-500'>facebook</span> </li>
            <li><span id="pdf" className='grid-item hover:text-cyan-500'>pdf</span> </li>
            <li><span id="mp3" className='grid-item hover:text-cyan-500'>mp3</span> </li>
            <li><span id="appstores" className='grid-item hover:text-cyan-500'>app stores</span> </li>
            <li><span id="images"className='grid-item hover:text-cyan-500'>images</span> </li> */}
          </ul>
          <div className='input ' >
          <textarea id="url-input" autofocus="" class="bg-transparent resize-none  type active " placeholder="Enter your website"></textarea>
          <textarea  id="text-input" autofocus="" class="bg-transparent resize-none  type" placeholder="Enter your text"></textarea>
          <div  id="vcard-input" className="grid grid-cols-3 gap-4  form type" >
            <label htmlFor="" >Name </label>
            <input type="text" id="firstName" class="form-input vcard   "placeholder="first name" />
            <input type="text" id="lastName"  class="form-input vcard "placeholder="last name" />
            <label htmlFor="">Contact</label>
            <input type="text" id="mobile"class="form-input vcard col-span-2" placeholder="mobile" />
            <div></div>
            <input type="text" id="phone"class="form-input vcard " placeholder="phone" />
            <input type="text" id="Fax"class="form-input vcard " placeholder="Fax" />
            <label htmlFor="">Email</label>
            <input type="text" id="email" class="form-input vcard col-span-2 "placeholder="email" />
            <label htmlFor="">Company</label>
            <input type="text" id="Company"class="form-input vcard col-span-2" placeholder="Company" />

            
            <label htmlFor="">Street</label>
            <input type="text" id="street"class="form-input vcard col-span-2" placeholder="street" />
            <label htmlFor="">City</label>
            <input type="text" id="city"class="form-input vcard col-span-2 " placeholder="city" />
            <label htmlFor="">State</label>
            <input type="text" id="state"class="form-input vcard col-span-2" placeholder="state" />
            <label htmlFor="">Country</label>
            
            <input type="text" id="country"class="form-input vcard col-span-2" placeholder="country" />
            <label htmlFor="">Website</label>
            
            <input type="text" id="website"class="form-input vcard  col-span-2" placeholder="website" />
          </div>
         <div  id="email-input" className="grid grid-cols-3 gap-4 form  type" >
          <label htmlFor="">Email</label>
            
            <input type="text" id="email"class="form-input email col-span-2" placeholder="your email" />
            <label htmlFor="">Subject</label>
            
            <input type="text" id="subject"class="form-input email  col-span-2" placeholder="Enter email subject" />
            <label htmlFor=""> Message</label>
            <textarea name="" id="message" class=" form-input email col-span-2" placeholder="Enter your message here"></textarea>
         </div>
        
         <div  id="sms-input" className="grid grid-cols-3 gap-4 form type" >
            <label htmlFor="">Number</label>
            
            <input type="text" id="number"class="form-input sms   col-span-2" placeholder="Enter phone number" />
            <label htmlFor=""> Message</label>
            <textarea name="" id="text" class="form-input sms col-span-2" placeholder="Enter your text here" ></textarea>
         </div>
         <div id="wifi-input" className="grid grid-cols-3 gap-4 form type" >
            <label htmlFor="">Network Name</label>
            <input type="text" id="ssih"class="form-input wifi  col-span-1" placeholder="SSIH" /> 
            <span>
              <h3> hidden&emsp; </h3>
               <input onChange={handleChange} type="checkbox" id='hidden' className='wifi' value={checked}  />
            </span>
            <label htmlFor="">Password</label>
            <input type="text" id="password"class="form-input wifi  col-span-2" placeholder="password" />
            <label htmlFor="">Security</label>
            <select name="" id="security" class="form-input wifi  col-span-2">
               <option value="WPA">WPA/WPA2</option>
               <option value="WEP">WEP</option>
               <option value="nopass">nopass</option>
            </select>
            

            
         </div>
         
          </div>
          
          <button className='generatebtn font-mono font-bold' onClick={generateQRCode}>generate code</button>
       </div>
       <OutputCard value={qrValue} />
         </div>
    );
  }
  
  export default InputCard;