import {useEffect, useState} from 'react'
const GenresInDB = () => {

 const [genres, setGenres] = useState()

  useEffect(()=>{
    const fetchData = async () => {

      const data = await fetch('/api/genres')
      const json = await data.json()
      setGenres(json)
    }

    fetchData()
  },[])

  
  const background = () => {

    const backgroun = document.querySelector('#card')
    backgroun.classList.toggle('bg-warning')

  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 onMouseOver={()=>background()} className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div id='card' className="card-body bg-warning">
            <div className="row">
                {genres?.data?.map((genre, index) => {
                  return (
                      <div key={index} className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                          <div className="card-body">{genre.name}</div>
                        </div>
                      </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
};



export default GenresInDB;
