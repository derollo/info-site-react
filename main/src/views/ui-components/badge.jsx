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
                    <Card className="transCard">
                        <CardImg top width="100%" src={thrift} />
                        <CardBody>
                            <CardTitle>Thrift shops</CardTitle>
                            <CardText>A few thrift shops around Turku.</CardText>
                            <Button a href="https://www.kirpputorihaku.com/kirpputori/turku" target="blank"> Thrift shops</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card className="transCard">
                        <CardImg top width="100%" src={mall} />
                        <CardBody>
                            <CardTitle>Malls</CardTitle>
                            <CardText>There's a few malls around Turku, here are their locations.</CardText>
                            <Button a href="https://www.google.com/maps?client=firefox-b-d&q=kauppakeskus+turku&um=1&ie=UTF-8&sa=X&ved=2ahUKEwigmszt--rsAhUix4sKHYZmC0MQ_AUoAXoECA0QAw" target="blank">Malls</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card className="transCard">
                        <CardImg top width="100%" src={cafe} />
                        <CardBody>
                            <CardTitle>Cafés & Restaurants</CardTitle>
                            <CardText>Here's a list of cafés and restaurants in Turku.</CardText>
                            <Button a href="https://www.tripadvisor.fi/Restaurants-g189949-c8-Turku_Southwest_Finland.html" target="_blank">Cafés & Restaurants</Button>&nbsp;
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}

export default Badges;
