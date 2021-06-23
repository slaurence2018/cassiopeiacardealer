import React from "react";
import ShoppingCartModal from './ShoppingCartModal'

export default function Header() {
    return (
        <header>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossOrigin="anonymous"/>
            <img alt="CASSIOPEIA CAR DEALER" src="/images/logo.png" />
            <h1>CASSIOPEIA CAR DEALER</h1>
            <ShoppingCartModal />
        </header>
    );
}