import React from 'react';
import { Fruit } from '../models/Fruit';
import { useJar } from '../context/JarContext';

interface Props {
  fruit: Fruit;
}

const FruitItem: React.FC<Props> = ({ fruit }) => {
  const { addToJar } = useJar();

  return (
    <div className='fruit-item'>
      {fruit.name} ({fruit.nutritions.calories} calories)
      <button onClick={() => addToJar(fruit)}>Add</button>
    </div>
  );
};

export default FruitItem;
