window.GAME_CONFIG = {
  world:{width:2200,height:1600,tile:50},
  player:{speed:190,runSpeed:285,maxStat:100},
  economy:{food:{rice:{name:"Rice & stew",price:450,hunger:32},jollof:{name:"Jollof rice",price:650,hunger:42},beans:{name:"Beans",price:350,hunger:28},akara:{name:"Akara & pap",price:300,hunger:22},water:{name:"Cold water",price:100,hunger:4}},rent:{room:1800}},
  jobs:[
    {id:"shop",name:"Shop assistant",place:"Central Market",duration:18,pay:900,xp:20,desc:"Help a market trader arrange goods."},
    {id:"delivery",name:"Errand runner",place:"Transport Hub",duration:14,pay:700,xp:16,desc:"Run a quick delivery across the neighborhood."},
    {id:"food",name:"Food stall helper",place:"Food Corner",duration:20,pay:1100,xp:25,desc:"Help serve customers during a busy period."}
  ]
};