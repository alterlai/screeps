roleSpawning = {

    run: function() {
    	var totalHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	var totalUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    	// Spawn harvester if there are less than 2 harvesters.
    	if(totalHarvesters.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }

        // Spawn Upgraders if there are less than 2 upgraders.
    	if(totalUpgraders.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
    }
}

module.exports = roleSpawning;