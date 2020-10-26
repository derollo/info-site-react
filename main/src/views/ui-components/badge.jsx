import React from 'react';
import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardImg, CardText } from 'reactstrap';

import thrift from '../../assets/images/big/thrift.jpg';
import mall from '../../assets/images/big/mall.jpg';
import cafe from '../../assets/images/big/cafe.jpg';

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
                        <CardImg top width="100%" src={thrift} />
                        <CardBody>
                            <CardTitle>Thrift shops</CardTitle>
                            <CardText>A few thrift shops around Turku. You can either visit the stores websites or press "location" to open google maps.</CardText>
                            <Button a href="#jump-to-page">Thrift shops</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={mall} />
                        <CardBody>
                            <CardTitle>Malls</CardTitle>
                            <CardText>There's a few malls around Turku, here's a list of them and their locations.</CardText>
                            <Button a href="tel:0210041">Malls</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={cafe} />
                        <CardBody>
                            <CardTitle>Cafés</CardTitle>
                            <CardText>Here's a list of tripadvisors top 10 cafés in Turku. There are hundred of cafeés but these are the most popualr ones.</CardText>
                            <Button a href="https://app.adjust.com/48s7k5x?campaign=how_to_voi&adgroup=FI" target="_blank">Cafés</Button>&nbsp;
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
                                <li><u>Kirppiskeskus Hassinen (Hakakatu 13)</u></li>
                                <p>A huge flea with enough plucking. At the same time there is also a large hall full of magnificent furniture.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.hassinen.info/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/sg6AdZ8kSNYgx68P7" target="blank">Location</Button>
                                </p>

                                <li><u>Laiskan Kirppis (Vanha Hämeentie 29)</u></li>
                                <p>Close to Hassinen's flea. A small but sweet flea market where I last found two lovely sweaters.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="http://www.tsemppi.net/kirppis.html" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/ZP1hWsP2Hv2SHonG6" target="blank">Location</Button>
                                </p>

                                <li><u>Mimmin kirppis (Kaurakatu 44)</u></li>
                                <p>This flea has a bit of that provincial flea atmosphere. Good bargains and moderate prices.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://mimminkirppis.com/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/SGAJcQvjrpD4wzFs5" target="blank">Location</Button>
                                </p>

                                <li><u>Manhattanin Kirppis-Center (Pitkämäenkatu 4)</u></li>
                                <p>A really big traditional flea with over 500 outlets.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.kirppiscenter.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/QihQjQPLT2aDSftx7" target="blank">Location</Button>
                                </p>
                            </ul>
                            
                        </CardBody>
                    </Card>
                </Col>
                
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0"><i className="mdi mdi-store"/>   Malls</CardTitle>

                        <CardBody className="">
                            <div>
                                <h4>Kauppakeskus Skanssi</h4>
                                <p>Skanssi is a shopping center with more than 90 stores & services. Welcome to enjoy every day.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.skanssi.fi/welcome" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://g.page/kauppakeskusskanssi?share" target="blank">Location</Button>
                                </p>

                                <h4>Hansakortteli</h4>
                                <p>The Hansa shopping center offers excellent fashion, leisure and home products stores and services, not forgetting Stockmann, the leading 
                                    department store in the region.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="http://www.hansakortteli.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/RbV7VhYrepuYwq648" target="blank">Location</Button>    
                                </p>

                                <h4>Turun Kauppahalli</h4>
                                <p>Turku Market Hall is the second oldest market hall in Finland, opened in 1896 in the center of Turku. The hall houses both young people and 
                                    the oldest and most traditional companies in Turku. The building was designed by Professor of Architecture Gustaf Nyström. The roof structures 
                                    and the wooden parts of the corridor walls of the shops are still the original structures. In the market hall you will find comprehensive quality 
                                    delicacies for the dining table, but the hall is already an attraction in itself; The market hall belongs to the pearls of Finnish architectural 
                                    heritage and to the highest protection class as a culturally and historically very valuable object.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="http://www.kauppahalli.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/WYiod6nWbSnzHk1L8" target="blank">Location</Button>    
                                </p>

                                <h4>Kauppakeskus Mylly</h4>
                                <p>The Mylly shopping center was opened in 2001. It is located along Raisio with good transport connections. The Mylly, which expanded to more 
                                    than 150 stores and expanded in November 2015, has a floor area of approximately 83,000 square meters. The shopping center serves department 
                                    stores, sports and leisure shops, clothing stores, restaurants, cafes and various specialty shops.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.kirppiscenter.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/QihQjQPLT2aDSftx7" target="blank">Location</Button>    
                                </p>
                            </div>
                        </CardBody>
                    </Card>       


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
