import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pet.map(pet => (<Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />))
      return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
