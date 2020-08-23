import React from 'react';
import './Trader.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCoins } from '@fortawesome/free-solid-svg-icons';

function Trader(props) {
  const img =
    'data:image/jpeg;base64,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';
  return (
    <div>
      <Card className='trader-card'>
        <span>
          <img src={img} className='avatar' alt='trader-avatar' />
        </span>
        <span>John Doe</span>
        <Card.Text>
          <span className='d-block'>
            <span>Remaining:</span>{' '}
            <span>
              <FontAwesomeIcon icon={faWallet} /> $500
            </span>
          </span>
          <span className='d-block'>
            <span>Worth:</span>{' '}
            <span>
              <FontAwesomeIcon icon={faCoins} /> $2000
            </span>
          </span>
        </Card.Text>
      </Card>
    </div>
  );
}

export default Trader;
