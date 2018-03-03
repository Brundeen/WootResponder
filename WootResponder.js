var bot = {		
  eventChat: function(obj) {							
    var msg = obj.message,									
      msgArray = msg.split(" ");
        for (i = 0; i < msgArray.length; i++) {
          switch (msgArray[i]) {
            case 'bop':
	    case 'BOP':
	    case 'woot':
            case 'WOOT':
	    case 'dance':
	    case 'DANCE':					
	    case '!bop':
            case '!woot':
            case '!dance':
	      $('#woot').click();
									
              }
           }									
        } 
     }
										
API
.on(API.CHAT, $.proxy(bot.eventChat, this));

API.chatLog('WootResponder Active', true);
