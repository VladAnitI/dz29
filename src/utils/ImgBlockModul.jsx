import './ImgBlockClass.css';

const ImgBlockModul = ({src, className, alt}) => {
    return (
        <div><img alt={alt} src={src} className={className} /></div>
    )
}

export default ImgBlockModul;