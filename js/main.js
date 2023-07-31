document.getElementById('getNamota').addEventListener('click', function () {



    const inputData = document.getElementById('getInput').value;
    const finalInputData = parseInt(inputData)
    let final = ''

    console.log(final);
    if (inputData === '') {
        document.getElementById('errors').innerHTML = 'Field should not empty'
        document.getElementById('errors').style.color = 'red'


    } else {
        document.getElementById('no-more').style.display = 'none'
        document.getElementById('errors').innerHTML = ''
        // result show hre
        let getResult = document.getElementById('resultShow')

        let html = ''
        for (let i = 1; i <= 10; i++) {
            final = i * finalInputData
            html += (`

            <p class='resultDataCustom'>
            <span>${finalInputData}</span> × <span>${i}</span> = <span> ${finalInputData * i + "<br/>"}</span>
            </p>


             `);
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
