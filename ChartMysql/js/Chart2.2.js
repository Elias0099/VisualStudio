let url3 = 'http://localhost:8080/api/products/readall2';
        fetch(url3)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].Categoria}</td><td>${data[i].cantidad}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
            //console.log(body)
        }