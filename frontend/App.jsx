import React from "react"
import logo from "./assets/dfinity.svg"

import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"

//Import canister definitions like this:
import * as dulcesTradicionales from "../.dfx/local/canisters/dulcestradicionales_backend"

import  CrearProducto  from "./components/CrearProducto"
import CrearUsuario from "./components/CrearUsuario"
//import Principal from "./components/Principal"
import { Encabezado } from "./components/Encabezado"

function App() {

  return (
    <div className="App">
    <div>
    <Encabezado></Encabezado>
    <img src={logo} className="App-logo" alt="logo" />
      <div className="auth-section">
      
      <ConnectButton />
        
    </div>
    <ConnectDialog />
    </div>
    
    <header className="App-header">
    <br></br>
        <CrearProducto/>
        <br></br>
        <CrearUsuario/>
    </header>
      
      

    </div>
  )
}

const client = createClient({
  canisters: {
    dulcesTradicionales
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=be2us-64aaa-aaaaa-qaabq-cai" })
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)