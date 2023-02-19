turnConfig = {
    iceServers: [
    {   
      urls: [ "stun:eu-turn4.xirsys.com" ]
    }, 
    {   
      username: "test",   
      credential: "285ff060-5a58-11eb-b269-0242ac140004",   
      urls: [       
        "turn:eu-turn4.xirsys.com:80?transport=udp",       
        "turn:eu-turn4.xirsys.com:3478?transport=udp",       
        "turn:eu-turn4.xirsys.com:80?transport=tcp",       
        "turn:eu-turn4.xirsys.com:3478?transport=tcp",       
        "turns:eu-turn4.xirsys.com:443?transport=tcp",       
        "turns:eu-turn4.xirsys.com:5349?transport=tcp"   
       ]
     }
   ]
}