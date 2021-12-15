import React from 'react'
import { connect } from 'react-redux'
import { addProductAdmin } from '../store/productsAdmin'


class AddProductByAdminForm extends React.Component {
    constructor () {
        super()
        this.state = {
            name: '',
            image: '',
            ABV: '',
            stockAmount: '',
            price: '',
            description: '',
            alcoholType: '',
            showForm: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value,

        })
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.addProductAdmin({...this.state})
        this.setState({
            name: '',
            image: '',
            ABV: '',
            stockAmount: '',
            price: '',
            description: '',
            alcoholType: '',
        })
    }

    render () {
        const { name, image, ABV, stockAmount, price, description, alcoholType } = this.state
        const { handleChange, handleSubmit } = this

        return (
                <div className="add-user-form" >
                    <label htmlFor="add-new-user-button"><h1>View form with button below:</h1></label>
                    <button className="add-new-user-button" type="submit" onClick={() => this.setState({showForm: true})} >Add New Product</button>

                    {this.state.showForm && (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Add Name: </label>
                                <input name= "name" onChange={handleChange} value={name} />

                                <label htmlFor="image">Add Image Link: </label>
                                <input name= "image" onChange={handleChange} value={image} />

                                <label htmlFor="ABV">Add ABV: </label>
                                <input name= "ABV" onChange={handleChange} value={ABV} />

                                <label htmlFor="stockAmount">Add Stock Amount: </label>
                                <input name= "stockAmount" onChange={handleChange} value={stockAmount} />

                                <label htmlFor="price">Add Price: </label>
                                <input name= "price" onChange={handleChange} value={price} />

                                <label htmlFor="description">Add Description: </label>
                                <input name= "description" onChange={handleChange} value={description} type="text" />

                                <label htmlFor="alcoholType">Add Category: (tequila, rum, whiskey or wine) </label>
                                <input name= "alcoholType" onChange={handleChange} value={alcoholType} />
                            </div>
                                
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )}
                    
                </div>

        )
    }
 }

const mapDispatchToProps = (dispatch) => ({
         addProductAdmin: (productAdmin) => dispatch(addProductAdmin(productAdmin))
})


 export default connect(null, mapDispatchToProps)(AddProductByAdminForm)


