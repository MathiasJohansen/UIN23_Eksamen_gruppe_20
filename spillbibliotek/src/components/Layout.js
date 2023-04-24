import Navbar from "./Navbar";

export default function Layout(props){
    return (  
        <div className='container'>
          <header>
              <h1>Spillbibiotek</h1>
          </header>
          <Navbar />
          {props.children}
        </div>
      );
}