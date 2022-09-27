import Styles from "../../styles/App.module.scss";
import DataJson from "../../data/data.json";

const Footer = () => {
    const dataFooter = DataJson.footerComponent;
    return(
        <div className={Styles.footer}>
            <div className={Styles.footer_logo}>{dataFooter.title}</div>
            <ul className={Styles.footer_list}>
                {dataFooter.list.map((data, i) => {
                    return(
                        <li key={i}><a href={data.link}>{data.name}</a></li>
                    )
                })}
            </ul>
            <ul className={`${Styles.footer_list} ${Styles.footer_rs}`}>
            {dataFooter.logoList.map((data, i) => {
                    return(
                        <a key={i} href={data.link}><img src={require(`../../assets/${data.name}`)} alt="logo"/></a>
                    )
                })}
            </ul>
        </div>
    )
}

export default Footer;