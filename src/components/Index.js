import React, { Component } from "react";
import axios from 'axios';
//importando componentes
import BarberShops from "../components/BarberShops";
import ButtomSearch from "../components/ButtonSearch";
//


export default class Index extends Component {
 
  //Luego de montar el componente obtiene los barberos
     componentDidMount(){
      this.getBarberShops()     
    }
   //obtiene los barberos del servidor y los guarda en el estado
  async getBarberShops() {
    const { data } = await axios.get('http://localhost:5000/barberias')
  this.setState({barberShops: data})
   }
   //si hay barberos renderiza el componetnes BarberShopList
   sendProps(){
      if(this.state.barberShops){
      return  <BarberShops BarberShops={this.state.barberShops}/>
      }
    }
    searchBarberShop = async (buscar)=>{
     await this.getBarberShops()
      const { data } = await axios.post("http://localhost:5000/busqueda", buscar)
      //console.log(data.length);
      
       if(data.length!==0){  
        const newBarberShops = this.state.barberShops.filter(barberia => barberia._id === data[0]._id)    
       this.setState({barberShops:newBarberShops})
       
       }else{
        alert('no encontrada')
         this.getBarberShops();
       }
    }
  state = {
    barberShops: []
  }
  render() {
    
    return (
        <div className="container pt-4">
        <ButtomSearch searchBarberShop={this.searchBarberShop}/>
        {this.sendProps()}
        </div>
    );
  }
}
