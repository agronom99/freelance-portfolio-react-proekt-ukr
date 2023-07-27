import "./style.css"
import gitHubIcon from "./gitHub-black.svg";



const BtnGitHub = ({link}) => {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt="" />
        ссилка на сайт
      </a>
    );
}
 
export default BtnGitHub;