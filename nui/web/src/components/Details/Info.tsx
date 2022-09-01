import InfoComp from "../../pages/Info/InfoComp";
import './Details.css'
import { InfoArr  } from "../../pages/Info/info";

const Info = () => {

  return (
    <div className="infoElements">
        {InfoArr.map((obj:any) => 
            <InfoComp
            icon = {obj.icon}
            title= {obj.title}
            value = {obj.value}
          />
          )}
    </div>
  );
};

export default Info;
