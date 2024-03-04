import "./App.scss";
import Section from "./components/Section";
import Video from "./components/Video";

import ImageS1A1 from "./assets/SectionImages/S1A1.png";
import ImageS1A2 from "./assets/SectionImages/S1A2.png";
import ImageS2A1 from "./assets/SectionImages/S2A1.png";
import ImageS2A2 from "./assets/SectionImages/S2A2.png";
import ImageS3A1 from "./assets/SectionImages/S3A1.png";
import ImageS4A1 from "./assets/SectionImages/S4A1.png";
import ImageS5A1 from "./assets/SectionImages/S5A1.png";
import ImageS6A1 from "./assets/SectionImages/S6A1.png";
import ImageS7A1 from "./assets/SectionImages/S7A1.png";
import ImageS7A2 from "./assets/SectionImages/S7A2.png";
import ImageS8A1 from "./assets/SectionImages/S8A1.png";
import ImageS8A2 from "./assets/SectionImages/S8A2.png";

function App() {
  return (
    <>
      <Video />
      <Section
        name="Gifting"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="Gifting"
        color="#EE7500"
        article={[
          {
            title: "Toys perfect for birthday gift giving season in Spring",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS1A1,
            link: "#"
          },
          {
            title: "Gifts for Mom",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS1A2,
            link: "#"
          }
        ]}
      />
      <Section
        name="Travel"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="Travel"
        color="#00963E"
        article={[
          {
            title: "Travel the world no matter where you are. No Passport needed.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS2A1,
            link: "#"
          },
          {
            title: "Fun accessories to take with you on your travels or keep kids entertained",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS2A2,
            link: "#"
          }
        ]}
      />
      <Section
        name="Adults welcome"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="AdultsWelcome"
        color="#006CB7"
        article={[
          {
            title: "For the Kids at Heart who love to unplug, unbox and unwind",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS3A1,
            link: "#"
          }
        ]}
      />
      <Section
        name="Art and Home Décor"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="ArtHomeDecor"
        color="#E0E0E0"
        article={[
          {
            title: "Playful ideas for refreshing your space while tapping into your more creative side",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS4A1,
            link: "#"
          }
        ]}
        inverted
      />
      <Section
        name="Space"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="Space"
        color="#000000"
        article={[
          {
            title: "Capture the wonders of space and exploration",
            description: "In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see the universe – than the Hubble Space Telescope.",
            image: ImageS5A1,
            link: "#"
          }
        ]}
      />
      <Section
        name="Pop Culture"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="PopCulture"
        color="#FC36A5"
        article={[
          {
            title: "Recreate scenes from your favorite movies and TV series",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS6A1,
            link: "#"
          }
        ]}
        inverted
      />
      <Section
        name="Toddlers"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="Toddlers"
        color="#FFD500"
        article={[
          {
            title: "Waterproof toys for toddlers and beyond",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS7A1,
            link: "#"
          },
          {
            title: "xx TBD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS7A2,
            link: "#"
          }
        ]}
      />
      <Section
        name="Real World Role Playing"
        nameText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        id="RealWorldRolePlaying"
        color="#E3000B"
        article={[
          {
            title: "Celebrating the everyday heroes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS8A1,
            link: "#"
          },
          {
            title: "xxxxx TBD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
            image: ImageS8A2,
            link: "#"
          }
        ]}
      />
    </>
  );
}

export default App;
