import React from "react";
import Navbar from "componentes/Navbar/Navbar";
import DataTable from "componentes/DataTable/DataTable";
import Footer from "componentes/Footer/Footer";
import BarChat from "componentes/Barcharts/Barcharts";
import DonutChart from "componentes/DonutChart/DonutChart";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%) </h5>
            <BarChat />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%) </h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default App;
