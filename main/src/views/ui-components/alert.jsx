import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    Button,
    Row,
    CardSubtitle,
    CardText,
    Col,
    CardImg
} from 'reactstrap';

import bus from '../../assets/images/big/bus.jpg';
import taxi from '../../assets/images/big/taxi.jpg';
import scooter from '../../assets/images/big/scooter.jpg';

const Alerts = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <h5 className="mb-3">Public Transportation</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card className="transCard">
                        <CardImg top width="100%" src={bus} />
                        <CardBody>
                            <CardTitle>Bus - Föli</CardTitle>
                            <CardText>Turku Region Public Transport, also known as Föli.</CardText>
                            <CardText>On the streets, Föli is visible in the bright yellow buses driving by</CardText>
                            <div className="btn-container">
                                <Button className="btn" a href="https://foli.fi/en" target="blank">Föli</Button> &nbsp;
                                <Button className="btn" a href="http://www.foli.fi/en/node/4030/" target="_blank">Ticket prices</Button> &nbsp;
                                <Button className="btn" a href="https://www.foli.fi/en/citybikes" target="_blank">Citybikes</Button> &nbsp;
                                <Button className="btn" a href="https://www.foli.fi/en/node/1601/" target="_blank">Timetables</Button> &nbsp;
                                <Button className="btn" a href="http://www.turku.fi/mobileticket" target="_blank">Mobile ticket</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card className="transCard">
                        <CardImg top width="100%" src={taxi} />
                        <CardBody>
                            <CardTitle>Taxidata</CardTitle>
                            <CardText>Taxidata has over 450 taxis in their fleet and they are always open.</CardText>
                            <CardText>Taxidata has an app that let's you book a taxi for free.</CardText>
                            <CardText>Taxidata phone number: 0210041</CardText>
                            <div className="btn-container">
                                <Button className="btn" a href="tel:0210041" target="_blank">Call a taxi</Button> &nbsp;
                                <Button className="btn" a href="https://taxidata.fi/?lang=en" target="_blank">Taxidata website</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={scooter} />
                        <CardBody>
                            <CardTitle>Electrical scooters</CardTitle>
                            <CardText>There's two scooter companies in Turku that offer easy travel around Turku</CardText>
                            <div className="btn-container">
                                <Button a href="https://app.adjust.com/48s7k5x?campaign=how_to_voi&adgroup=FI" target="_blank">Voi</Button>&nbsp;
                                <Button a href="https://app.adjust.com/93rqtl6?redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tier.app&redirect_ios=https%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Ftier%2Fid1436140272" target="_blank">Tier</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-4*/}
            {/* --------------------------------------------------------------------------------
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />Alert with Dissmissing
                </CardTitle>

                <CardBody className="">
                    <div>
                        <Alert
                            color="info"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}>
                            I am an alert and I can be dismissed!
                        </Alert>
                    </div>
                </CardBody>
            </Card>*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-5*/}
            {/* --------------------------------------------------------------------------------
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
                    Alert with Uncontrolled [disable] Alerts
                </CardTitle>

                <CardBody className="">
                    <div>
                        <UncontrolledAlert color="info">
                            I am an alert and I can be dismissed!
                        </UncontrolledAlert>
                    </div>
                </CardBody>
            </Card>*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-6*/}
            {/* --------------------------------------------------------------------------------
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
                    Alerts without fade
                </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert
                            color="primary"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}
                            fade={false}>
                            I am a primary alert and I can be dismissed without animating!
                        </Alert>
                        <UncontrolledAlert color="warning" fade={false}>
                            I am an alert and I can be dismissed without animating!
                        </UncontrolledAlert>
                    </div>
                </CardBody>
            </Card>*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Alerts;
