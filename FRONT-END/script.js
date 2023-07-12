    $.ajax({
        url: "http://localhost:8000/api/v1/titles/",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
