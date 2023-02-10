import React, { useState } from 'react'
import './../css/davlatlar.css'
function Davlatlar() {
    const [data, setData] = useState(false)
    const click = () =>{
        setData(prev => !prev)
    }
    return (
        <div>

            {
                data?(
                    <div className="form">
                        <form action="#">
                            <input type="text" placeholder='davlat nomi' />
                            <input type="text" placeholder='Poytaxti' />
                            <input type="number" placeholder='aholisi' />
                            <input type="number" placeholder='til' />
                            <input type="file" />
                            <input type="file" />
                            <button className='addBtn' onClick={click}>ADD</button>
                        </form>
                    </div>
                ):''
            }

            <table>
                <tr>
                    <th>Davlat nomi</th>
                    <th>Poytaxti</th>
                    <th>Aholisi</th>
                    <th>til</th>
                    <th>img</th>
                    <th>file</th>
                    <th>amal</th>
                </tr>
                <tr>
                    <td>UZB</td>
                    <td>Toshkent</td>
                    <td>5165165</td>
                    <td>UZ</td>
                    <td>img.png || img.jpg</td>
                    <td>file name</td>
                    <td>PUT | DELETE</td>
                </tr>
                <tr>
                    <td>Misr</td>
                    <td>Qohira</td>
                    <td>8456213</td>
                    <td>ARAB</td>
                    <td>img.png || img.jpg</td>
                    <td>file name</td>
                    <td>PUT | DELETE</td>
                </tr>
            </table>
            <button className='addBtn' onClick={click}>add</button>
        </div>
    )
}

export default Davlatlar