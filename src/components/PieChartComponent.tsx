import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Fruit } from '../models/Fruit';

interface Props {
  fruits: Fruit[];
}

const PieChartComponent: React.FC<Props> = ({ fruits }) => {
  const data = fruits.reduce<Record<string, number>>((acc, fruit) => {
    acc[fruit.name] = (acc[fruit.name] || 0) + fruit.nutritions.calories;
    return acc;
  }, {});

  const chartData = Object.entries(data).map(([name, calories]) => ({
    name,
    calories,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className='pie-chart-container'>
      <PieChart width={800} height={400}>
        <Pie
          dataKey='calories'
          isAnimationActive={false}
          data={chartData}
          cx='50%'
          cy='50%'
          outerRadius={120}
          label={({ name }) => name} // Shorter label format
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className='chart-legend'>
        <Legend
          layout='horizontal'
          align='center'
          verticalAlign='bottom'
          wrapperStyle={{
            maxWidth: '90%',
            marginTop: '20px',
            overflowY: 'auto',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  );
};

export default PieChartComponent;
