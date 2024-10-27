import React, { useState, useMemo } from 'react';
import { useJar } from '../context/JarContext';
import PieChartComponent from './PieChartComponent';

const Jar: React.FC = () => {
  const { jar } = useJar();
  const [showChart, setShowChart] = useState(false);

  const groupedFruits = useMemo(() => {
    return jar.reduce<Record<string, { count: number; calories: number }>>(
      (acc, fruit) => {
        if (!acc[fruit.name]) {
          acc[fruit.name] = { count: 0, calories: 0 };
        }
        acc[fruit.name].count += 1;
        acc[fruit.name].calories += fruit.nutritions.calories;
        return acc;
      },
      {}
    );
  }, [jar]);

  const totalCalories = jar.reduce(
    (sum, fruit) => sum + fruit.nutritions.calories,
    0
  );

  return (
    <div className='jar'>
      <h2>Jar</h2>
      <div className='jar-content'>
        <div className='jar-list'>
          {Object.entries(groupedFruits).map(
            ([fruitName, { count, calories }]) => (
              <div key={fruitName} className='jar-item'>
                <strong>{fruitName}</strong>: {count}{' '}
                {count > 1 ? 'pieces' : 'piece'}, {calories} calories
              </div>
            )
          )}
        </div>

        <div className='total-calories'>
          <strong>Total Calories:</strong> {totalCalories}
        </div>
        <button
          onClick={() => {
            console.log('Toggling showChart:', !showChart); // Check the toggle value
            setShowChart(!showChart);
          }}
        >
          {showChart ? 'Hide Pie Chart' : 'Show Pie Chart'}
        </button>
        <div
          className='pie-chart-wrapper'
          style={{ display: showChart ? 'block' : 'none' }}
        >
          <PieChartComponent fruits={jar} />
        </div>
      </div>
    </div>
  );
};

export default Jar;
