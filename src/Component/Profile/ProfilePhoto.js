import MyProfileImage from './img.jpg';

const Pht = () => {
    return (
           <img src={MyProfileImage} alt="ProfileImage" style={{  margin: '16px',padding: '16px',
           boxSizing: 'border-box', borderRadius: '5px', boxShadow: '0 2px 5px #ccc'}} />
    )
}

export default Pht;