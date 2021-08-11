import './Simpson.css'

export default function Simpson({name, surname, age, info, photo}) {
    return (
        <div className='simpson'>
            <h2>{name} {surname}</h2>
            <h4>{age} years</h4>
            <p>{info}</p>
            <img src={photo} alt="img"/>
        </div>
    );
}
