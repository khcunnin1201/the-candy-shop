$(document).ready(function() {
    $("#choc_items, #sour_items, #baked_items, #home").hide()

    $("#choc").click(function(){
        $("#choc_items").show()
        $("#sour_items").hide()
        $("#baked_items").hide()
        $(".choose").hide()
        $("#home").show()
    })
    $("#sour").click(function(){
        $("#sour_items").show()
        $("#choc_items").hide()
        $("#baked_items").hide()
        $(".choose").hide()
        $("#home").show()
    })
    $("#baked").click(function(){
        $("#baked_items").show()
        $("#choc_items").hide()
        $("#sour_items").hide()
        $(".choose").hide()
        $("#home").show()
    })
    $("#home").click(function(){
        $("#choc_items").hide()
        $("#sour_items").hide()
        $("#baked_items").hide()
        $(".choose").show()
        $("#home").hide()
    })
})
// end ready function
