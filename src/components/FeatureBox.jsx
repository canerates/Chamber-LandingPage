<<<<<<< HEAD
=======

>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
const FeatureBox = (props) => {
    return(
        <div className='feature-box'>
            <div className='feature-box-img'>
                <img src={props.image} alt="" />
            </div>
            <div className='feature-box-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
        </div>
    );
};

export default FeatureBox;