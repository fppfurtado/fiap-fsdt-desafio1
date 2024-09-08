async function submeterFormulario() {

    const a1 = document.getElementById('a1').value;
    const a2 = document.getElementById('a2').value;
    const a3 = document.getElementById('a3').value;
    const a4 = document.getElementById('a4').value;
    const a5 = document.getElementById('a5').value;
    const history = document.getElementById('history').value;

    const payload = {
        names: [],
        message: ''
    }

    payload.names.push(a1,a2,a3,a4,a5);
    payload.message = history;

    const url = 'https://fsdt-contact.onrender.com/contact';
    const request = new Request(
        url,
        {
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(payload),
            method: 'POST'
        }
    );

    try {
        const response = await fetch(
            request
        );
        
        if(!response.ok) {
            throw new Error('Response status: ' + response.status);
        }

        const json = await response.json();
        
    } catch (error) {
        console.log(error.message);
    }
    
}