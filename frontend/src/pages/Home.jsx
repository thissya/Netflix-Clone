import Main from '../components/Main';
import Row from '../components/Row';
import requests  from '../Request';

function Home(){
    return(
        <>
            <Main/>
            
            <Row rowId={1} title='UpComing' fetchUrl={requests.requestUpcoming} />
            <Row rowId={2} title='Trending' fetchUrl={requests.requestTrending} />
            <Row rowId={3} title='TopRated' fetchUrl={requests.requestTopRated} />
            <Row rowId={4} title='Popular' fetchUrl={requests.requestPopular} />
            <Row rowId={5} title='Horror ' fetchUrl={requests.requestHorror} />
        </>
    )
}
export default Home;