import React, { useState } from 'react';
import './../../../css/content.css';
import UserComp from './UserComp';
const ContentComp = (props) => {
    const [human, setHuman] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        bio: '',
        happiness: false
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Добавляем новый объект в массив human
        setHuman(prevHumans => [...prevHumans, formData]);
        // Сбрасываем форму после отправки
        setFormData({
            name: '',
            surname: '',
            bio: '',
            happiness: false
        });
    };
    return (
        <div className="contentcomp">
            <div className="rightcontent">
                <form className="formcomp" onSubmit={handleSubmit}>
                    <label>Введите имя: </label>
                    <input name="name" onChange={handleChange} value={formData.name} />
                    <label>Введите Фамилию: </label>
                    <input name="surname" onChange={handleChange} value={formData.surname} />
                    <label>Введите своё описание: </label>
                    <input name="bio" onChange={handleChange} value={formData.bio} />
                    <label>Вы счастливы?</label>
                    <input type="checkbox" name="happiness" onChange={handleChange} checked={formData.happiness} />
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <div className="defcomp">
                <div className="card"><UserComp human={human} /></div>
            </div>
        </div>
    );
}
export default ContentComp;