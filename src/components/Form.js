//react select
import Select from 'react-select';

const titleOptions = [
    { value: 'mr', label: 'Mr' },
    { value: 'mrs', label: 'Mrs' },
    { value: 'miss', label: 'Miss' }
];

const themeOptions = [
    { value: 'ripples', label: 'Ripples' },
    { value: 'fancy', label: 'Fancy' },
    { value: 'triangles', label: 'Triangles' }
]

const backgroundOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'black', label: 'Black' },
    { value: 'pink', label: 'Pink' },
    { value: 'red', label: 'Red' }
]

const customStyles = {
    option: (styles, state) => ({
        ...styles,
        cursor: 'pointer',
    }),
    control: (styles) => ({
        ...styles,
        cursor: 'pointer',
    })
}


const Form = () => {



    return (
        <form>
            <div className="titleContainer">
                <label htmlFor="title">Title:</label>
                <Select options={titleOptions} defaultValue={{ value: 'mr', label: 'Mr' }} styles={customStyles} />
            </div>
            <div className="nameInputContainer">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="frontBackgroundContainer">
                <label htmlFor="frontBackground">Front Theme:</label>
                <Select options={themeOptions} defaultValue={{ value: 'ripples', label: 'Ripples' }} styles={customStyles} />
            </div>
            <div className="backBackgroundContainer">
                <label htmlFor="backBackground">Back Color:</label>
                <Select options={backgroundOptions} defaultValue={{ value: 'blue', label: 'Blue' }} styles={customStyles} />
            </div>
        </form>
    );
}

export default Form;