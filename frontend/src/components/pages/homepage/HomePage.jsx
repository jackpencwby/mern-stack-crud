import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderBar from './HeaderBar';
import Product from './Product';
import { getAllProduct } from '../../../fetchs/product';
import { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        const response = await getAllProduct();
        setProducts(response.data);
    };

    return (
        <Scrollbars>
            <div >
                <HeaderBar />
                <Container style={{ marginTop: "36px" }}>
                    <Row md={4}>
                        {products.map(product => <Col><Product data={product} /></Col>)}
                    </Row>
                </Container>
            </div>
        </Scrollbars>
    );
}

export default HomePage;