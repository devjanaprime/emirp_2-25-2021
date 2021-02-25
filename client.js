// restaurant table management example
// small cafe with 2 servers and 6 tables
let servers = [];
let tables = [];

function addServer( fName, lName, id ){
    // new server
    const newServer = { 
        fName: fName, 
        lName: lName, 
        id: id 
    } // end newServer
    servers.push( newServer );
} // end addServer

function addTable( num, occupancy, serverId ){
    let newTable = {
        num: num,
        occupancy: occupancy,
        serverId: serverId,
        seated: 0
    } // end newTable
    tables.push( newTable );
} // end addTable

function seatedTables(){
    let count = 0;
    let customers = 0;
    // loop through tables
    for( let i=0; i<tables.length; i++ ){
        // count any with .seated more than 0
        const thisTable = tables[i];
        if( thisTable.seated > 0 ){
            // increment tables wih customers
            count++;
            // add to toal customers
            customers += thisTable.seated;
        } // people seated here
    } // end for
    // return count
    let seated = {
        customers: customers,
        tablesSeated: count
    }
    return seated;
} // end seatedTables

function customersForServer( serverId ){
    // which server?
    // loop through servers & look for an id match
    let thisServer = {};
    for( let i=0; i<servers.length; i++){
        if( servers[i].id === serverId ){
            thisServer = servers[i];
        } //end match
    } // end for

    /// - TEST - ///
    console.log( 'server:', thisServer );
    let count = 0;
    // loop through tables
    for( let i=0; i< tables.length; i++ ){
        const thisTable = tables[i];
        // check if the table's serverId is a match
        if( thisTable.serverId === serverId ){
            // if so add to this server's total
            count += thisTable.seated;
        }
    } // end for
    console.log( thisServer.fName, 'has', count, 'customers' );
    return count;
} // end customersForServer

// set up
addServer( 'Dev', 'Jana', 1 );
addServer( 'Kris', 'Szafranski', 2 );
addTable( 1, 4, 1 );
addTable( 2, 4, 1 );
addTable( 3, 2, 1 );
addTable( 4, 8, 2 );
addTable( 5, 5, 2 );
addTable( 6, 3, 2 );

// 2 people sit at table 2 
tables[1].seated = 2;
// party of 7 sits at table 4
tables[3].seated = 7;
// party of 3 sites at table 6
tables[5].seated = 3

console.log( tables );

