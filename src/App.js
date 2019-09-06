import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
//importando estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//importando componentes
import Navigation from './components/Navigation';
import BarberShops from './components/BarberShops';

import Citas from './components/Citas';
import CreateBarber from './components/CreateBarber';
import FormBarbershop from './components/FormBarbershop';
import BarberShop from './components/BarberShop';
import CreateCita from './components/CreateCita';
import CitasListbarberos from './components/CitasListbarberos'
import Index from './components/Index'; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateService from './components/CreateService';




function App() {
  return (
    <Router>

        <Navigation />

  
       <Route path='/' exact component={Index}/>
       <Route path='/barber/:id' component={CreateBarber}/> 
       <Route path='/citas' component={Citas}/>
       <Route path='/createBarberShop/:id' component={FormBarbershop}/>
       <Route path='/barbershop/:id' component={BarberShop}/>
       <Route path='/addservice/:id' component={CreateService}/>
       <Route path='/createcita/:id' component={CreateCita}/>
 
       <Route path='/barberShops' component={BarberShops}/>
       <Route path='/signin' component={SignIn}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/citasbarberos/:id' component={CitasListbarberos}/>

       
    </Router>
  );
}

export default App;
