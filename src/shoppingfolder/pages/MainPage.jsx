import React, {useState} from 'react';
import Banners from '../components/Banners';
import Footer from '../components/Footer';
import Collections from '../components/Collections';
import Header from '../components/Header';

import { Gents, Ladies } from '../data';
import WomenCollection from '../components/WomenCollection';


const MainPage = () => {

    const[gentsfashion, setGebtsFashion] = useState(Gents);
    const[ladiesFashions, setLadiesFashions] = useState(Ladies);

    return ( 
        <div>
            <Header />
            < Banners />
            <Collections gentsfashion ={gentsfashion}/>
            <WomenCollection ladiesFashions = {ladiesFashions}/>
            <Footer />
            
            


        </div>
     );
}
 
export default MainPage;