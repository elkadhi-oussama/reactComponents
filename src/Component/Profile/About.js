import MyPic from "./ProfilePhoto";
function AboutMe() {
    return (
        <section id="about-me">
        <h1>
          Hello, my name is
          <span class="rotate text-important">Elkadhi Oussama</span>,<br />
          and i make horrible websites.
        </h1>
      <MyPic />
      </section>
    )
}

export default AboutMe;