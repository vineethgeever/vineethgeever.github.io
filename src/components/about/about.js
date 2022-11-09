import Stack from 'react-bootstrap/Stack';

import portfolioInfo from '../../data/portfolio-info.json';

import './about.css';

const About = () => {
    return (
        <Stack id="about" className="about" gap={3}>
            <h3>I am...</h3>
            <Stack direction="horizontal" gap={3}>
                <div className="profile">
                    <p>
                        {portfolioInfo.profileDescription}
                    </p>
                </div>
                <div className="profile-side-image ms-auto">
                    <img src={portfolioInfo.profileDescriptionImage} alt="" />
                </div>
            </Stack>
        </Stack>

    );
}

export default About;