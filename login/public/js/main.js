var currentPage = 1;
function loadPage(page){
    currentPage = page;
    $.ajax({
        url: '/api/account/?page=' + page,
        type: 'GET'
    })
    .then(data => {
        $('#content').html('')
        for(let i = 0 ; i < data.length ; i++){
            const element = data[i];
    
            var item = $(`
                <h1>${element.username} : ${element.password}</h1>
            `)
    
            $('#content').append(item)
        }
    })
    .catch(err =>{
        console.log('API loi');
    })
}

function nextPage(page){
    currentPage++;
    $.ajax({
        url: '/api/account/?page=' + currentPage,
        type: 'GET'
    })
    .then(data => {
        $('#content').html('')
        for(let i = 0 ; i < data.length ; i++){
            const element = data[i];
    
            var item = $(`
                <h1>${element.username} : ${element.password}</h1>
            `)
    
            $('#content').append(item)
        }
    })
    .catch(err =>{
        console.log('API loi');
    })
}

function previousPage(){
    currentPage--;
    $.ajax({
        url: '/api/account/?page=' + currentPage,
        type: 'GET'
    })
    .then(data => {
        $('#content').html('')
        for(let i = 0 ; i < data.length ; i++){
            const element = data[i];
    
            var item = $(`
                <h1>${element.username} : ${element.password}</h1>
            `)
    
            $('#content').append(item)
        }
    })
    .catch(err =>{
        console.log('API loi');
    })
}