import React, { createContext, useEffect, useState } from "react";
import { Asset, getAssets } from "../api/api";

interface AssetsContextType {
  terminaciones: Asset | undefined;
  aberturas: Asset | undefined;
  equipamiento: Asset | undefined;
}

export const AssetsContext = createContext<AssetsContextType>({
  terminaciones: undefined,
  aberturas: undefined,
  equipamiento: undefined,
});

interface props {
  children: React.ReactNode;
}

export const AssetsProvider = ({ children }: props) => {
  const [contextValue, setContextValue] = useState<AssetsContextType>({
    terminaciones: undefined,
    aberturas: undefined,
    equipamiento: undefined,
  });

  const handleRequest = async () => {
    try {
      const response = await getAssets();
      setContextValue({
        terminaciones: response.terminaciones,
        aberturas: response.aberturas,
        equipamiento: response.equipamiento,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <AssetsContext.Provider value={contextValue}>
      {children}
    </AssetsContext.Provider>
  );
};
