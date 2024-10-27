import React, { createContext, useState, useContext } from 'react';
import { Fruit } from '../models/Fruit';

interface JarContextType {
  jar: Fruit[];
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
}

const JarContext = createContext<JarContextType | undefined>(undefined);

export const JarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jar, setJar] = useState<Fruit[]>([]);

  const addToJar = (fruit: Fruit) => {
    setJar((prevJar) => [...prevJar, fruit]);
  };

  const addGroupToJar = (fruitsToAdd: Fruit[]) => {
    setJar((prevJar) => [...prevJar, ...fruitsToAdd]);
  };

  return (
    <JarContext.Provider value={{ jar, addToJar, addGroupToJar }}>
      {children}
    </JarContext.Provider>
  );
};

export const useJar = () => {
  const context = useContext(JarContext);
  if (context === undefined) {
    throw new Error('useJar must be used within a JarProvider');
  }
  return context;
};
