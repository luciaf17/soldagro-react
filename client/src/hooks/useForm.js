import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    const handleChangeMultiple = (options, context) => {
        /* console.log(context)*/
        console.log(options)
        setValues({
            ...values,
            [context.name]: options.map(o => o)
        })
    }

    const handleReset = () => {
        setValues(initialState);
    };


    return [values, handleChange, handleChangeMultiple, handleReset];
}