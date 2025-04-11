 export const fileUpload = async (file) => {

    if (!file) throw new Error('No files to upload');
    const url = 'https://api.cloudinary.com/v1_1/dcepvpnsh/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'react-journal');
    
    try {
        const resp = await fetch(`${url}`, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('Could not upload image');
        const cloudRespJson = await resp.json();
        if (cloudRespJson.error) throw new Error(cloudRespJson.error.message);
        return cloudRespJson.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }


 }