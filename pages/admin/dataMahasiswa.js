import DataMahasiswa from "../../components/admin/DataMahasiswa";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import MahasiswaByNim from "../../components/admin/MahasiswaByNim";

const dataMahasiswa = ({data}) => {

        {Array.isArray(data)? data= data:data=[data]} //apakah datanya berupa array , kalau tidak ubah data jadi array
    return ( 
        <LayoutAdmin>
            <MahasiswaByNim/>
            <DataMahasiswa data = {data}/>
        </LayoutAdmin>
            
        
     );
}

export async function getServerSideProps({query}){
    const nim= query.nim;
    let url=`http://localhost:5000/mahasiswa`
    if(typeof nim ==='string'){
        url = `http://localhost:5000/mahasiswa/${nim}`
    }
    //fetc data
    const res= await fetch(url)
    const data = await res.json()
    return {props : {data}}

}
 
export default dataMahasiswa;