import { useEffect, useState } from 'react';
import axios from 'axios';

import './home.css';


function Home73() {

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [light, setLight] = useState(0);
    const [gas, setGas] = useState(0);
    const [water, setWater] = useState(0);

    const [antonovicha73Items, setantonovicha73Items] = useState([]);

    const [hide, setHide] = useState(true);

    const obj73 = {
        year: year,
        month: month,
        light: light,
        gas: gas,
        water: water
    };

    let years = [];
    for (let currentYear = 2021; currentYear <= 2032; currentYear++) {
        years.push(currentYear);
    }

    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

    useEffect(() => {
        axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/antonovicha73')
            .then(res => setantonovicha73Items(res.data));
    }, [])

    const postMockApi = () => {
        if (year === '') {
            alert('Ведіть рік!');
            return
        }
        if (month === '') {
            alert('Ведіть місяць!');
            return
        }
        if (light === 0) {
            alert('Ведіть показання світла!');
            return
        }

        if (gas === 0) {
            alert('Ведіть показання газу!');
            return
        }
        if (water === 0) {
            alert('Ведіть показання води!');
            return
        }

        setTimeout(() => window.location.reload(), 200);
        axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/antonovicha73', obj73);

    }

    const removePostMockApi = (obj) => {
        setTimeout(() => window.location.reload(), 200);
        if (obj.target.classList.contains('btn__remove')) {
            axios.delete(`https://633005f6f5fda801f8d97d50.mockapi.io/antonovicha73/${antonovicha73Items[obj.target.value].id}`);
            console.log('+');
        }
    }

    return (
        <div className='container'>
            <h1>Володимира Антоновича 73</h1>
            <button
                onClick={() => setHide(!hide)}
                className='btn'>Показання</button>

            {hide ?
                (<table>
                    <tr >
                        <th className='tr__table'>Рік</th>
                        <th className='tr__table'>Місяць</th>
                        <th className='tr__table'>Показання світла</th>
                        <th className='tr__table'>Показання газу</th>
                        <th className='tr__table'>Показання води</th>
                    </tr>
                    {antonovicha73Items.map((item, id) => (
                        <>
                            <tr className='light__blue' key={id} >
                                <th></th>
                                <th></th>
                                <th>{item.light}</th>
                                <th>{item.gas}</th>
                                <th>{item.water}</th>
                                <div className="remove">
                                    {antonovicha73Items[id].id === '1' ? null :

                                        <button className='btn__remove'
                                            value={id}
                                            onClick={(obj) => removePostMockApi(obj)}>
                                        </button>}
                                </div>
                                {console.log(antonovicha73Items)}
                            </tr>
                            <tr className='blue'>
                                <th>{item.year}</th>
                                <th>{item.month}</th>
                                <th>
                                    {antonovicha73Items[id].id === '1' ?
                                        antonovicha73Items[id].light :
                                        antonovicha73Items[id].light - antonovicha73Items[id - 1].light}
                                    {/* <input
                                        type="text"
                                        onChange={(e) => setLightRes(e.target.value)}
                                        value={antonovicha73Items[id].id === '1' ?
                                                antonovicha73Items[id].light :
                                                antonovicha73Items[id].light - antonovicha73Items[id - 1].light}
                                    /> */}
                                </th>
                                <th> {antonovicha73Items[id].id === '1' ?
                                    antonovicha73Items[id].gas :
                                    antonovicha73Items[id].gas - antonovicha73Items[id - 1].gas}
                                </th>
                                <th>{antonovicha73Items[id].id === '1' ?
                                    antonovicha73Items[id].water :
                                    antonovicha73Items[id].water - antonovicha73Items[id - 1].water}
                                </th>
                            </tr>

                        </>
                    ))}

                </table>
                )
                : (
                    <>
                        <table>
                            <tr >
                                <th className='tr__table'>Ведіть рік!</th>
                                <th className='tr__table'>Ведіть місяць!</th>
                                <th className='tr__table'>Ведіть показання світла!</th>
                                <th className='tr__table'>Ведіть показання газу!</th>
                                <th className='tr__table'>Ведіть показання води!</th>
                            </tr>
                            <tr>
                                <th>
                                    <select

                                        onChange={(event) => setYear(event.target.value)}>
                                        {years.map((year, id) => {
                                            return <option key={id} value={year}>{year}</option>
                                        })}

                                    </select>
                                </th>
                                <th>
                                    <select

                                        onChange={(event) => setMonth(event.target.value)}>
                                        {months.map((month, id) => (
                                            <option key={id} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </th>
                                <th>
                                    <input
                                        value={light}
                                        type="number"
                                        placeholder='світло'
                                        onChange={(e) => setLight(e.target.value)} />

                                </th>
                                <th>
                                    <input
                                        value={gas}
                                        type="number"
                                        placeholder='газ'
                                        onChange={(e) => setGas(e.target.value)} />
                                </th>
                                <th>
                                    <input
                                        value={water}
                                        type="number"
                                        placeholder='вода'
                                        onChange={(e) => setWater(e.target.value)} />
                                </th>
                            </tr>

                        </table>
                        <button
                            type='submit'
                            className='btn btn__red'
                            onClick={postMockApi}
                        >Відправити !</button>
                    </>


                )
            }





        </div >
    )
}

export default Home73;