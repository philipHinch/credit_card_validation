//react select
import Select from 'react-select';
//context
import { useContext } from 'react';
import { Context } from '../context/Context';
//react select options
const titleOptions = [
    { value: 'mr', label: 'Mr', category: 'title' },
    { value: 'mrs', label: 'Mrs', category: 'title' },
    { value: 'miss', label: 'Miss', category: 'title' },
    { value: '', label: 'None', category: 'title' }

];
//react select options
const themeOptions = [
    { value: 'ripples', label: 'Ripples', category: 'theme' },
    { value: 'fancy', label: 'Fancy', category: 'theme' },
    { value: 'triangles', label: 'Triangles', category: 'theme' }
]
//react select options
const backgroundOptions = [
    { value: 'blue', label: 'Blue', category: 'background' },
    { value: 'black', label: 'Black', category: 'background' },
    { value: 'pink', label: 'Pink', category: 'background' },
    { value: 'red', label: 'Red', category: 'background' }
]
//custom react select styles
const customStyles = {
    option: (styles, state) => ({
        ...styles,
        cursor: 'pointer',
        width: '100%',
        letterSpacing: '2px'
    }),
    control: (styles) => ({
        ...styles,
        cursor: 'pointer',
        width: '100%',
        minWidth: '250px',
        letterSpacing: '2px'

    })
}


const Form = () => {

    const context = useContext(Context)

    const { dispatch, name, title, font_theme, back_color } = context

    const handleChange = (e) => {
        console.log(e);
    }

    const handelNameChange = (e) => {
        dispatch({ type: 'NAME', payload: e.target.value })
    }

    return (
        <form>
            <div className="titleContainer">
                <label htmlFor="title">Title:</label>
                <Select options={titleOptions} defaultValue={{ value: 'mr', label: 'Mr' }} styles={customStyles} onChange={handleChange} />
            </div>
            <div className="nameInputContainer">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" max='20' onChange={handelNameChange} />
            </div>
            <div className="frontBackgroundContainer">
                <label htmlFor="frontBackground">Front Theme:</label>
                <Select options={themeOptions} defaultValue={{ value: 'ripples', label: 'Ripples' }} styles={customStyles} onChange={handleChange} />
            </div>
            <div className="backBackgroundContainer">
                <label htmlFor="backBackground">Back Color:</label>
                <Select options={backgroundOptions} defaultValue={{ value: 'blue', label: 'Blue' }} styles={customStyles} onChange={handleChange} />
            </div>
        </form>
    );
}

export default Form;