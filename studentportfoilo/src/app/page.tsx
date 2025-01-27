import Image from "next/image";
import Header from "./parts/Header/Header";
import ProfileSection from "./parts/ProfileSection/ProfileSection";
import AboutMeSection from "./parts/AboutMeSection/AboutMeSection";
import EducationSection from "./parts/EducationSection/EducationSection";
import ProjectSection from "./parts/ProjectSection/ProjectSection";
import SkillsSection from "./parts/SkillsSection/SkillsSection";
import Footer from "./parts/Footer/Footer";
export default function Home() {
  return (
    <>
      <Header></Header>
      <ProfileSection></ProfileSection>
      <AboutMeSection></AboutMeSection>
      <EducationSection></EducationSection>
      <ProjectSection></ProjectSection>
      <SkillsSection></SkillsSection>
      <Footer></Footer>
    </>

  )
}
