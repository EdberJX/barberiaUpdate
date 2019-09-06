import React, { Component } from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './card.css';
//import GraficoBarras from './GraficoBarras';

export default class Estadistica extends Component{
    
    async componentDidMount(){
       await  this.setState({idbarberia: this.props.idbarberia})
        this.getEstadistica();

    }
    async getEstadistica(){
        const res = await axios.get("http://localhost:5000/estadisticas/"+this.state.idbarberia)
        const nombre = res.data.map( barbe =>barbe.nombre);
        const servicios = res.data.map( barbe =>barbe.citasAtendidas);
      
        const data = {
            labels: nombre,
            datasets: [
              {
                label: 'Barberos vs Servicios realizados',
                backgroundColor: '#fffd82',
                borderColor: 'fffd82',
                borderWidth: 1,
                hoverBackgroundColor: 'fffd82',
                hoverBorderColor: 'green',
                data: [30,15]
              }
            ]
        };
        this.setState({
            barberosEstadistica: res.data,
        data: data
        })
      
        
    }
    
    state = {
        idbarberia: "",
        barberosEstadistica:[],
        data:[],
        displayName: 'BarExample'
    }
    render(){
        return(
            
            <div className=" text-center "id="essta">
                 <div>
              <h2>Servicios atendios por barberos</h2>
              <Bar
                data={this.state.data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            </div> 
          
        )
    }
}
/**
 * //<GraficoBarras barberosEstadistica={this.barberosEstadistica}/>
 */