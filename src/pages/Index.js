import React from 'react'
import { Link } from 'react-router-dom';

const Index = (props) => {

    //state to hold formData
    const [newForm, setNewForm] = React.useState({
        name: '',
        image: '',
        title: '',
    });

    //handleChange function for form
    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value});
    };

    //handleSubmit function for form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPeople(newForm);
        setNewForm({
            name: '',
            image: '',
            title: '',
        });
    };
 
    const loaded = () => {
        return props.people.map((person) => (
            <div
                key={person._id}
                className='person'>
                <Link to={`people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={newForm.name}
            name='name'
            placeholder='name'
            onChange={handleChange}
            />
            <input
            type='text'
            value={newForm.image}
            name='image'
            placeholder='image URL'
            onChange={handleChange}
            />
            <input
            type='text'
            value={newForm.title}
            name='title'
            placeholder='title'
            onChange={handleChange}
            />
            <input type='submit' value='Create Person' />

        </form>
        {props.people ? loaded() : loading()};
    </section>
    
  );
}

export default Index;