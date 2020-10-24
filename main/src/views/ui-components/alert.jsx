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
                    <Card>
                        <CardImg top width="100%" src={bus} />
                        <CardBody>
                            <CardTitle>Bus - Föli</CardTitle>
                            <CardText>Turku Region Public Transport, also known as Föli, is a collaboration between Turku, Kaarina, Raisio, Lieto, Naantali and Rusko.</CardText>
                            <Button a href="https://foli.fi/en" target="blank">Föli</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={taxi} />
                        <CardBody>
                            <CardTitle>Taxidata</CardTitle>
                            <CardText>Taxidata Oy is one of the largest taxi dispatch centers. Taxidata has over 450 taxis in their fleet and they are always open.</CardText>
                            <Button a href="tel:0210041">Book a taxi</Button>
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
                            <Button a href="https://app.adjust.com/48s7k5x?campaign=how_to_voi&adgroup=FI" target="_blank">Voi</Button>&nbsp;
                            <Button a href="https://app.adjust.com/93rqtl6?redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tier.app&redirect_ios=https%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Ftier%2Fid1436140272" target="_blank">Tier</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0"><i className="mdi mdi-bus"> </i>Bus - Föli</CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <h4>Turku Region Public Transport, also known as Föli, is a collaboration between Turku, Kaarina, Raisio, Lieto, Naantali and Rusko.</h4>
                        <ul>
                            <li>The joint public transport services of these six municipalities were launched on 1 July 2014.</li>
                            <li>A flat rate is applied to the entire region, which means that passengers are charged the same price regardless of the distance travelled. In other words, the same tickets are valid across the region.</li>
                            <li>The public transport system’s name is Föli. The name Föli has its origins in Southwest Finland. In the southwestern dialect of Finnish, the phrase ‘ollaan fölissä’ means ‘being onboard’.</li>
                            <li>On the streets, Föli is visible in the bright yellow buses driving by.</li>
                            <li>A total of 27 million journeys were made in 2017.</li>
                            <li>The payment system used on Föli buses is for the most part based on a variety of bus cards. You can buy a single ticket from the driver. Mobile tickets are also in use.</li>
                            <Button className="btn" color="primary" size="lg" block a href="http://www.foli.fi/en/node/4030/" target="_blank">Ticket prices</Button>
                            <Button className="btn" color="primary" size="lg" block a href="https://www.foli.fi/en/citybikes" target="_blank">Citybikes</Button>
                            <Button className="btn" color="primary" size="lg" block a href="https://www.foli.fi/en/node/1601/" target="_blank">Timetables</Button>
                            <Button className="btn" color="primary" size="lg" block a href="http://www.turku.fi/mobileticket" target="_blank">Mobile ticket</Button>
                        </ul>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-2*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0"><i className="mdi mdi-taxi" />Taxi</CardTitle>

                <CardBody className="">
                    <div>
                        <ul>
                            <h4>Taxidata Turku</h4>
                            <p>Taxidata Oy is one of the largest taxi dispatch centers. They operate in the following cities: Turku, Kaarina, Raisio, Rusko, Naantali, Lieto, Paimio, Salo, Halikko, 
                                Pori, Ulvila and now also in Uusikaupunki. Taxidata has over 450 taxis in their fleet and they are always open.</p>
                            <p>You can book a taxi from the number 0210041 in Finland and from abroad +358 600 14121.
                                Cost of the call is 1,84€ + telecom operator fees.
                                All calls are recorded for customer service improvement and reclaim handling purposes.</p>

                            <Button className="btn" color="primary" size="lg" block a href="tel:0210041" target="_blank">Call 0210041 to book a taxi</Button>
                            <Button className="btn" color="primary" size="lg" block a href="https://taxidata.fi/?lang=en" target="_blank">Taxidata website</Button>
                        </ul>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-3*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0"><i className="mdi mdi-transfer" />Additional transport</CardTitle>

                <CardBody className="">
                    <div>
                        <ul>
                            <h4>Scooters</h4>
                            <p>There's two scooter companies in Turku that offer easy travel around Turku</p>
                            <Button className="btn" color="primary" size="lg" block a href="https://app.adjust.com/48s7k5x?campaign=how_to_voi&adgroup=FI" target="_blank">VOI Scooters app</Button>
                            <Button className="btn" color="primary" size="lg" block a href="https://app.adjust.com/93rqtl6?redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tier.app&redirect_ios=https%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Ftier%2Fid1436140272" target="_blank">Tier Scooters app</Button>
                        </ul>
                    </div>
                </CardBody>
            </Card>
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
