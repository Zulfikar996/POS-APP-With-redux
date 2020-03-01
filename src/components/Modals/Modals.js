// import React, {Component} from 'react'
       
// class Modals extends Component{

// constructor(props){
//     super(props)
//     this.state={
//         name: '',
//         category: 0,
//         price:'-',
//         stock:'-',
//         image:''
//     }
// }

// onChangeImageHandler = (e)=>{
//     this.setState({image:e.target.files[0]})
// }

// onChangeHandler = (e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }


// onSubmitHandler = (e)=>{
//     e.preventDefault()
//     let formData = new FormData()

//     formData.append("name", this.state.name)
//     formData.append("price", this.state.price)
//     formData.append("category", this.state.category)
//     formData.append("stock", this.state.stock)
//     formData.append("image", this.state.image)

//     let data = {
//         method: "POST",
//         body:formData
//     }

//     fetch(`http://localhost:4500/product`, data)
//     .then(response=>{
//         console.log('succes')
//         alert('data masuk')
//         window.location.href="/"
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }
//     render(){
//         return(
//              <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLongTitle">Add Data</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={this.onSubmitHandler}>
//                             <div className="input-group input-group-sm mb-3">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
//                                 </div>
//                                 <input onChange={this.onChangeHandler} name="name" type="text" className="form-control" aria-label="Small"aria-describedby="inputGroup-sizing-sm" value={this.state.name} />
//                             </div>
//                             <div className="input-group mb-3">
//                                 <div className="input-group-prepend">
//                                     <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
//                                 </div>
//                                 <select onChange={this.onChangeHandler} name="category" className="custom-select" id="inputGroupSelect01" value={this.state.category}>
//                                     <option selected value={0} disabled>Choose...</option>
//                                     <option value={1}>Food</option>
//                                     <option value={2}>Drink</option>
//                                 </select>
//                             </div>
//                             <div className="input-group input-group-sm mb-3">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
//                                 </div>
//                                 <input onChange={this.onChangeHandler} name="price" type="number" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.price}/>
//                             </div>
//                                 <div className="input-group input-group-sm mb-3">
//                                     <div className="input-group-prepend">
//                                         <span className="input-group-text" id="inputGroup-sizing-sm">Stock</span>
//                                     </div>
//                                     <input onChange={this.onChangeHandler} name="stock" type="number" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.stock} />
//                                 </div>
//                                 <div className="input-group mb-3">
//                                     <div className="input-group-prepend">
//                                         <span className="input-group-text">Image</span>
//                                     </div>
//                                     <div className="custom-file">
//                                         <input onChange={this.onChangeImageHandler} type="file" className="custom-file-input" id="inputGroupFile01" name="image" />
//                                         <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
//                                     </div>
//                                 </div>
//                                     <button type="submit" className="btn btn-primary">Add</button>
//                                 </form>
//                             </div>
//                             <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//            </div>
//         )
//     }

// }

// export default Modals