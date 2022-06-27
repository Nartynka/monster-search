import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/serach-box.component';

class App extends React.Component {
	constructor() {
		super();
		//Tylko w konstruktorze przypisujemy state'owi wartość przez "=" po za używamy "this.setState()"
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	componentDidMount() {
		//lifecycle komponentu, react wyświetlił komponent
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(r => r.json()) //konwertujemy body odpowiedzi z serwera na json i dostajemy nowa promise
			.then(user => this.setState({ monsters: user }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);

		return (
			<div className='App'>
				<h1>Monster Search</h1>
				<SearchBox
					handleChange={this.handleChange}
					placeholder='Search Monster'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
