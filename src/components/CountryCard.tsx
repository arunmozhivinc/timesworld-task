import React from 'react';
import { Card } from 'react-bootstrap';

interface Country {
  name: string;
  region: string;
  flag: string;
}

const CountryCard: React.FC<{ country: Country }> = ({ country }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body className="d-flex align-items-center">
      <img src={country.flag} alt={country.name} width="40" height="25" className="me-3" />
      <div>
        <div>{country.name}</div>
        <small className="text-muted">{country.region}</small>
      </div>
    </Card.Body>
  </Card>
);

export default CountryCard;
