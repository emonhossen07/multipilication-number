document.getElementById('getNamota').addEventListener('click', function () {

    const inputData = document.getElementById('getInput').value;
    const finalInputData = parseInt(inputData)
    // result show hre
    let getResult = document.getElementById('resultShow')
    let final = ''
    let html = ''
    for (let i = 1; i <= 10; i++) {
        final = i * finalInputData
        html += (`

            ${finalInputData} × ${i} = ${finalInputData * i + "<br/>"} `);
        document.getElementById('getInput').value = ''

    }
    getResult.innerHTML = html
})