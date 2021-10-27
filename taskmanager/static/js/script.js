$(document).ready(function(){
    $('.sidenav').sidenav();

        // datepicker initialization
        let datepicker = document.querySelectorAll(".datepicker");
        M.Datepicker.init(datepicker, {
            format: "dd mmmm, yyyy",
            i18n: {done: "Select"}
        });
    
        // select initialization
        let selects = document.querySelectorAll("select");
        M.FormSelect.init(selects);

        $(document).ready(function(){
            $('.collapsible').collapsible();
          });

  });

  