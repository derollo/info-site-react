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
                            <h5>Near city center</h5>
                            <ul>
                                <li><u>Maanantaimarket (Kristiinankatu 6)</u></li>
                                <p>The best second hand shop in the city (or maybe the whole of Finland?). The atmosphere here is just wonderful! There should be more visually 
                                    pleasing fleas of this type. The score is also that the general price level is not similar to the metropolitan area.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.maanantaimarket.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/2jbTxLmLNo8KxNcZ6" target="blank">Location</Button>
                                </p>
                                
                                
                                <li><u>Merkitys 2nd hand shop (Linnankatu 19b)</u></li>
                                <p>The flea market, which opens in February (February 8, 2020), focuses on selling women's and men's clothing as well as shoes and accessories.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://merkitysshop.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/amws1jUbLK2MYErDA" target="blank">Location</Button>
                                </p>

                                <li><u>Puutorin kirppis (Brahenkatu 14)</u></li>
                                <p>A dim but quite good flea market right next to Puutori. The favorite flea of many Turku residents! There’s a real lot of “new” stuff on sale here, 
                                    while I personally like places where a lot of vintage finds are also made.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.puutorinkirppis.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://g.page/Puutorinkirppis?share" target="blank">Location</Button>
                                </p>

                                <li><u>UFF (Humalistonkatu 5)</u></li>
                                <p>Turku's only UFF is located on Humalistonkatu and usually has a very diverse selection.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://uff.fi/aukioloajat/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/FQucEC9hf5sTSE4R7" target="blank">Location</Button>
                                </p>

                                <li><u>Dirty Hippies Second Hand & Lifestyle (Humalistonkatu 13)</u></li>
                                <p>Newcomer to Turku flea field. Cozy commercial space near the train station.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://dirtyhippieslifestyle.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://g.page/dirtyhippieslifestyle?share" target="blank">Location</Button>
                                </p>
                                
                                <li><u>Ilona Second Hand & Cafe (Yliopistonkatu 15)</u></li>
                                <p>The store, which opens in March, also hides a café. Clothes and accessories for sale!
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.secondhandilona.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/VoVSXSX4uPXaQkmQ6" target="blank">Location</Button>
                                </p>

                                <li><u>Pelastusarmeijan kirpputori (Humalistonkatu 9)</u></li>
                                <p>Here I sometimes go shopping for dishes!
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.pelastusarmeija.fi/paikkakunnat/turku" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/1PDYQLt8aKzQgqGT7" target="blank">Location</Button>
                                </p>
                            </ul>

                            <h5>Länsikeskus</h5>
                            <ul>
                                <li><u>Kirppis-Center (Viilarinkatu 4)</u></li>
                                <p>A decent old union flea with lots to roam. I would see that the level of the Länkkärin Flea Center may have slightly decreased after the 
                                    Länsiykkönen flea entered the patterns.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.kirppiscenter.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/6oEWDwGnEuEmfteeA" target="blank">Location</Button>    
                                </p>

                                <li><u>Länsiykkösen kirppis (Viilarinkatu 5)</u></li>
                                <p>The entrance to this flea is excitingly located in the parking garage. The “little sister” of the powder flea.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.lansiykkosenkirppis.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://g.page/Lansiykkosenkirppis?share" target="blank">Location</Button>
                                </p>

                                <li><u>Kontti (Viilarinkatu 5)</u></li>
                                <p>I'm a Container people. THERE ARE ALWAYS DISCOVERIES TO MAKE!
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://kontti.punainenristi.fi/turku" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/CxdqVskL2vGDoa2J7" target="blank">Location</Button>
                                </p>

                                <li><u>Pelastusarmeijan kirpputori (Viilarinkatu 3)</u></li>
                                <p>Cute little flea in connection with the Prisma building.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.pelastusarmeija.fi/paikkakunnat/turku" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/3CW9WGmRK7XWxA4U8" target="blank">Location</Button>
                                </p>
                                
                            </ul>

                            <h5>Other locations</h5>
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
