import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, age, jerseynumber, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Team: {team}</Card.Title>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <Card.Title>Jersey Number: {jerseynumber}</Card.Title>
          <Card.Title>Age: {age}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player