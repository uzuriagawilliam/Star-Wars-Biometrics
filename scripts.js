const gitBtn = document.querySelector('#btnSwc');
const gitOutput = document.querySelector('#git-output');


//let chName = gitBtn.addEventListener('charaterName').value;
//charaterName

const getApi = () =>{
    const chName = document.querySelector('#charaterName').value;
    document.getElementById('charaterName').value = "";
    console.log(chName);
    
    fetch(`https://www.swapi.tech/api/people/?name=${chName}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(res => res.json())
    .then(data => 
    {
        console.log(data);
        let results = `Height: ${data.result[0].properties.height}, mass: ${data.result[0].properties.mass} kg, gender: ${data.result[0].properties.gender}, haircolor: ${data.result[0].properties.hair_color}`;        
        
        console.log(results);
        let textArea = document.getElementById('swCharaters');
        textArea.value = results;
        
    })
    .catch(err => console.log(err))
}
gitBtn.addEventListener('click', getApi);