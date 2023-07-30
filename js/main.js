document.getElementById('getNamota').addEventListener('click', function () {

    document.getElementById('no-more').style.display = 'none'

    const inputData = document.getElementById('getInput').value;
    const finalInputData = parseInt(inputData)


    if (inputData === '') {
        alert('Field should no empty')
        document.getElementById('no-more').style.display = 'block'
    } else {

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

    }


})

/* For redirect page */


document.getElementById('redirectPage').addEventListener('click', function () {
    console.log('click');
    window.location.href = "pages/main.html";
})
