import React, { useState } from 'react';

function Poster() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handle = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        console.log(reader)
    };

    return (
        <>
            <div className="pos-dash">
                <form action="">
                    <h4>Poster</h4>
                    <input type="file" onChange={handle} />
                    <div className="from-dash">
                        <label >From:</label>
                        <input type="date" />
                        <input type="time" />
                    </div>
                    <div className="to-dash">
                        <label >To:</label>
                        <input type="date" />
                        <input type="time" />
                    </div>
                    <button type='Submit'>Add</button>
                </form>
                <div className="preview">
                    <h4>Preview</h4>
                    <div className="p-dash">
                        {selectedImage && <img src={selectedImage} alt="Selected" />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Poster;
