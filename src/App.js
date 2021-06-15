import React from 'react'
import Button from './component/Button'
import Card from './component/Card'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount () {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/france')
      const country = await result.json()
      this.setState({
        
      })
    } catch (error) {
      console.error(error)
    }
  }

  async getCountry(country) {

    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      // const result = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
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
      <Button onClick={() => this.getCountry('france')}>France</Button>
      <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
      <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
      <Card name = {this.state.name} 
      capital ={this.state.capital} flag = {this.state.flag} 
      population = {this.state.population}
      region = {this.state.regio} >
      </Card>
    </div>
  }
}

export default App
  
