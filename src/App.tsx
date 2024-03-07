import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PartnersData from "./components/PartnersData/PartnersData";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { DataProvider } from "./components/PartnersData/DataProvider";
import TotalRecords from "./components/Table/TotalRecords";
import Sidebar from "./components/Sidebar/Sidebar";

export const App = () => {
  return (
    <>
      <div
        id="app"
        className="flex flex-col min-h-screen bg-gray-100 text-gray-900"
      >
        <Header title="Radius Event Planner" />
        <div className="flex-grow flex flex-wrap">
          <Sidebar />
          <main className="w-full sm:w-3/4 p-4">
            <h1 className="text-xl font-semibold mb-4">Partners Data</h1>
            <div className="overflow-x-auto">
              <DataProvider>
                <PartnersData />
                <TotalRecords />
              </DataProvider>
            </div>
          </main>
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
