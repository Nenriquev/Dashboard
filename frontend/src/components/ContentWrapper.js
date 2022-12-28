import TopBar from './TopBar';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDB from './LastMovieInDB'
import GenresInDB from './GenresInDB'
import Footer from './Footer'
import MovieTable from './MovieTable';


const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
          <ContentRowMovies />
          <div className="row">
            <LastMovieInDB />
            <GenresInDB />
          </div>
          <MovieTable/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentWrapper;
