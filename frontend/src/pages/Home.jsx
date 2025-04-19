import Main from '../components/Main';
import Row from '../components/Row';
import requests  from '../Request';

function Home(){
    return(
        <>
            <Main/>
            
            <Row title='UpComing' fetchUrl={requests.requestUpcoming} />
            <Row title='Trending' fetchUrl={requests.requestTrending} />
            <Row title='TopRated' fetchUrl={requests.requestTopRated} />
            <Row title='Popular' fetchUrl={requests.requestPopular} />
            <Row title='Horror ' fetchUrl={requests.requestHorror} />
        </>
    )
}

export default Home;