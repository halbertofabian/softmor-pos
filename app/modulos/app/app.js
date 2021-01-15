var urlApp = $(".urlApp").attr("urlApp")
var session = $(".session").attr("session")

// alert(session);

$(".tablas").DataTable({


    "ordering": true,

    "language": {

        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }

    }

});

$('.select2').select2();


$('#pds_descripcion_corta').summernote({
    placeholder: 'Descripción corta del producto',
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
    tabsize: 2,
    height: 150,
    toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['view', ['fullscreen', 'codeview', 'help']],
    ]
});
$('#pds_descripcion_larga').summernote({
    placeholder: 'Descripción larga del producto',
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
    tabsize: 2,
    height: 350,
});

// $('.select2').select2();

$(".inputN").number(true, 2);

// $("#pds_precio_publico").keyup(function () {
//     calcularPorncetaje()
// });
$("#pds_porcentaje_precio_publico,#pds_precio_compra,#pds_inpuesto").keyup(function () {
    calcularPrecioPublico()
    calcularPorcentajeDescuentoMayoreo()

});
$("#pds_precio_publico,#pds_precio_compra,#pds_inpuesto").keyup(function () {
    calcularPorcentajePublico()
    calcularPorcentajeDescuentoMayoreo()

});

$("#pds_porcentaje_precio_mayoreo").keyup(function () {
    calcularPrecioMayoreo()
    calcularPorcentajeDescuentoMayoreo()
});
$("#pds_precio_mayoreo").keyup(function () {
    calcularPorcentajeMayoreo()
    calcularPorcentajeDescuentoMayoreo()
});

$("#pds_precio_promocion").keyup(function () {
    calcularPorcentajeRebajado()
    calcularPorcentajeDescuentoRebajado()
});

$("#pds_porcentaje_precio_rebajado").keyup(function () {
    calcularPrecioRebajado()
    calcularPorcentajeDescuentoRebajado()

});



function calcularPrecioPublico() {

    var pds_porcentaje_precio_publico = parseFloat($("#pds_porcentaje_precio_publico").val()) == 0 ? parseFloat($("#pds_porcentaje_precio_publico").val(0)) : parseFloat($("#pds_porcentaje_precio_publico").val())
    



    var pds_precio_compra = parseFloat($("#pds_precio_compra").val()) == 0 ? parseFloat($("#pds_precio_compra").val(0)) : parseFloat($("#pds_precio_compra").val())



    var total_precio_publico = (pds_precio_compra * (pds_porcentaje_precio_publico / 100)) + pds_precio_compra
    

    $("#pds_precio_publico").val( Math.round(total_precio_publico))



}

function calcularPrecioMayoreo() {

    var pds_porcentaje_precio_mayoreo = parseFloat($("#pds_porcentaje_precio_mayoreo").val()) == 0 ? parseFloat($("#pds_porcentaje_precio_mayoreo").val(0)) : parseFloat($("#pds_porcentaje_precio_mayoreo").val())


    var pds_precio_compra = parseFloat($("#pds_precio_compra").val()) == 0 ? parseFloat($("#pds_precio_compra").val(0)) : parseFloat($("#pds_precio_compra").val())



    var total_precio_mayoreo = (pds_precio_compra * (pds_porcentaje_precio_mayoreo / 100)) + pds_precio_compra

    $("#pds_precio_mayoreo").val(Math.round(total_precio_mayoreo))



}

function calcularPorcentajePublico() {


    var pds_precio_compra = parseFloat($("#pds_precio_compra").val())
    var pds_precio_publico = parseFloat($("#pds_precio_publico").val())


    var total_porcentaje_publico = (pds_precio_publico / pds_precio_compra * 100) - 100
  

    $("#pds_porcentaje_precio_publico").val(Math.round(total_porcentaje_publico))
    // $("#pds_porcentaje_precio_publico").number(true, 2);



}


function calcularPorcentajeMayoreo() {


    var pds_precio_compra = parseFloat($("#pds_precio_compra").val())
    var pds_precio_mayoreo = parseFloat($("#pds_precio_mayoreo").val())


    var total_porcentaje_mayoreo = (pds_precio_mayoreo / pds_precio_compra * 100) - 100
  
    
    $("#pds_porcentaje_precio_mayoreo").val(Math.round(total_porcentaje_mayoreo))
    // $("#pds_porcentaje_precio_mayoreo").number(true, 2);



}

function calcularPrecioRebajado() {

    var pds_porcentaje_precio_rebajado = parseFloat($("#pds_porcentaje_precio_rebajado").val()) == 0 ? parseFloat($("#pds_porcentaje_precio_rebajado").val(0)) : parseFloat($("#pds_porcentaje_precio_rebajado").val())


    var pds_precio_compra = parseFloat($("#pds_precio_compra").val()) == 0 ? parseFloat($("#pds_precio_compra").val(0)) : parseFloat($("#pds_precio_compra").val())



    var total_precio_rebajado = (pds_precio_compra * (pds_porcentaje_precio_rebajado / 100)) + pds_precio_compra

    $("#pds_precio_promocion").val(Math.round(total_precio_rebajado))



}


function calcularPorcentajeRebajado() {


    var pds_precio_compra = parseFloat($("#pds_precio_compra").val())
    var pds_precio_promocion = parseFloat($("#pds_precio_promocion").val())


    var total_porcentaje_rebajado = (pds_precio_promocion / pds_precio_compra * 100) - 100
  
    
    $("#pds_porcentaje_precio_rebajado").val(Math.round(total_porcentaje_rebajado))
    $("#pds_porcentaje_precio_rebajado").number(true, 2);



}

function calcularPorcentajeDescuentoRebajado() {


    var pds_precio_publico = parseFloat($("#pds_precio_publico").val())
    var pds_precio_promocion = parseFloat($("#pds_precio_promocion").val())



    var total_porcentaje_descuento =  pds_precio_publico - pds_precio_promocion;
    total_porcentaje_descuento = total_porcentaje_descuento / pds_precio_publico;
    total_porcentaje_descuento = total_porcentaje_descuento * 100;
  
    
    $("#pds_porcentaje_descuento").val(Math.round(total_porcentaje_descuento))
    $("#pds_porcentaje_descuento").number(true, 2);
}

function calcularPorcentajeDescuentoMayoreo() {


    var pds_precio_publico = parseFloat($("#pds_precio_publico").val())
    var pds_precio_mayoreo = parseFloat($("#pds_precio_mayoreo").val())



    var total_porcentaje_descuento =  pds_precio_publico - pds_precio_mayoreo;
    total_porcentaje_descuento = total_porcentaje_descuento / pds_precio_publico;
    total_porcentaje_descuento = total_porcentaje_descuento * 100;
  
    
    $("#pds_porcentaje_descuento_mayoreo").val(Math.round(total_porcentaje_descuento))
    $("#pds_porcentaje_descuento_mayoreo").number(true, 2);
}