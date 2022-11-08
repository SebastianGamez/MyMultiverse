import React, { useEffect, useState } from 'react'

import { Button } from './components/Button';
import { HeroComponent } from './components/HeroComponent'

import axios from 'axios';
import HeroType from './types/heroType'
import LinkedList from './structures/list/linkedList';


const heroes: LinkedList<HeroType> = new LinkedList();
const App = (): JSX.Element => {


  const [updateHeroes, setUpdateHeroes] = useState<number[]>([])
  const getNewHeroes = async() => {
    
    heroes.clear();
    for(let i = 0; i < 6; ++i){
      const idCharacter: number = Math.floor(Math.random() * 731) + 1;
      const { data } = await axios.get(`https://www.superheroapi.com/api.php/1804248263309067/${idCharacter}`);
      heroes.push(data);
    }
    setUpdateHeroes([0, 1, 2, 3, 4, 5]);
    
  }
  
  useEffect(() => {

    getNewHeroes();

  }, []);
  

  return (
    <>
      <section className="main__multiverse">
        
        <h1 className="multiverse__title">MyMultiverse</h1>
        <h2 className="multiverse__subtitle">Find your favorite superhero in other worlds. You'll generate universes, each time one different than the last, and every universe going to have principal heroes. Enjoy imagining superheros universes</h2>
        <div className="multiverse__heroes">
          
          {updateHeroes.map( i => {

            const {id, name, image} = heroes.get(i);

            return <HeroComponent key={id} image={image.url} name={name}/>

          })}

        </div>
        <div className="multiverse__controls">
          <h3 className="controls__title">Try luck traveling trough universes: </h3>
          <div className="controls__buttons">
            <Button
              title={'🢃'} 
              styles={'buttons__down'}
              onClick={getNewHeroes}
            />
            <Button
              title={'🢁'}  
              styles={'buttons__up'}
              onClick={getNewHeroes}
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default App;
