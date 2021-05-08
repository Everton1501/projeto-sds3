import React from 'react';
import Navbar from 'componentes/Navbar/Navbar';
import DataTable from 'componentes/DataTable/DataTable';
import Footer from 'componentes/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
    <div>
      <DataTable />
    </div>
      <Footer />
    </>
  );
}

export default App;
