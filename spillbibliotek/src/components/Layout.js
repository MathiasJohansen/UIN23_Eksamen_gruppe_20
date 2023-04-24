import Navbar from "./Navbar";

export default function Layout({children}){
    return (  
        <div className='container'>
          <header>
              <h1><a href="/">MACs Gamehub</a></h1> 
              <Navbar />
          </header>
         
          {children}
        </div>
      );
}  