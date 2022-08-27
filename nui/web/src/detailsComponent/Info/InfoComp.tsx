import './infoComp.css'

interface Props {
    icon: string;
    title: string;
    value:  string;
}

const InfoComp = ({icon, title, value} : Props) => {

    return (
      <div className="infoSide">
          <div className="information">
          <img className='icon' src={icon} alt="icon"/>
          <h2 className="infoTxt"> {title}: </h2>
          <h2 className="infoTxt"> {value} </h2>  
          </div>
           
      </div>
    );
  };
  
  export default InfoComp;