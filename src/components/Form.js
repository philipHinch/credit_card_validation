//react select
import Select from 'react-select';
//context
import { useContext } from 'react';
import { Context } from '../context/Context';
//react select options
const titleOptions = [
    { value: '', label: 'None', category: 'title' },
    { value: 'mr', label: 'Mr', category: 'title' },
    { value: 'mrs', label: 'Mrs', category: 'title' },
    { value: 'miss', label: 'Miss', category: 'title' }

];
//react select options
const themeOptions = [
    { value: 'fancy', label: 'Fancy', category: 'theme' },
    { value: 'ripples', label: 'Ripples', category: 'theme' },
    { value: 'squares', label: 'Squares', category: 'theme' },
    { value: 'triangles', label: 'Triangles', category: 'theme' },
    { value: 'zigZag', label: 'Zig-Zag', category: 'theme' },
]
//react select options
const backgroundOptions = [
    { value: 'blue', label: 'Blue', category: 'background' },
    { value: 'black', label: 'Dark', category: 'background' },
    { value: 'green', label: 'Green', category: 'background' },
    { value: 'pink', label: 'Pink', category: 'background' },
    { value: 'red', label: 'Red', category: 'background' },
    { value: 'yellow', label: 'Yellow', category: 'background' },
    { value: 'white', label: 'White', category: 'background' },
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

    console.log(context);

    const { dispatch, name, title, front_theme, back_color } = context

    const handleChange = (e) => {
        if (e.category === 'title') {
            dispatch({ type: 'TITLE', payload: e.value })
        } else if (e.category === 'theme') {
            dispatch({ type: 'THEME', payload: e.value })
        } else if (e.category === 'background') {
            dispatch({ type: 'BACKGROUND', payload: e.value })
        }
    }

    const handelNameChange = (e) => {
        dispatch({ type: 'NAME', payload: e.target.value })
    }

    return (
        <form>
            <div className="titleContainer">
                <label htmlFor="title">Title:</label>
                <Select options={titleOptions} defaultValue={{ value: '', label: 'None' }} styles={customStyles} onChange={handleChange} />
            </div>
            <div className="nameInputContainer">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" maxLength='20' onChange={handelNameChange} />
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