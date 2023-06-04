import './FormEdit'
import React from "react";
const { useState } = require("react");

export const FormEdit = ({ Restaurant }) => {

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
        const url = `${import.meta.env.VITE_BASE_URL}/api/restaurants${Restaurant.id}`
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
                <h1 className="edit--hotel">Edit Restaurant</h1>

                    <div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                //placeholder={Restaurant.name}
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
                                //placeholder={Restaurant.schedules}
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
                               // placeholder={Restaurant.category}
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
                                //placeholder={Restaurant.adress}
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
                                //placeholder={Restaurant.logo}
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

    export default FormEdit;
