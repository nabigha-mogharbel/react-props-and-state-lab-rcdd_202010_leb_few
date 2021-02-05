import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick=()=>{
    let endpoint='./api/pets';
    if(this.state.filters.type !== "all"){
      endpoint+=`?types=${this.state.filters.type}`
    }
    fetch(endpoint)
  .then(res => res.json())
  .then(data => this.setState({pets: data}))
  }
  onChangeType=({target: {value}})=>{this.setState({...this.state.filter,type:value})}
  onAdoptPets=(id)=>{const petlist=this.state.pets.map(pet => {return pet.id === id? {...pet, isAdopted: true}: pet})
this.setState({pets: petlist})}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onClickFilter={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pet={this.state.pet} onAdoptPets={this.onAdoptPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
