import React from 'react';
import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardImg, CardText } from 'reactstrap';

import bus from '../../assets/images/big/bus.jpg';
import taxi from '../../assets/images/big/taxi.jpg';
import scooter from '../../assets/images/big/scooter.jpg';

const Badges = () => {
    return (
        <div>

<h5 className="mb-3">Shopping</h5>
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

            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-store mr-2"> </i>
                            Thrift Shops Turku
                        </CardTitle>
                        <CardBody>
                            <h6>Near city center</h6>
                            <ul>
                                <li>Maanantaimarket</li>
                                <li>Merkitys 2nd hand shop</li>
                                <li>Puutorin kirppis</li>
                                <li>UFF</li>
                                <li>Dirty Hippies Second Hand & Lifestyle</li>
                                <li>Ilona Second Hand & Cafe</li>
                                <li>Pelastusarmeijan kirppitori</li>
                                <li>VintagEija´s</li>
                            </ul>

                            <h6>Länsikeskus</h6>
                            <ul>
                                <li>Kirppis-Center</li>
                                <li>Länsiykkösen kirppis</li>
                                <li>Kontti</li>
                                <li>Pelastusarmeijan kirpputori</li>
                            </ul>

                            <h6>Other locations</h6>
                            <ul>
                                <li>Kirppiskeskus Hassinen</li>
                                <li>Laiskan Kirppis</li>
                                <li>Mimmin kirppis</li>
                                <li>Manhattanin Kirppis-Center</li>
                            </ul>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="12" sm="12">
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
                    {/* Possible Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
        </div >
    );
}

export default Badges;
