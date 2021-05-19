import BarChat from "components/BarChat";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart/Index";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React from "react";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div>
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                        <BarChat />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas Vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="px-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>
                <DataTable />

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;