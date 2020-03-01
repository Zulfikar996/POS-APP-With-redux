
// import React, { Fragment } from 'react'

// const Navbar = ({ searchByName, searchCategory, sortBy }) => {
//         return(
//             <Fragment>
//             <nav className=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark" >
//                 <a className="navbar-brand">FamiRest</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Category
//                             </a>
                         
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <button onClick={searchCategory} className="dropdown-item" value={'Food'}>Food</button>
//                             <button onClick={searchCategory} className="dropdown-item" value={'Drink'}>Drink</button>
//                         </div>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Sort By
//                             </a>
                         
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <button onClick={sortBy} className="dropdown-item" value={'price'}>Price</button>
//                             <button onClick={sortBy} className="dropdown-item" value={'name'} >Name</button>
//                         </div>
//                         </li>
//                     <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter" style={{backgroundColor:'transparent', border:'0px solid black'}}>
//                     <i className="material-icons">
//                         add_to_queue
//                     </i>
//                     </button>
//                     </ul>
//                     <form className=" form-inline my-2 my-lg-0">
//                         <input onChange={searchByName} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     </form>
//                 </div>
//           </nav>
//             </Fragment>
//         );
//     }

// export default Navbar;