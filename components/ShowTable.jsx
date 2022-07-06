const ShowTabel=({daftarNama})=>{
    return(
        <div>
            <table style={{border:'solid', margin:'2px'}}>
                <thead>
                    <td>NAMA</td>
                    <td>ALAMAT</td>
                </thead>
                {daftarNama.map((daftar,indeks)=>
                    <tr key={indeks}>
                        <td>
                            {daftar.nama}
                        </td>
                        <td>
                            {daftar.alamat}
                        </td>
                    </tr>
                )}
            </table>
            {daftarNama[0].nama}
        </div>
    )
}
export default ShowTabel