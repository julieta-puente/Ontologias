/**
 * Created by jpuente on 19/4/16.
 */

function favourite(data) {
    var insertQuery = "PREFIX nao: <http://www.semanticdesktop.org/ontologies/2007/08/15/nao#>"+
        "INSERT DATA" +
        "{ GRAPH <http://example.org/favourited> { <" +
        data+  ">  nao:favouritedBy  'User' } }";

    var insertUrl = "http://dydra.com/julietapuente/ontologias-web/sparql";
    //insertUrl+=encodeURIComponent(insertQuery);

    $.ajax({
        type : 'post',
        dataType: 'json',
        url:insertUrl,
        data: {
            'update': insertQuery,
            'Accept': 'application/sparql-results+json',
        }

    });

    location.reload();
}

function unfavourite(data) {
    var insertQuery = "PREFIX nao: <http://www.semanticdesktop.org/ontologies/2007/08/15/nao#>"+
        "DELETE DATA" +
        "{ GRAPH <http://example.org/favourited> { <" +
        data+  ">  nao:favouritedBy  'User' } }";

    var insertUrl = "http://dydra.com/julietapuente/ontologias-web/sparql";
    //insertUrl+=encodeURIComponent(insertQuery);

    $.ajax({
        type : 'post',
        dataType: 'json',
        url:insertUrl,
        data: {
            'update': insertQuery,
            'Accept': 'application/sparql-results+json',
        }

    });
    location.reload();
}