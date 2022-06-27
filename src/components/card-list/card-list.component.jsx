import React from 'react';

import { Card } from '../card/card.component';
import './card-list.style.css';
//props to wartości które przekazujemy np. <div cos=jakiespropsy /> a props.children to to co jest pomiędzy <div>..to..<div/>
export const CardList = props => (
	<div className='card-list'>
		{props.monsters.map(monster => (
			<Card monster={monster} key={monster.id} />
		))}
	</div>
);
