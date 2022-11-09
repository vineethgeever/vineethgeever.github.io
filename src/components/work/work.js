import { Col, Row } from 'react-bootstrap';

import portfolioInfo from '../../data/portfolio-info.json';

import './work.css';

const Work = () => {

    return (
        <div id="technology" className="work">
            <h3>My tech stack</h3>
            <Row>
                {portfolioInfo.technologies && portfolioInfo.technologies.map((item, key) => {
                    return (
                        <Col className="technology" key={key} xs={2} md={2}>
                            <div className="icon">
                                <img src={process.env.PUBLIC_URL + item.imagePath} alt="" />
                            </div>
                            <span>{item.name}</span>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Work;