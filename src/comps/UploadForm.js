import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    // fungsi handler file
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        
        // cek if file exists and have an image type
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Silahkan input gambar (jpg atau png)');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
            </div>
        </form>
    )
}

export default UploadForm;