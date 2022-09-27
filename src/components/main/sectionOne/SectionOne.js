import Styles from "../../../styles/App.module.scss";
import logoArrow from "../../../assets/icon-arrow-down.svg";
import DataJson from "../../../data/data.json";

const SectionOne = () => {
    const sectionOneData = DataJson.sectionOneComponent;
    return(
        <section>
            <div className={Styles.bg_img}>
                <h1 className={Styles.uppercase}>{sectionOneData.title}</h1>
                <a href="#sectionTwo"><img src={logoArrow} alt="logo arrow down"/></a>
            </div>
        </section>
    )
}

export default SectionOne;