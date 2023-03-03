import React from 'react'

export default function ContactUs(props) {

  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    
  }

  let myInput = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(35 68 94)':'white',
    
  }

  return (
    <div className="container px-4 text-center" style={myStyle}>
      <div className="row gx-5 my-5">

        {/* contact details */}
        <div className="col ">
        <div className="p-3 border border-2 my-3" style={{ fontSize: 25 }} >
          <h1 className='my-5'>Contact  Details</h1>
          <p className=''><strong>Email Id :</strong> sharvanixyz@gmail.com</p>
          <p><strong>Mobile Num : </strong> +91-9553862226</p>
          <p><strong>Linkdin : </strong> <a href="https://www.youtube.com/">checkout my linkdin profile</a></p>
          <p><strong>Facebook : </strong> <a href="https://www.youtube.com/">checkout my Fb profile</a></p>
          <p className='mb-5'><strong>Github : </strong> <a href="https://www.youtube.com/">checkout my Github Acc</a></p>
        </div>
        </div>

        {/* Contact us form */}
        <div className="col ">
          <div className="p-3 border border-2 my-3">
            <h1 className='mt-5'>Contact Us</h1>
            <form className="row g-3">
            <div className="col-12">
                <input type="text" className="form-control" style={myInput} id="inputName" placeholder="NAME" />
              </div>
              <div className="col-12">
                <input type="email" className="form-control" style={myInput} id="inputEmail4" placeholder="Email"/>
              </div>
              <div className="col-12">
                <input type="text" className="form-control" style={myInput} id="inputAddress" placeholder="ADDRESS" />
              </div>
              <div className="col-12">
                <textarea className="form-control" style={myInput} id="inputMessage" rows="4" placeholder="MESSAGE"  />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}