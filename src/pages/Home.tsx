import { MouseEvent } from "react";
import { user, work1, work2, work3 } from "../assets/index";
import "../index.css";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  const handleOpenTab = (tabname: string) => (event: MouseEvent) => {
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname)!.classList.add("active-tab");
  };

  return (
    <>
      <div id="header">
        <div className="container">
          <NavBar />
          <div className="header-text">
            <p>Game Programmer</p>
            <h1>
              Hi, I'm <span>Federico Dell'Aquila</span> from Italy.
            </h1>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Game Development</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <a href="#">Learn More</a>
            </div>
            <div>
              <i className="fa-solid fa-crop"></i>
              <h2>VR Development</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <a href="#">Learn More</a>
            </div>
            <div>
              <i className="fa-brands fa-app-store"></i>
              <h2>Mobile Development</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">Portfolio</h1>
          <div className="work-list">
            <div className="work">
              <img src={work1} />
              <div className="layer">
                <h3>Trash Turf</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work2} />
              <div className="layer">
                <h3>The Engineer</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Levis Umbra</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={user} />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About me</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>

              <div className="tab-titles">
                <p
                  className="tab-links active-link"
                  onClick={handleOpenTab("skills")}
                >
                  Skills
                </p>
                <p className="tab-links" onClick={handleOpenTab("experience")}>
                  Experience
                </p>
                <p className="tab-links" onClick={handleOpenTab("education")}>
                  Education
                </p>
                <p className="tab-links" onClick={handleOpenTab("languages")}>
                  Languages
                </p>
              </div>
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li>
                    <span>Game Engines</span>
                    <br />
                    Unreal Engine 5 and Unity
                  </li>
                  <li>
                    <span>Programming Languages</span>
                    <br />
                    C++ and C#
                  </li>
                  <li>
                    <span>Version Control</span>
                    <br />
                    Perforce, Plastic SCM and SourceTree
                  </li>
                  <li>
                    <span>3D Modeling</span>
                    <br />
                    Blender
                  </li>
                </ul>
              </div>
              <div className="tab-contents" id="experience">
                <ul>
                  <li>
                    <span>2023 - 2025 [Rome, Italy · Remote]</span>
                    <br />
                    Unreal Engine 5 Programmer at Red Hog Studio
                  </li>
                  <li>
                    <span>2022 - 2023 [Braşov, Romania · On-site]</span>
                    <br />
                    Unity Programmer at NEOMORPH Studio
                  </li>
                  <li>
                    <span>2021 - 2022 [Braşov, Romania · On-site]</span>
                    <br />
                    Junior Unity Programmer intern at NEOMORPH Studio
                  </li>
                </ul>
              </div>
              <div className="tab-contents" id="education">
                <ul>
                  <li>
                    <span>2018 - 2022 [Breda, Netherlands]</span>
                    <br />
                    Breda University of Applied Sciences - Creative Media and
                    Game Technologies (Programming)
                  </li>
                  <li>
                    <span>2018 - 2022 [Rome, Italy]</span>
                    <br />
                    Vigamus Academy - Marketing and Communication in Videogames
                  </li>
                  <li>
                    <span>2015 - 2018 [Rome, Italy]</span>
                    <br />
                    Roma Tre University - Biology
                  </li>
                </ul>
              </div>
              <div className="tab-contents" id="languages">
                <ul>
                  <li>
                    <span>English</span>
                    <br />
                    IELTS Certificate B1
                  </li>
                  <li>
                    <span>Italian</span>
                    <br />
                    Native speaker
                  </li>
                  <li>
                    <span>French</span>
                    <br />
                    Read and Listening
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact me</h1>
              <p>
                <i className="fa-solid fa-paper-plane"></i>{" "}
                federico.dellaquila1993@gmail.com
              </p>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/federico-dellaquila"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/FedericoA11208" target="_blank">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://github.com/FedericoDellAquila" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <a href="resources/CV.pdf" target="_blank" className="btn btn2">
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="0e79b6d6-37ba-453c-bfb0-8c5f3eb52296"
                />

                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="text"
                  name="Email"
                  placeholder="Your email"
                  required
                />
                <textarea name="Message" rows={6} placeholder="Your Message" />
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <script>

    var tablinks = document.getElementsByclassNameName("tab-links");
    var tabcontents = document.getElementsByclassNameName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classNameList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classNameList.remove("active-tab");
        }
        event.currentTarget.classNameList.add("active-link");
        document.getElementById(tabname).classNameList.add("active-tab");
    }

</script>

<script>

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }

</script>

<script>
    document.getElementById("contact-form").addEventListener("submit", async function(event) {
        event.preventDefault();
        const response = await fetch("/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            })
        });
        const result = await response.json();
        document.getElementById("response").textContent = result.message;
    });
</script> */}
    </>
  );
}
