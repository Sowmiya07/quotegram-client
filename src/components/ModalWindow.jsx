import React from 'react';
import '../styles/ModalWindow.css';

const sendPostToServer = (event) => {
    const imageFile = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    fetch('http://localhost:8080/api/v1/user-profile/image/upload', {
        method: 'POST',
        body: formData
    }).then(console.log("success"));
}

function ModalWindow() {
    return (
        <div className="modal">
            <div className="model-content">
                <h2>Create New post</h2>
                <input type="file" className="upload-file" id="file" />   
                <button className="create-btn" onClick={sendPostToServer}>CREATE POST</button>
            </div>
        </div>
    )
}

export default ModalWindow;