import React,{useEffect} from "react";
import Slider from "react-slick";
import SHoaresal from '../../img/New/SS1.jpg';
import SHoaresal1 from '../../img/New/SS2.jpg';
import SHoaresal3 from '../../img/New/SS3.jpg';
import CheckboxesTags from "./AutoCom";
import { useQuery } from "react-query";
import { SearchFilterApi } from '../../utils/API';



const FirstSlide = () => {

    const [query, setQuery] = React.useState("")
    const [area, setArea] = React.useState([])


    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
    };



    const getSearch = useQuery(['search', query, area[0]?.title], () => SearchFilterApi({ query, area: area[0]?.title }), {
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: false,
    }
    )

    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <>
            <div className="container-fluid justify-content-center rounded slide123" id="main">
                <div className="container-fluid py-0 px-2 rounded">
                    <Slider className="rounded" {...settings}>
                        <img className="img-fluid img-sho rounded " src={SHoaresal} alt="اسلایدر1" />
                        <img className="img-fluid img-sho rounded" src={SHoaresal1} alt="اسلایدر2" />
                        <img className="img-fluid img-sho rounded" src={SHoaresal3} alt="اسلایدر3" />
                    </Slider>
                </div>
            </div>
            <div className="text-center position-relative col-8 col-md-7 col-lg-6 mx-auto py-5 mb-3">
                <div className="input-search d-flex flex-column mx-auto col-lg-12 col-md-12 col-12 px-5 pt-1 pb-1 position-absolute rounded-3">
                    <label htmlFor="search-amoz" className="input-search-lable mt-2 mb-3 py-2 fs-5 fw-bold form-label bg-light rounded">
                        جستجوی آموزشگاه های منطقه شمیرانات
                    </label>
                    <div className="input-group">
                        {/* <botton class="input-group-text btn btn-light rounded-0 m-0"><img src={filter} alt="filter"/></botton> */}
                        <input type="search" className="form-control px-3 py-2 rounded-0 rounded-end" name="" value={query} onChange={event => setQuery(event.target.value)} id="search-amoz" placeholder="جستجو کنید"
                            aria-describedby="button-addon1" />

                        <button onClick={() => getSearch.refetch()} className="btn btn-primary rounded-start rounded-0 rounded-start px-lg-5 px-md-4" type="button" id="button-addon1">جستجو</button>
                    </div>
                    <CheckboxesTags area={area} setArea={setArea} />
                </div>
            </div>

            {getSearch.isSuccess && getSearch.data?.data.collages[0]?.paginatedResults.map((item, index) => { return (<p key={index}>mahdi2</p>) })}
        </>
    );
}
export default FirstSlide;
