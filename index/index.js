document.addEventListener('DOMContentLoaded', function() {
    let helltask = document.getElementById('hell');

    setTimeout(function() {
        helltask.textContent = '10';
        
        setTimeout(function() {
            helltask.textContent = '9';
            
            setTimeout(function() {
                helltask.textContent = '8';
                
                setTimeout(function() {
                    helltask.textContent = '7';
                    
                    setTimeout(function() {
                        helltask.textContent = '6';
                        
                        setTimeout(function() {
                            helltask.textContent = '5';
                            
                            setTimeout(function() {
                                helltask.textContent = '4';
                                
                                setTimeout(function() {
                                    helltask.textContent = '3';
                                    
                                    setTimeout(function() {
                                        helltask.textContent = '2';
                                        
                                        setTimeout(function() {
                                            helltask.textContent = '1';
                                            
                                            setTimeout(function() {
                                                helltask.textContent = 'Happy Independence Day';
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
