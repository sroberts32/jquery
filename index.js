//This should work, i'm getting: $(document).ready(function() {
// ^ReferenceError: $ is not defined 
// and it's 5pm and I've got plans.  This is the best I can do today. 
$(document).ready(function() {
    $('#submit').on('click', function(){
        let name = $('#name');
        let email = $('#email');
        let phone = $('#phone');
        let message = $('#message-area');
        let required = [name, email, phone];
    })
    for (let i=0; i<required.length; i++) {
        if (required[i].val() == ""){
            $("p").html("Please Fill Out Required Fields");
            $("p").addClass("warning")
        } else {
            required[i].prev().addClass('warning')
        }
    } 
    if (!$('label').hasClass('warning')){
    $("#form").remove();
    $("h2").html("Thank you for your feedback");
}});