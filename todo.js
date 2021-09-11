$(document).ready(function(){
    $('body > div.container > div.notcomp > h3').hide();
    $('body > div.container > div.comp > h3').hide();
    $('body > div.container > div.prio > h3').hide();


$('.txtb').on('keyup', function(e){
    

    if(e.keyCode == 13 && $('.txtb').val() != ''){

        let task = $("<div class='task'></div>").text($('.txtb').val());
        $('.notcomp').append(task);

        //let del= $("<i class='fas fa-trash-alt'></i>")
        //let check= $("<i class='fas fa-check'></i>")
        //let prio= $("<i class='fas fa-exclamation'></i>")

        //task.append( del); //prio, check,
        $('body > div.container > div.notcomp > h3').show();
        $('body > div.container > div.comp > h3').show();
        $('body > div.container > div.prio > h3').show();
        
        
        $('.txtb').val('')

        
        $('.sortable' ).sortable({
            connectWith: '.sortable', function(event, ui) {
                ui.item.addClass('dropped');
            }
        });

        $('.sortable').draggable({
            connectToSortable: '.sortable',
            helper:'clone'
        });

        $('.reciclar').droppable({
            drop: function(e, ui){
                if(!ui.draggable.hasClass('dropped')){
                    ui.draggable.remove();  
                }  
            }
        });

        /*  del.on('click', function(){

            let p = $(this).parent();
            p.remove();
        })
        check.on('click', function(){
            let p = $(this).parent();
             $('.comp').append(p)
            $(this).remove();
            prio.remove(); 
            
            $('body > div.container > div.comp > h3').show();   
        })

        prio.on('click', function(){
            let p = $(this).parent();
            let textoPrio = $('.prio').append(p)
            $(this).remove(); 
            $('body > div.container > div.prio > h3').show();            
        })*/
    }
    
});

})