import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ data }) {
    return (
        <Card style={{ width: '18rem', marginBottom: "18px", color: "white" }} border="dark" bg="dark">
            <Card.Img variant="top" src={"http://localhost:8000/api/upload/" + data.image} height="275px" />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>฿ {data.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;