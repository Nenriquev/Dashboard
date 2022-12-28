import Card from "./Card";

  const moviesInDB = {
    title:'Movies in Database', 
    color:'primary', 
    quantity: 115,
    icon:'fa-film'
  }
  const totalAwards = {
    title:' Total awards', 
    color:'success', 
    quantity: 79,
    icon:'fa-award'
  }
  const actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    quantity: 49,
    icon:'fa-user-check'
  }

  let cardProps = [moviesInDB, totalAwards, actorsQuantity];
  

const ContentRowMovies = (props) => {
  return(
    
    <div className="row">

      {
        cardProps.map((data, index) => {
          return(
          <Card {...data} key={index}/>)
        })
      }
    </div>

  )
}


export default ContentRowMovies;