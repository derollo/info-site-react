import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardImg,
    CardSubtitle,
    CardText,
    CardDeck
} from 'reactstrap';

import img1 from '../../assets/images/big/gym.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Buttons = () => {

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onRadioBtnClick = (rSelected) => {
        setRSelected(rSelected);
    }

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            <h5 className="mb-3">Card Deck</h5>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Sport facilities</CardTitle>
                        <CardText>Take a look at all the sport facilities Turku has to offer. Here you can find gyms, sport centres, trails, routes and much more.</CardText>
                        <div className="btn-container">
                                <Button className="btn" a href="https://www.turku.fi/en/culture-and-sports/sports/sports-facilities/gyms" target="blank">Gyms</Button> &nbsp;
                                <Button className="btn" a href="https://www.turku.fi/en/culture-and-sports/sports/sports-facilities/courts-and-fields" target="_blank">Courts & fields</Button> &nbsp;
                                <Button className="btn" a href="https://www.turku.fi/en/culture-and-sports/sports/sports-facilities/other-outdoor-sports-facilities" target="_blank">Outdoor sports</Button> &nbsp;
                                <Button className="btn" a href="https://www.turku.fi/en/culture-and-sports/sports/sports-facilities/sports-centres" target="_blank">Sport centres</Button> &nbsp;
                                <Button className="btn" a href="https://www.turku.fi/en/culture-and-sports/sports/sports-facilities/swimming-places-and-water-sport" target="_blank">Water activities</Button>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Outdoors and more</CardTitle>
                        <CardText>There's plenty of outdoor activities in Turku, parks, playgrounds and much more. Visit the page Kiss My Turku to find even more activities in Turku and Turku Archipelago.</CardText>
                        <div className="btn-container">
                                <Button className="btn" a href="https://www.google.com/maps/search/turku+parks/@60.4331913,22.2533926,14z" target="_blank">Turku Parks</Button> &nbsp;
                                <Button className="btn" a href="https://www.google.com/maps/search/turku+playgrounds/@60.4320478,22.2570833,14z/data=!3m1!4b1?hl=sv" target="_blank">Playgrounds website</Button> &nbsp;
                                <Button className="btn" a href="https://kissmyturku.com/" target="_blank">Kiss My Turku</Button>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Adventures</CardTitle>
                        <CardText>Check out the different adventure parks, escape rooms, discogolf and other adventures activities. Kupittaa adventure park and Flowpark are two of the most popular activities on tripadvisor.</CardText>
                        <div className="btn-container">
                                <Button className="btn" a href="https://www.tripadvisor.com/Attractions-g189949-Activities-c56-Turku_Southwest_Finland.html" target="_blank">Tripadvisor</Button> &nbsp;
                                <Button className="btn" a href="https://www.visitturku.fi/en/fun-and-well-being-adventures-110494" target="_blank">Visit Turku adventures</Button> &nbsp;
                        </div>
                    </CardBody>
                </Card>
            </CardDeck>

            <Row>
                <Col xs="12" md="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-7*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Buttons;
