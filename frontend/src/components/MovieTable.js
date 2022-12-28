import { useEffect, useState } from 'react'
import RowsTable from './RowsTable'


const MovieTable = () => {

  const [movies, setMovies] = useState()

  useEffect(()=>{
    const fetchData = async () => {
  
      const data = await fetch('/api/movies')
      const json = await data.json()
      setMovies(json)
    }
  
    fetchData()
  },[])


  
return(
  <table className='table table-bordered table-hover'>
    <thead>
      <tr>
        <th scope="col"></th>
        <th className="table-info" scope="col">Titulo</th>
        <th scope="col">Duracion</th>
        <th scope="col">Rating</th>
        <th scope="col">Genero</th>
        <th className="table-success" scope="col">Premios</th>
      </tr>
    </thead>
  {
    movies?.data?.map((data, index) => {
      return <RowsTable {...data} key={index}/>
  })}
 </table>
)

}

export default MovieTable;