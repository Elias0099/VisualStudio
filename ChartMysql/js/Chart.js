var ctx = document.getElementById('myChart')
        var myChart = new Chart(ctx, {
            type:'bar',
            data:{
                datasets: [{
                    label: ['Grafico de Cantidad de Paises'],
                    backgroundColor: ['#64B5F6', '#42A5F5'],
                    borderColor: ['black'],
                    borderWidth:1
                }]
            },
            
            options:{
                scales:{
                    y:{
                        beginAtZero:true
                    }
                }
            }
        })

        let url = 'http://localhost:8080/api/orders/readall2'
        fetch(url)
            .then( response => response.json() )
            .then( datos => mostrar(datos) )
            .catch( error => console.log(error) )


        const mostrar = (articulos) =>{
            articulos.forEach(element => {
                myChart.data['labels'].push(element.ShipCountry)
                myChart.data['datasets'][0].data.push(element.cantidad)
                myChart.update()
            });
            console.log(myChart.data)
        }    