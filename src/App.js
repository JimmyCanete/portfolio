//import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {
    faBars,
    faSun,
    faMoon,
    faCode,
    faCaretUp,
    faCaretDown,
    faServer,
    faGear,
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showFrontendSkills, setShowFrontendSkills] = useState(true);
    const [showBackendSkills, setShowBackendSkills] = useState(false);
    const [showToolsSkills, setShowToolsSkills] = useState(false);
    const [showMorePage, setShowMorePage] = useState(1);
    const [showCitExperience, setShowCitExperience] = useState(false);
    const [showUpSkillEducation, setShowUpskillEducation] = useState(false);

    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experiencesRef = useRef(null);
    const educationRef = useRef(null);
    const contactsRef = useRef(null);

    const scrollToSection = (ref) => {
        const yOffset = -45;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    };

    return (
        <div className="App">
            <div className={'navbar'}>
                <div className={'container-mobile'}>
                    <FontAwesomeIcon className={"menu-icon"} icon={faBars}
                                     onClick={() => setShowNavMenu(!showNavMenu)}/>
                    {darkMode ? <FontAwesomeIcon className={"moon-icon"} icon={faMoon} onClick={() => {
                        setDarkMode(!darkMode)
                        document.body.classList.toggle("dark")
                    }}/> : <FontAwesomeIcon className={"sun-icon"} icon={faSun} onClick={() => {
                        document.body.classList.toggle("dark")
                        setDarkMode(!darkMode)
                    }}/>}

                    {showNavMenu && <div className={'menu'}>
                        <div className={"links"}>
                            <button onClick={() => scrollToSection(aboutMeRef)}>About Me</button>
                            <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
                            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                            <button onClick={() => scrollToSection(experiencesRef)}>Experiences</button>
                            <button onClick={() => scrollToSection(educationRef)}>Education</button>
                            <button onClick={() => scrollToSection(contactsRef)}>Contacts</button>
                        </div>

                        <div className={"arrow"}></div>
                    </div>}

                </div>

                <div className={'container-desk'}>
                    {darkMode ? <FontAwesomeIcon className={"moon-icon"} icon={faMoon} onClick={() => {
                        setDarkMode(!darkMode)
                        document.body.classList.toggle("dark")
                    }}/> : <FontAwesomeIcon className={"sun-icon"} icon={faSun} onClick={() => {
                        document.body.classList.toggle("dark")
                        setDarkMode(!darkMode)
                    }}/>}

                    <div className={'menu'}>
                        <div className={"links"}>
                            <button onClick={() => scrollToSection(aboutMeRef)}>About Me</button>
                            <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
                            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                            <button onClick={() => scrollToSection(experiencesRef)}>Experiences</button>
                            <button onClick={() => scrollToSection(educationRef)}>Education</button>
                            <button onClick={() => scrollToSection(contactsRef)}>Contacts</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={"container"}>
                <section className={"about-me"} ref={aboutMeRef}>
                    <div className={"avatar"}
                         style={{backgroundImage: `url('http://localhost:3000/images/photo.jpg')`}}></div>

                    <div className={"content"}>
                        <div className={'information'}>
                            <h1>Web Developer</h1>
                            <p>I'm João Canete, I'm 23 years old, living in Portugal and I have 1 year of experience in
                                the IT industry.
                                I'm a Full Stack developer and I have the ambition to grow in the area, I like to
                                improve my skills and work on challenging projects.
                                Course <span className={"strong"}>WEB Frontend Javascript</span> (guided to frontend,
                                but also with knowledge of backend).
                                Main technologies: <span className={"strong"}>React, Javascript, NodeJs and Java</span>
                            </p>
                        </div>

                        <div className={"buttons"}>
                            <a href={"http://localhost:3000/cv/Curriculum-JoãoCanete.pdf"}
                               download={true}>Curriculum</a>
                            <a href={"https://www.linkedin.com/in/joaocanete/"} rel="noreferrer"
                               target={"_blank"}>Linkedin</a>
                            <a href={"https://github.com/JimmyCanete"} rel="noreferrer" target={"_blank"}>Github</a>
                        </div>
                    </div>

                </section>

                <hr/>

                <section className={"skills"} ref={skillsRef}>

                    <h2>Skills</h2>
                    <div className={"section-title-line"}></div>

                    <div className={'skill'}>
                        <div className={"skill-card"} onClick={() => setShowFrontendSkills(!showFrontendSkills)}>
                            <FontAwesomeIcon icon={faCode} className={"skill-icon"}/>

                            <div className={"info"}>
                                <h3>Frontend</h3>
                            </div>

                            {showFrontendSkills ? <FontAwesomeIcon icon={faCaretUp} className={"close-skill"}/> :
                                <FontAwesomeIcon icon={faCaretDown} className={"open-skill"}/>}
                        </div>

                        {showFrontendSkills && <div className={"skill-list"}>
                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>HTML</h4>
                                    <span className={"skill-number"}>65%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-html"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Css</h4>
                                    <span className={"skill-number"}>65%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-css"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Javascript</h4>
                                    <span className={"skill-number"}>65%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-js"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>React</h4>
                                    <span className={"skill-number"}>75%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-react"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>VueJs</h4>
                                    <span className={"skill-number"}>15%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-vue"}></span>
                                </div>
                            </div>
                        </div>}

                    </div>

                    <div className={'skill'}>
                        <div className={"skill-card"} onClick={() => setShowBackendSkills(!showBackendSkills)}>
                            <FontAwesomeIcon icon={faServer} className={"skill-icon"}/>

                            <div className={"info"}>
                                <h3>Backend</h3>
                            </div>

                            {showBackendSkills ? <FontAwesomeIcon icon={faCaretUp} className={"close-skill"}/> :
                                <FontAwesomeIcon icon={faCaretDown} className={"open-skill"}/>}
                        </div>

                        {showBackendSkills && <div className={"skill-list"}>
                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Java</h4>
                                    <span className={"skill-number"}>65%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-java"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>NodeJs</h4>
                                    <span className={"skill-number"}>60%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-node"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>MySql</h4>
                                    <span className={"skill-number"}>60%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-mysql"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>C#</h4>
                                    <span className={"skill-number"}>10%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-csharp"}></span>
                                </div>
                            </div>
                        </div>}

                    </div>

                    <div className={'skill'}>
                        <div className={"skill-card"} onClick={() => setShowToolsSkills(!showToolsSkills)}>
                            <FontAwesomeIcon icon={faGear} className={"skill-icon"}/>

                            <div className={"info"}>
                                <h3>Tools</h3>
                            </div>

                            {showToolsSkills ? <FontAwesomeIcon icon={faCaretUp} className={"close-skill"}/> :
                                <FontAwesomeIcon icon={faCaretDown} className={"open-skill"}/>}
                        </div>

                        {showToolsSkills && <div className={"skill-list"}>
                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Git</h4>
                                    <span className={"skill-number"}>70%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-git"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Jira</h4>
                                    <span className={"skill-number"}>55%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-jira"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Figma</h4>
                                    <span className={"skill-number"}>25%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-figma"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Photoshop</h4>
                                    <span className={"skill-number"}>20%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-photoshop"}></span>
                                </div>
                            </div>

                            <div className={"skill-data"}>
                                <div className={"skill-title"}>
                                    <h4>Excel</h4>
                                    <span className={"skill-number"}>65%</span>
                                </div>

                                <div className={"skill-bar"}>
                                    <span className={"skill-percentage skill-excel"}></span>
                                </div>
                            </div>
                        </div>}

                    </div>

                </section>

                <section className={"projects"} ref={projectsRef}>
                    <h2>Projects</h2>
                    <div className={"section-title-line"}></div>


                    {showMorePage === 1 && <div className={"page-one"}>
                        <div className={"project"}>

                            <a href={"https://flic.kr/s/aHBqjAKfog"} rel="noreferrer" target={"_blank"}>
                                <img src={"http://localhost:3000/images/uptube.png"} className={"project-image"}
                                     alt={"project"}/>
                            </a>

                            <div className={"project-info"}>
                                <h3>Uptube</h3>
                                <p className={"description"}>Streaming platform, where it is possible to
                                    create an account, has a login system, open a channel and edit it, post videos, has
                                    a system of views, likes and dislikes, comments, video editing, automatic generation
                                    of thumbnails , channel subscription, among other features...</p>

                                <p className={"description"}>A back office was also developed, in order to have a
                                    platform administration system.</p>

                                <div className={"languages"}>
                                    <p>React</p>
                                    <p>NodeJs</p>
                                    <p>MySql</p>
                                </div>

                                <div className={"icons"}>
                                    <a href={"https://flic.kr/s/aHBqjAKfog"} rel="noreferrer" target={"_blank"}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className={"project"}>

                            <a href={"https://upbnb-three.vercel.app/home"} rel="noreferrer" target={"_blank"}>
                                <img src={"http://localhost:3000/images/upbnb.png"} className={"project-image"}
                                     alt={"project"}/>
                            </a>

                            <div className={"project-info"}>
                                <h3>Pig Game</h3>
                                <p className={"description"}>Platform for booking houses, it is possible to
                                    place houses as favorites, search for houses or locations, when clicking on a house
                                    you can see its details, including the description of the house, what is or is not
                                    allowed , description of the host, comments from other users and the rating of the
                                    house.</p>

                                <p className={"description"}>This project consumes an external API and has been deployed
                                    to vercel.
                                </p>

                                <div className={"languages"}>
                                    <p>React</p>
                                </div>

                                <div className={"icons"}>
                                    <a href={"https://upbnb-three.vercel.app/home"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </a>

                                    <a href={"https://github.com/JimmyCanete/UpBnb"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faCode}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={"project"}>

                            <a href={"https://jimmycanete.github.io/monster-slayer-vueJS/"} rel="noreferrer"
                               target={"_blank"}>
                                <img src={"http://localhost:3000/images/monster-slayer.png"} className={"project-image"}
                                     alt={"project"}/>
                            </a>

                            <div className={"project-info"}>
                                <h3>Monster Slayer</h3>
                                <p className={"description"}>Single player game where the objective is to defeat the
                                    monster before the monster defeats the player, it has a life system for the player
                                    and the monster that is controlled at each turn, it has a battle log where it is
                                    possible to check the damage given, received or healed and also a turn analysis
                                    system to use the special attack.</p>

                                <p className={"description"}>This project was deployed on the github pages.</p>

                                <div className={"languages"}>
                                    <p>VueJs</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>

                                <div className={"icons"}>
                                    <a href={"https://jimmycanete.github.io/monster-slayer-vueJS/"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </a>

                                    <a href={"https://github.com/JimmyCanete/monster-slayer-vueJS"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faCode}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {showMorePage === 2 && <div className={"page-two"}>

                        <div className={"project"}>

                            <a href={"https://jimmycanete.github.io/pig-game-js/"} rel="noreferrer" target={"_blank"}>
                                <img src={"http://localhost:3000/images/pig-game.png"} className={"project-image"}
                                     alt={"project"}/>
                            </a>

                            <div className={"project-info"}>
                                <h3>Pig Game</h3>
                                <p className={"description"}>A multiplayer game based on luck, 2 players must play
                                    against each other to reach 100 points before the other, when withdrawing 1 on the
                                    dice the player loses the points accumulated in the move and passes the turn, if he
                                    holds the current points, those same ones are credited to the total points and the
                                    turn passes..</p>

                                <p className={"description"}>This project was deployed on the github pages.</p>
                                <div className={"languages"}>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                </div>

                                <div className={"icons"}>
                                    <a href={"https://jimmycanete.github.io/pig-game-js/"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </a>

                                    <a href={"https://github.com/JimmyCanete/pig-game-js"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faCode}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={"project"}>

                            <a href={"https://jimmycanete.github.io/game-site/index.html"} rel="noreferrer"
                               target={"_blank"}>
                                <img src={"http://localhost:3000/images/game-site.png"} className={"project-image"}
                                     alt={"project"}/>
                            </a>

                            <div className={"project-info"}>
                                <h3>Game Website</h3>
                                <p className={"description"}>Site with 3 types of multiplayer games, being tic-tac-toe,
                                    4 in a row and memory game, system of time spent per game, system of rounds,
                                    analysis of winner or ties, system of history of games being possible to erase,
                                    choose decks in the game from memory, animations in 4 in a row</p>

                                <p className={"description"}>This project was deployed on the github pages.</p>
                                <div className={"languages"}>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                </div>

                                <div className={"icons"}>
                                    <a href={"https://jimmycanete.github.io/game-site/index.html"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </a>

                                    <a href={"https://github.com/JimmyCanete/game-site"} rel="noreferrer"
                                       target={"_blank"}>
                                        <FontAwesomeIcon icon={faCode}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}


                    {showMorePage === 1 && <div className={"projects-btns"}>
                        <p>1/2</p>
                        <button className={"show-more-btn"} onClick={() => {
                            scrollToSection(projectsRef);
                            setShowMorePage(showMorePage + 1);
                        }}>Show More
                        </button>
                    </div>}

                    {/*showMorePage >= 2 && showMorePage < 3 && <div className={"projects-btns"}>
                        <button className={"show-less-btn"} onClick={() => setShowMorePage(0)}>Show Less</button>
                        <button className={"show-more-btn"} onClick={() => setShowMorePage(showMorePage + 1)}>Show More</button>

                    </div>*/}

                    {showMorePage === 2 && <div className={"projects-btns"}>
                        <button className={"show-less-btn"} onClick={() => {
                            scrollToSection(projectsRef);
                            setShowMorePage(1);
                        }}>Show Less
                        </button>
                        <p>2/2</p>
                        <button className={"show-more-btn"} disabled={true}
                                style={{cursor: "not-allowed", background: "gray"}}>Show More
                        </button>
                    </div>}
                </section>

                <section className={"experiences"} ref={experiencesRef}>
                    <h2>Experiences</h2>
                    <div className={"section-title-line"}></div>

                    <div className={"experience"}>
                        <div className={"experience-card"} onClick={() => setShowCitExperience(!showCitExperience)}>

                            <div className={"left-side"}>
                                <img className={"company-logo"} src={'http://localhost:3000/images/ciandt-logo.png'}
                                     alt={"company-logo"}></img>

                                <div className={"info"}>
                                    <div className={"first-info"}>
                                        <h4>Internee Full Stack Developer <span>- 03/2023 to 06/2023</span></h4>
                                    </div>

                                    <div className={"second-info"}>
                                        <p>CI&T - Hybrid</p>
                                    </div>

                                </div>
                            </div>

                            {showCitExperience ? <FontAwesomeIcon icon={faCaretUp} className={"close-skill"}/> :
                                <FontAwesomeIcon icon={faCaretDown} className={"open-skill"}/>}
                        </div>

                        {showCitExperience && <div className={"cit-list"}>
                            <div className={"processes"}>
                                <h5>Processes:</h5>
                                <ul>
                                    <li>Creation of a dynamic vaccination application in order to optimize old
                                        processes
                                    </li>
                                    <li>Project Planning with squad and implemented using Kanban methodology in Jira
                                    </li>
                                    <li>Write clean code</li>
                                    <li>Implementation of the application in a cloud</li>
                                    <li>Made a Gemba presentation for all the members who belong to the Portugal
                                        office
                                    </li>
                                    <li>QA Tester</li>
                                </ul>
                            </div>

                            <div className={"languages"}>
                                <h5>Languages:</h5>
                                <ul>
                                    <li>React</li>
                                    <li>Java</li>
                                </ul>
                            </div>

                            <div className={"tools"}>
                                <h5>Tools:</h5>
                                <ul>
                                    <li>Jira</li>
                                    <li>Figma</li>
                                    <li>Miro</li>
                                    <li>Bitbucket</li>
                                </ul>
                            </div>

                            <div className={"projects"}>
                                <h5>Projects:</h5>
                                <ul>
                                    <li>Vaccine LA</li>
                                    <li>Gemba Apresentation</li>
                                </ul>
                            </div>

                        </div>}
                    </div>
                </section>

                <section className={"educations"} ref={educationRef}>
                    <h2>Education</h2>
                    <div className={"section-title-line"}></div>

                    <div className={"education"}>
                        <div className={"education-card"}
                             onClick={() => setShowUpskillEducation(!showUpSkillEducation)}>

                            <div className={"left-side"}>
                                <img className={"company-logo"} src={'http://localhost:3000/images/upskill-logo.jpg'}
                                     alt={"company-logo"}></img>

                                <div className={"info"}>
                                    <div className={"first-info"}>
                                        <h4>Web Frontend Javascript <span>- 2022 to 2023</span></h4>
                                    </div>

                                    <div className={"second-info"}>
                                        <p>IEFP - Presencial</p>
                                    </div>

                                </div>
                            </div>

                            {showUpSkillEducation ? <FontAwesomeIcon icon={faCaretUp} className={"close-skill"}/> :
                                <FontAwesomeIcon icon={faCaretDown} className={"open-skill"}/>}
                        </div>

                        {showUpSkillEducation && <div className={"upskill-list"}>
                            <div className={"subjects"}>
                                <h5>Subjects:</h5>
                                <ul>
                                    <li>Algorithms</li>
                                    <li>Data Structure</li>
                                    <li>Introdution to Frontend Appliations</li>
                                    <li>Introdution to programming in Javascript</li>
                                    <li>Databases (relational and non-relational)</li>
                                    <li>Software Engineering Principles</li>
                                    <li>Cyber-Security</li>
                                    <li>Introdution to Node.js</li>
                                    <li>Introdution to React</li>
                                    <li>Web Lab</li>
                                    <li>Skills for the World of Work</li>
                                </ul>
                            </div>

                            <div className={"projects"}>
                                <h5>Projects:</h5>
                                <ul>
                                    <li>Uptube</li>
                                    <li>Airbnb</li>
                                    <li>Game Website</li>
                                </ul>
                            </div>

                        </div>}
                    </div>
                </section>

                <section className={"contacts"} ref={contactsRef}>
                    <h2>Contacts</h2>
                    <div className={"section-title-line"}></div>

                    <div className={"content"}>
                        <img className={"company-logo-desk"} src={'http://localhost:3000/images/contact.jpg'}
                             alt={"contact"}></img>
                        <div className={"icons"}>
                            <div className={"phone"}>
                                <FontAwesomeIcon icon={faPhone}/>
                                <div>
                                    <p>Mobile Phone</p>
                                    <a href={"tel:933466860"}>+351933466860</a>
                                </div>

                            </div>

                            <div className={"email"}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <div>
                                    <p>Email</p>
                                    <a href={"mailto:jimmycanete1@gmail.com"}>jimmycanete1@gmail.com</a>
                                </div>

                            </div>
                        </div>

                        <img className={"company-logo"} src={'http://localhost:3000/images/contact.jpg'}
                             alt={"contact"}></img>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default App;
