import Nav from "../../components/header/nav/Nav";
import SectionOne from "../../components/main/sectionOne/SectionOne";
import SectionTwo from "../../components/main/sectionTwo/SectionTwo";
import SectionThree from "../../components/main/sectionThree/SectionThree";
import Footer from "../../components/footer/Footer";

const HomeViews = () => {
  return (
    <>
        <header>
            <Nav/>
        </header>
        <main>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default HomeViews;