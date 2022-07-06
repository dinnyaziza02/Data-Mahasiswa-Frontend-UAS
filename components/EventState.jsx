import { useState } from "react";

const EventState=()=>{
    const[nama, setNama]=useState('')
    const[alamat,setAlamat]=useState('')
    const[gender,setGender]=useState('')
    const[progPil, SetProgPil]=useState('')
    const[presAk, setPresAk]=useState(false)
    

    return(
       <div className="container mt-4">
           <div className="row">
               <div className="col-5">
                   <h3>Form Pendaftaran</h3>
                   <hr/>
                   <div className="mb-2">
                       <label htmlFor="nama">Nama</label>
                       <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange={(e)=>setNama(e.target.value)}></input>
                   </div>
                   <div className="mb-2">
                   <label htmlFor="alamat">Alamat</label>
                       <input className="form-control" type="text" name="alamat" id="alamat" value={alamat} onChange={(e)=>setAlamat(e.target.value)}></input>
                   </div>
                   <div className="mb-2">
                   <label htmlFor="gender" className="fs-5">Gender</label><br/>
                   <div className="form-check-inline">
                       <input type="radio" className="form-check-input"
                                name="gender" 
                                id="genderPria" 
                                checked={()=>setGender('Pria')} 
                                value="Pria" 
                                onChange={(e)=>setGender(e.target.value)}>
                        </input>
                        <label className="form-check-label" htmlFor="genderPria">
                            Pria
                        </label>
                   </div>
                   <div className="form-check-inline">
                       <input type="radio" className="form-check-input"
                                name="gender" 
                                id="genderWanita" 
                                checked={()=>setGender('Wanita')} 
                                value="Wanita" 
                                onChange={(e)=>setGender(e.target.value)}>
                        </input>
                        <label className="form-check-label" htmlFor="genderWanita">
                            Wanita
                        </label>
                   </div>
                       
                   </div>
                   <div className="mb-2">
                       <label  htmlFor="" className="fs-5" >Program Pilihan</label>
                       <select name="progPilihan" id="" className="form-select" value={progPil} onChange={(e)=>SetProgPil(e.target.value)}>

                            <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                            <option value="S1 Sistem Informasi">S1 Sistem Informasi</option>
                            <option value="S1 Bisnis Digital">S1 Bisnis Digital</option>
                            <option value="D3 Management Informatika">D3 Management Informatika</option>
                       </select>
                   </div>
                   <div className="mb-2">
                       <label htmlFor="" className="fs-5" mr-3>Prestasi</label><br/>
                       <input type="checkbox" className="form-check-input" 
                                name="cekAkademik" 
                                id="cekAkademik" 
                                checked={presAk}
                                onChange={(e)=>setPresAk(e.target.checked)}
                       ></input>
                        <label htmlFor="cekAkademik" className="form-check-label">Prestasi Akademik</label>
                        
                   </div>
                </div>
               <div className="col-7">
                   <h3>Resume</h3>
                   <hr/>
                   <div>
                      <h5 className="mt-3">Nama : {nama}</h5>
                      <h5 className="mt-3">Alamat : {alamat}</h5>
                      <h5 className="mt-3">Gender : {gender}</h5>
                      <h5 className="mt-3">Program Piliham : {progPil}</h5>
                      <h5>Prestasi Akademik : {presAk?'ada' : '-'}</h5>
                   </div>
                  

                </div>
           </div>
       </div>
    )
}
export default EventState;