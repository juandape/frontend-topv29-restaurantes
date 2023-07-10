
import React from "react";
import { useState } from "react";
import './FormEdit.css'

export const FormEditRest = ({ Restaurant }) => {

    const [RestList, SetRestList] = useState ({});
    const handleChange = (e) => {
        const {name, value} = e.target;
            SetRestList({
                ...RestList,
                    [name]: value,
            });
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const url = `https://service-restaurants.onrender.com/api/restaurants/${Restaurants.id}`
        const config = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
                body: JSON.stringify(RestList),
        }

        try {
            const response = await fetch (url, config);
            const data = await response.json()
        } catch (error){
            console.log(error)
        }
            SetRestList({});
        }

    return(
        <>
             <form className="main__contact--formUp" onSubmit={handleSubmit}>
                <h1 className="edit--hotel">Edit Restaurants</h1>

                    <div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Edit name'
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Schedules
                            </label>
                            <input
                                 type="text"
                                name="city"
                                placeholder='Edit schedules'
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Category
                            </label>
                            <input
                                 type="text"
                                name="phone"
                                placeholder='Edit category'
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Adress
                            </label>
                            <input
                                 type="text"
                                name="phone"
                                placeholder='Edit address'
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Logo
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder='Edit logo'
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                    </div>
                        <button type="submit" data-testid='buttonEdit' className="contact__formUp--button">
                            Edit
                        </button>
            </form>
        </>
    );
};

    export default FormEditRest;
