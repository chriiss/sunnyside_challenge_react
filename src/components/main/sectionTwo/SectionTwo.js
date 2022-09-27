import Styles from "../../../styles/App.module.scss";
import imgOne from "../../../assets/desktop/image-transform.jpg";
import imgTwo from "../../../assets/desktop/image-stand-out.jpg";
import imgThree from "../../../assets/desktop/image-graphic-design.jpg";
import imgFour from "../../../assets/desktop/image-photography.jpg";
import DataJson from "../../../data/data.json";

const SectionTwo = () => {
    const dataSectionTwo = DataJson.sectionTwoComponent;
    return(
        <section>
           <div className={Styles.sectionTwo_container}>
                <div className={Styles.sectionTwo_container_bloc}>
                    <h2>{dataSectionTwo.blocOne.title}</h2>
                    <p>{dataSectionTwo.blocOne.paragraph}</p>
                    <a href="/" className={Styles.uppercase}>{dataSectionTwo.blocOne.link}</a>
                </div>
                <div className={Styles.sectionTwo_container_second_blocImg}>
                    <img src={imgOne} alt="eggs"/>
                </div>
           </div>
           <div className={Styles.sectionTwo_container_second}>
                <div className={Styles.sectionTwo_container_second_blocImg}>
                    <img src={imgTwo} alt="stand out"/>
                </div>
                <div className={Styles.sectionTwo_container_second_bloc}>
                    <h2>{dataSectionTwo.blocTwo.title}</h2>
                    <p>{dataSectionTwo.blocTwo.paragraph}</p>
                    <a href="/" className={Styles.uppercase}>{dataSectionTwo.blocTwo.link}</a>
                </div>
           </div>
           <div className={Styles.sectionTwo_container_second}>
                <div className={Styles.sectionTwo_container_second_blocImg}>
                    <img className={Styles.sectionTwo_container_second_img} src={imgThree} alt="stand out"/>
                </div>
                <div className={Styles.sectionTwo_container_second_bloc_absolute}>
                    <h2>{dataSectionTwo.blocThree.title}</h2>
                    <p>{dataSectionTwo.blocThree.paragraph}</p>
                </div>
                <div className={Styles.sectionTwo_container_second_blocImg}>
                    <img className={Styles.sectionTwo_container_second_img_bis} src={imgFour} alt="stand out"/>
                    <div className={Styles.sectionTwo_container_second_bloc_absolute_bis}>
                    <h2>{dataSectionTwo.blocFour.title}</h2>
                    <p>{dataSectionTwo.blocFour.paragraph}</p>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default SectionTwo;