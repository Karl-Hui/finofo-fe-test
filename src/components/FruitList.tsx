import React from 'react';
import { Fruit } from '../models/Fruit';
import FruitItem from './FruitItem';
import { useJar } from '../context/JarContext';

interface Props {
  fruits: Fruit[];
  groupBy: string;
}

const FruitList: React.FC<Props> = ({ fruits, groupBy }) => {
  const { addGroupToJar } = useJar();

  const groupedFruits =
    groupBy === 'None' ? null : groupFruits(fruits, groupBy);

  if (groupBy === 'None') {
    return (
      <div>
        {fruits.map((fruit) => (
          <FruitItem key={fruit.id} fruit={fruit} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {Object.entries(groupedFruits!).map(([groupName, groupFruits]) => (
        <div key={groupName}>
          <h3>
            {groupName}{' '}
            <button onClick={() => addGroupToJar(groupFruits)}>Add All</button>
          </h3>
          {groupFruits.map((fruit) => (
            <FruitItem key={fruit.id} fruit={fruit} />
          ))}
        </div>
      ))}
    </div>
  );
};

const groupFruits = (fruits: Fruit[], groupBy: string) => {
  return fruits.reduce((groups: Record<string, Fruit[]>, fruit) => {
    const key = fruit[groupBy.toLowerCase() as keyof Fruit] as string;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(fruit);
    return groups;
  }, {});
};

export default FruitList;
