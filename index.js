// code your solution here
function superbowlWin(record){
    let records= [
        {year:'2015',result:"W"},
        {year:'2014', result:"N/A"},
        {year:'2013',result:'L'},
]
    let win = record.find(item => item.result === 'W');

    return win ? win.year : undefined; 
          
}superbowlWin()
     