import '../index.css'
import QRCode from "react-qr-code"
function OutputCard(data) {
    let message=""
    for(let i=0;i<data.value.length;i++){
        if(data.value[i].value!=="")
            message=message+data.value[i].id+":"+data.value[i].value+"\n"
    }
    
    return (
        <div className='card-output text-xl font-semibold capitalize font-mono'>
            <h1>your QR Code </h1>
            <div className='cadre '>
                <QRCode value={message} className='qrcode' size={150} />
            </div>
            
        </div>
    );
  }
  
  export default OutputCard;