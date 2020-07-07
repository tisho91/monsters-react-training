import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField: ''
        }

        // this.search = this.search.bind(this)
    }


    search= (e) => {
       this.setState({
           searchField: e.target.value
       })

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    monsters: [...response]
                })
            })
    }


    render() {
        const { monsters, searchField } =  this.state;
        const filtered = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return <div>
            <span>korrr</span>
            <SearchBox changeHandler={this.search}></SearchBox>
           <CardList monsters={filtered} ></CardList>
        </div>
    }
}

export default App;
