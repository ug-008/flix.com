const e = document.body;

export const fullscreen = {

    open: (o, callback) => {
    
        if(e.requestFullscreen) {
            e.requestFullscreen();
        } 
    
        else if(e.webkitRequestFullscreen) { /* Safari */
            e.webkitRequestFullscreen();
        } 
    
        else if (e.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

        o.setState({fullscreen: !o.state.fullscreen});

        if(callback) callback();
          
    },

    close: (o, callback) => {

        if (document.fullscreenElement || 
            document.webkitFullscreenElement || 
            document.mozFullScreenElement ) 
        {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } 
        
            else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } 
        
            else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }

            o.setState({fullscreen: !o.state.fullscreen});

            if(callback) callback();

        }
        
    },

    toggle: (o, callback) => {
        !o.state.fullscreen ? fullscreen.open(o, callback) 
                            : fullscreen.close(o, callback)
    },

}