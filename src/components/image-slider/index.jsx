import './styles.css';
import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    function fetchImages(getUrl) {
        setLoading(true);

        fetch(`${getUrl}?limit=${limit}&${page}=1`)
            .then((response) => {
                if (!response.ok) {
                    setErrorMsg(response.message)
                    setLoading(false);
                }
                return response.json();
            })
            .then((data) => {
                if (data) setImages(data);
                setLoading(false);
            })
            .catch((e) => {
                setErrorMsg(e.message);
                setLoading(false);
            });
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])
    if (loading) {
        return <div>Loading data! Please wait... </div>
    }

    if (errorMsg) {
        return <div>Error occured! {errorMsg}</div>
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((imageItem, index) => {
                    return (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    )

                }) : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => {
                        return (
                            <button
                                key={index}
                                className={currentSlide === index ? "current-indicator" : "inactive-indicator"}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        )
                    })
                    : null

            }
        </span>
    </div>
}