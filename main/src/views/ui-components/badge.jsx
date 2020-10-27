import React from 'react';
import { Button, Card, CardBody, CardTitle, Row, Col, CardImg, CardText } from 'reactstrap';

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
                            <Button a href="https://www.kirpputorihaku.com/kirpputori/turku" target="blank">Thrift shops</Button>
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
                            <Button a href="https://www.google.com/search?client=firefox-b-d&q=kauppakeskus+turku" target="blank">Malls</Button>
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
                            <Button a href="https://www.tripadvisor.fi/Restaurants-g189949-c8-Turku_Southwest_Finland.html" target="_blank">Cafés</Button>&nbsp;
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
                            <h5 id="jump">Near city center</h5>
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

                

                {/* --------------------------------------------------------------------------------*/}
                {/* Cafés*/                                                                          }
                {/* --------------------------------------------------------------------------------*/}
                <Col xs="12" md="12" sm="12">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0"><i className="mdi mdi-coffee"/>   Cafés</CardTitle>

                        <CardBody className="">
                            <div>
                                <h4>Cafe Art</h4>
                                <p>Turku Coffee Roastery coffee, Teepolu tea or the products in our display case can also be bought, for example, as gifts, gifts or for your 
                                    own celebrations.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.cafeart.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/sxvZAPvkwPq8AKES6" target="blank">Location</Button>
                                </p>

                                <h4>Bean Bar</h4>
                                <p>Bean Bar is a café in the heart of Turku, which offers delicious and tasty drinks such as a wide range of different coffees, teas, cocoa, 
                                    smoothies and much more.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.beanbar.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/Q4osd3KxFhHfG28h6" target="blank">Location</Button>    
                                </p>

                                <h4>Cafe Qwensel</h4>
                                <p>Qwensel House is an 18th-century bourgeois house that was spared the Turku fire in 1827.
                                    The house was formerly called the Corner of the Lord because Peter Brahe zoned the district court of appeal for officials, county leaders, and 
                                    nobles. Qwensel's house is named after its first well-known owner, Wilhelm Johan Qwensel, who bought the plot in 1695. He arrived in Turku 
                                    from Stockholm to work as an appellant in the Court of Appeal.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.cafeqwensel.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/7TDTyRSK5ntVvssx5" target="blank">Location</Button>    
                                </p>

                                <h4>Anniskelukahvila Tiirikkala</h4>
                                <p>Hundreds of years ago, in a fine area near the Aura River, a liter leaned against a fence. No one remembers the exact time when the liter-wide 
                                    wall boards were erected, but they are still standing and standing cool, gesturing against the fence.
                                    The liquor café Tiirikkala brought Nordic flavors and a strong atmosphere inside these ancient walls. Tiirikkala is everything you need.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.tiirikkala.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/4gJYjeqLkzrPsZV47" target="blank">Location</Button>    
                                </p>

                                <h4>Fabbe's Cafe</h4>
                                <p>Fabbes Café is a place for you. Come as you are, because this little corner café is meant for everyone. We serve lunch Mon-Fri from 11 am and we 
                                    always have one meat, one vegetarian and one vegan option. Our staff is always in a good mood and every customer gets a free smile when visiting 
                                    us!
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://fabbescafe.com/en/tervetuloa-valkommen-english/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://g.page/FabbesCafe?share" target="blank">Location</Button>    
                                </p>

                                <h4>Kahvila Gaggui</h4>
                                <p> CHANGE THIS FFS Tervetuloo meijä kaffelaa, Gaggui Kaffelaa. Me tehrää kaik meijä kaffela tuatteet iha ite, ain marmeladist sokerimassaa saakka. 
                                    Kaffetki me sul jauhetaa suaraa pavuist paika pääl, ni saat suaraa kuppiis  tuaret vast jauhettuu kaffet. Et tul säki vaa maistaa gaggui ja kaffet, 
                                    nährää kaffelas!
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="http://www.gaggui.com/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/a8R3Ltk45Tav1BGa7" target="blank">Location</Button>    
                                </p>

                                <h4>Cafe Carré</h4>
                                <p>Atmospheric café in the heart of Turku. The best light savory and sweetest delicacies, as well as salads. Also included.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://carre.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/1qaH11CP1wJjyb358" target="blank">Location</Button>    
                                </p>

                                <h4>Latte Cafe</h4>
                                <p>Welcome to Latte Cafe's website and webshop! It's all about good coffee and tasty food! Everything we have on display in the list in our coffee shops 
                                    is also available for you to order and enjoy in your home or office! And the list goes on - we have dozens of surprises and specialities ready for you! 
                                    We do catering for bigger and smaller events.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="http://lattecafe.biz/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/rdZ1EwqtaNJ2J7bH6" target="blank">Location</Button>    
                                </p>

                                <h4>Café Sirius</h4>
                                <p>Café Sirius serves savory and sweet, specialty coffees, tea and cold drinks. Our selection also includes Mövenpick ice cream. We serve lunch from Monday 
                                    to Friday from 11 am to 2 pm or until the food runs out. Every day also vegan options.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.cafesirius.fi/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/PUABYYFuNnmz5X2FA" target="blank">Location</Button>    
                                </p>

                                <h4>Cafe Fontana</h4>
                                <p>A laid-back meeting spot for friends with a captivating assortment for gourmands, all in the heart of Turku.
                                    <br></br><Button className="btn" color="secondary" size="sm" a href="https://www.fontana.fi/en/" target="blank">Website</Button>&nbsp;
                                    <Button className="btn" color="secondary" size="sm" a href="https://goo.gl/maps/XSkSFdMMz7ec7WbJ8" target="blank">Location</Button>    
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
