import React, { Component } from 'react';

export const Chatbot = () => {


    (function(d, m){
        var kommunicateSettings = 
            {"appId":"cdfd5f6062a5f9d693302028aad6a9b3","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});



    return (
        <div>

        </div>
    );
}

export default Chatbot;