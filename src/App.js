import React from 'react';
import { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Header from './components/Header/header'; 
import ProductDetails from './components/ProductDetails/productDetails';
import ProductGrid from './components/ProductGrid/productGrid';
import Footer from './components/Footer/footer';
import DropdownMenu from './components/DropdownMenu/dropdownMenu';
import SearchBar from './components/SearchBar/searchBar';
import FilterSelection from './components/FilterSelection/filterSelection';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]); 

function Root() {
  const [dataFromChild, setDataFromChild] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  return (
      <div className="flex flex-col min-h-screen">
      <nav className="flex flex-row items-center bg-violet-500">
        <DropdownMenu />
        <Header />
      </nav>
      <div className="flex flex-col min-h-screen">
      <div className="my-4 flex flex-wrap items-start justify-around">
          <SearchBar onSearch={handleSearch} />
          <FilterSelection
            options={['By Brand', 'By Price', 'Newest First']}
            onSelect={handleFilterSelect}
          />
        </div>
        <main className="flex-grow container mx-auto">
          <Routes>
            <Route path="/products/:productId" element={<ProductDetails productDetails={dataFromChild}/>}>
            </Route>
            <Route path="/" element={<ProductGrid onDataFromChild={handleDataFromChild}/>}>
            </Route>
            </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}
