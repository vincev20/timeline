

  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
     {id:1, content: 'Facebook Project', start: '2018-01-22', end:'2018-03-28'},
    {id: 7, content: 'SGDC Rack Delivery', start: '2018-01-26', end:'2018-02-09'},
    {id: 2, content: 'SGDC Cabling', start: '2018-01-26', end:'2018-02-23'},
    {id: 3, content: 'ECLS Eltek Rectifier and Cabling', start: '2018-01-26', end:'2018-02-23'},
    {id: 4, content: 'ECLS Starhub Power On', start: '2018-01-26', end:'2018-02-09'},
   
    {id: 5, content: 'Circuit Testing', start: '2018-03-12', end:'2018-03-23'},
    {id: 6, content: 'Starhub Cross Connect', start: '2018-03-05', end:'2018-03-16'},
   
   
    
     {id: 8, content: 'Ciena Equipment Delivery', start: '2018-01-22', end:'2018-03-02'},
      {id: 9, content: 'OME Installation', start: '2018-03-05', end:'2018-03-09'},
  ]);


 // Configuration for the Timeline
  var options = { height: '400px' };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);
