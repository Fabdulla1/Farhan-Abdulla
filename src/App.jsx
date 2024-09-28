import linkedIn from './assets/linkedin.png';
import github from './assets/github.png';
import cafeFrog from './assets/cafeFrog.mp4';
import pfp from './assets/pfp.jpg'
import {TypeAnimation} from "react-type-animation";

function App() {
    const logos = {
        'linkedIn': 'https://www.linkedin.com/in/farhan-abdulla/',
        'github':  'https://github.com/Fabdulla1',
        'about' : '#About',
        'experience' : '#Experience',
        'projects' : '#Projects',
    };
    const logoimg = [linkedIn, github];
    const logoN = ['linkedIn', 'github']
    const handleClick = (buttonName) => {
        const url = logos[buttonName];
        if (url) {
            if (url.startsWith('http')) {
                window.open(url, '_blank');
            } else {
                const targetElement = document.querySelector(url);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        } else {
            console.log('No URL found for', buttonName);
        }
    }
    const buttonNames = ['about', 'experience', 'projects']
    // eslint-disable-next-line react/prop-types
    const HeaderButtons = ({caption, onClick}) => {
        return (
            <button style={{font: 'font-sans', fontSize: '2vh', fontWeight: 'normal',
                backgroundColor: 'transparent', color: 'gray'}} onClick={onClick}>
                {caption}
            </button>
        )
    }
    // eslint-disable-next-line react/prop-types
    const LogoButtons = ({image, onClick}) => {
        return (
            <button style={{backgroundColor: 'transparent'}} onClick={onClick}>
                <img src={image} alt={image} />
            </button>
        )
    }
    document.body.style = 'background: #0A2E36'
    document.title = 'Farhan Abdulla';
    return (
        <div className="Site">
            <div className="Contact" style={{
                display: 'block',
                position: 'fixed',
                color: 'white',
                width: '50%',
                marginLeft: '5%'
            }}>
                <div style={{marginLeft:'10%'}}>
                    <img src={pfp} alt="Farhan Abdulla" style={{height:'30%', width: '30%', borderRadius: '50%'}}/>
                </div>
                <text style={{ font:'font-sans', fontSize: '10vh', fontWeight: 'bold'}}>
                    Farhan Abdulla
                </text>
                <h1>
                    <TypeAnimation
                        sequence={[
                            "I am a Software Engineer",
                            1000,
                            "I am a Data Scientist",
                            800,
                            "I am a Project Manager",
                            400,
                            "I am a Problem Solver"
                        ]}
                        repeat={0}
                        style={{fontSize: '5vh', fontWeight: 'normal'}}
                    />
                </h1>
                <h2 style={{fontSize: '2vh', fontWeight: 'normal'}}>
                    {buttonNames.map((name, index) => (
                        <HeaderButtons
                            key={index}
                            caption={name}
                            onClick={() => handleClick(name)}
                        />
                    ))}
                </h2>
                <h3>
                    {logoimg.map((name, index) => (
                        <LogoButtons
                            key={index}
                            image={logoimg[index]}
                            onClick={() => handleClick(logoN[index])}
                        />
                    ))}
                </h3>
            </div>

            <div className="About Me" id={'About'} style={{
                display: "block", width: '50%',
                alignItems: 'end', minHeight: '80vh', overflowY: 'auto', marginLeft: '50%'
            }}>
                <text style={{font: 'font-sans', fontWeight: 'normal', color: 'whitesmoke', fontSize: '3vh'}}>
                    My name is Farhan Abdulla and I am an undergraduate student at <b> UC Berkeley </b> set to graduate
                    in May 2025. I am studying Data Science, with an emphasis in Business and Industrial Analytics, and
                    a minor in Computer Science. Although I may be an undergraduate, I hold strong experience in
                    creating software solutions as seen in my prior work. I began my career as a <b> Software
                    Engineer Research Intern </b> at <a href={"https://www.goodlylabs.org/"}><b> Goodly
                    Labs</b></a> where I worked on
                    improving data variability for training models. Afterwards, I was contracted as a <b> Software
                    Engineer </b> at
                    <a href={"https://3dtholdings.com/"}><b> 3DT Holdings LLC</b></a> where I built the world's first
                    python based touchscreen application for an industrial dip coating machine. I am open to software
                    engineering roles or data science roles. I look forward to speaking with you!
                </text>
                <div className={'Experience'} style={{marginTop: '40%'}} id={'Experience'}>
                    <text style={{
                        font: 'font-sans', fontWeight: 'normal', color: 'white',
                        fontSize: '4vh', marginLeft: '50%'
                    }}>
                        Experience
                    </text>
                </div>
                <text style={{font: 'font-sans', fontWeight: 'normal', color: 'white'}}>
                    <text style={{color: 'gray'}}>May 2024 -- August 2024</text>
                    <b style={{marginLeft: '20%', fontSize: '3vh'}}> Software Engineer</b>
                </text>
                <div style={{
                    font: 'font-sans',
                    fontWeight: 'normal',
                    color: 'white',
                    marginLeft: '20%',
                    marginBottom: '20%'
                }}>
                    <text>
                        Designed, developed, and deployed a pioneering touchscreen application for an industrial dip
                        coating
                        machine using Python's Kivy library. Optimized motor control by programming Arduino sketches in
                        C++
                        and improving motor-software communication via serial protocols, reducing motor response time by
                        2 seconds. Led cross-functional collaboration with machine builders through 12 test runs,
                        ensuring
                        seamless software-hardware integration and minimizing system errors by troubleshooting and
                        resolving bugs.
                    </text>
                </div>
                <text style={{font: 'font-sans', fontWeight: 'normal', color: 'white'}}>
                    <text style={{color: 'gray'}}>January 2024 -- May 2024</text>
                    <b style={{marginLeft: '10%', fontSize: '3vh'}}> Software Engineering Research Intern</b>
                </text>
                <div style={{font: 'font-sans', fontWeight: 'normal', color: 'white', marginLeft: '20%'}}>
                    <text>
                        Integrated company and user content data using React and Django to enhance AI training datasets.
                        Led a team of three, managing workflow and communication with the project manager. Cleaned
                        Twitter data via API and PANDAS, improving data variance and bias in AI models. Presented the
                        work at UC Berkeley’s Data Science Discovery Program Symposium, earning the Best in Show award
                        for tackling misinformation.
                    </text>
                </div>
                <div className={'Projects'} style={{marginTop: '40%'}} id={'Projects'}>
                    <text style={{
                        font: 'font-sans', fontWeight: 'normal', color: 'white',
                        fontSize: '4vh', marginLeft: '40%'
                    }}>
                        Projects
                    </text>
                </div>
                <div style={{
                    font: 'font-sans', fontWeight: 'normal', color: 'white', marginLeft: '40%'
                }}>
                    <text>
                        CAFE FROG
                    </text>
                </div>
                <div>
                    <video src={cafeFrog} muted autoPlay style={{height: '100%', width: '100%', borderRadius: '60%'}}></video>
                </div>
                <div>
                    <text style={{color: 'whitesmoke'}}>
                        Led a cross-functional team of 7 in developing, designing, and marketing a video game using
                        Python's PyGame library. Managing workflows, led a programming team of 3, and implemented a
                        machine learning model for NPC chatbots using the Naive Bayes Algorithm. The game is still yet
                        to be completed but we are 50% of the way done.

                    </text>
                </div>
            </div>
        </div>

    );
}

export default App;
