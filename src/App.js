import React from 'react'
import Button from './component/Button'
import Card from './component/Card'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  componentDidMount () {
    this.getCountry('brazil')
  }

  getCountry = async (country) => {
    try {
      const result = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      const countries = await result.json()
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return <div>
      <div className="text-center">
        <Button onClick={() => this.getCountry('france')}>France</Button>
        <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
        <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('india')}>India</Button>
        <Button onClick={() => this.getCountry('taiwan')}>Taiwan</Button>
        <Button onClick={() => this.getCountry('algeria')}>Algerie</Button>
        <Button onClick={() => this.getCountry('morocco')}>Maroc</Button>
        <Button onClick={() => this.getCountry('poland')}>Pologne</Button>
        <Button onClick={() => this.getCountry('sri lanka')}>Sri Lanka</Button>
        <Button onClick={() => this.getCountry('congo')}>Congo</Button>
        <Button onClick={() => this.getCountry('gabon')}>Gabon</Button>
        <Button onClick={() => this.getCountry('Cambodia')}>Cambodge</Button>
      </div>
      <Card {...this.state} /> {/* équivalent à <Card name={this.state.name} ... />*/}
    </div>
  }
}

export default App