import React from 'react';
import { Fruit } from '../models/Fruit';
import { useJar } from '../context/JarContext';

interface Props {
  fruits: Fruit[];
  groupBy: string;
}

const FruitTable: React.FC<Props> = ({ fruits, groupBy }) => {
  const { addToJar, addGroupToJar } = useJar();

  const groupedFruits =
    groupBy === 'None' ? null : groupFruits(fruits, groupBy);

  const renderTableRows = (fruitsToRender: Fruit[]) =>
    fruitsToRender.map((fruit) => (
      <tr key={fruit.id}>
        <td>{fruit.name}</td>
        <td>{fruit.family}</td>
        <td>{fruit.order}</td>
        <td>{fruit.genus}</td>
        <td>{fruit.nutritions.calories}</td>
        <td>
          <button onClick={() => addToJar(fruit)}>Add</button>
        </td>
      </tr>
    ));

  if (groupBy === 'None') {
    return (
      <table className='fruit-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family</th>
            <th>Order</th>
            <th>Genus</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows(fruits)}</tbody>
      </table>
    );
  }

  return (
    <>
      {Object.entries(groupedFruits!).map(([groupName, groupFruits]) => (
        <div key={groupName}>
          <h3>
            {groupName}{' '}
            <button onClick={() => addGroupToJar(groupFruits)}>Add All</button>
          </h3>
          <table className='fruit-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Order</th>
                <th>Genus</th>
                <th>Calories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(groupFruits)}</tbody>
          </table>
        </div>
      ))}
    </>
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

export default FruitTable;
